import { beforeEach, describe, expect, it, vi } from "vitest";
import { createClient } from "@/src/lib/supabase/server";
import { checkUsername, createProfile } from "./actions";
import {
  asSupabaseClient,
  buildFormData,
  createSupabaseMock,
  redirectSignal,
  TEST_USER,
  type SupabaseMock,
} from "./actions.test-utils";

vi.mock("@/src/lib/supabase/server", () => ({ createClient: vi.fn() }));
// redirect() real lança NEXT_REDIRECT e interrompe a action; o mock imita isso
vi.mock("next/navigation", () => ({
  redirect: vi.fn((url: string) => {
    throw new Error(`NEXT_REDIRECT:${url}`);
  }),
}));

const INTERNAL_ERROR = "PostgrestError: relation profiles_pkey violated at node-7";

let supabase: SupabaseMock;

beforeEach(() => {
  supabase = createSupabaseMock();
  vi.mocked(createClient).mockResolvedValue(asSupabaseClient(supabase));
});

function mockUsernameTaken() {
  supabase.profilesQuery.single.mockResolvedValueOnce({ data: { id: "outro-user" }, error: null });
}

describe("checkUsername", () => {
  it("rejeita formato inválido sem consultar o banco", async () => {
    const result = await checkUsername("Ana Souza");
    expect(result).toEqual({
      available: false,
      error: "Apenas letras minúsculas, números, pontos e underscores",
    });
    expect(supabase.from).not.toHaveBeenCalled();
  });

  it("username em uso não está disponível", async () => {
    mockUsernameTaken();
    expect(await checkUsername("ana.bt")).toEqual({ available: false });
    expect(supabase.profilesQuery.eq).toHaveBeenCalledWith("username", "ana.bt");
  });

  it("username livre está disponível", async () => {
    expect(await checkUsername("ana.bt")).toEqual({ available: true });
  });
});

describe("createProfile", () => {
  it("sem sessão: pede login de novo", async () => {
    supabase.auth.getUser.mockResolvedValueOnce({ data: { user: null } });
    const result = await createProfile(null, buildFormData({ username: "ana.bt" }));
    expect(result).toEqual({ error: "Sessão expirada. Faça login novamente." });
    expect(supabase.profilesQuery.upsert).not.toHaveBeenCalled();
  });

  it("username inválido devolve erro de campo e não salva", async () => {
    const result = await createProfile(null, buildFormData({ username: "an" }));
    expect(Object.values(result?.fieldErrors ?? {})).toContain(
      "Username precisa ter pelo menos 3 caracteres",
    );
    expect(supabase.profilesQuery.upsert).not.toHaveBeenCalled();
  });

  it("username em uso: mensagem amigável e não salva", async () => {
    mockUsernameTaken();
    const result = await createProfile(null, buildFormData({ username: "ana.bt" }));
    expect(result).toEqual({ error: "Username já está em uso." });
    expect(supabase.profilesQuery.upsert).not.toHaveBeenCalled();
  });

  it("username é opcional: salva com null e vai para o feed", async () => {
    await expect(createProfile(null, buildFormData({ username: "" }))).rejects.toThrow(
      redirectSignal("/feed"),
    );
    expect(supabase.profilesQuery.single).not.toHaveBeenCalled();
    expect(supabase.profilesQuery.upsert).toHaveBeenCalledWith({
      id: TEST_USER.id,
      full_name: "Ana Souza",
      username: null,
      avatar_url: null,
    });
  });

  it("com foto: sobe no bucket do usuário e salva a URL pública", async () => {
    const avatar = new File(["png-bytes"], "foto.png", { type: "image/png" });
    const form = buildFormData({ username: "ana.bt", avatar });

    await expect(createProfile(null, form)).rejects.toThrow(redirectSignal("/feed"));
    expect(supabase.storage.from).toHaveBeenCalledWith("avatars");
    expect(supabase.avatarsBucket.upload).toHaveBeenCalledWith(
      "user-123/avatar.png",
      expect.any(File),
      { upsert: true, contentType: "image/png" },
    );
    expect(supabase.profilesQuery.upsert).toHaveBeenCalledWith(
      expect.objectContaining({ avatar_url: "https://cdn.test/avatars/user-123/avatar.png" }),
    );
  });

  it("falha no upload da foto: mensagem amigável e não salva", async () => {
    supabase.avatarsBucket.upload.mockResolvedValueOnce({ error: { message: INTERNAL_ERROR } });
    const avatar = new File(["png-bytes"], "foto.png", { type: "image/png" });
    const result = await createProfile(null, buildFormData({ username: "", avatar }));
    expect(result).toEqual({ error: "Erro ao enviar foto. Tente novamente." });
    expect(supabase.profilesQuery.upsert).not.toHaveBeenCalled();
  });

  it("corrida no username (unique violation no upsert): mensagem de username em uso", async () => {
    supabase.profilesQuery.upsert.mockResolvedValueOnce({
      error: { message: 'duplicate key value violates unique constraint "profiles_username_key"' },
    });
    const result = await createProfile(null, buildFormData({ username: "ana.bt" }));
    expect(result).toEqual({ error: "Username já está em uso." });
  });

  it("erro desconhecido ao salvar: mensagem genérica, sem vazar o erro interno", async () => {
    supabase.profilesQuery.upsert.mockResolvedValueOnce({ error: { message: INTERNAL_ERROR } });
    const result = await createProfile(null, buildFormData({ username: "ana.bt" }));
    expect(result).toEqual({ error: "Erro ao salvar perfil. Tente novamente." });
  });
});
