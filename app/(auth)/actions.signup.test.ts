import { beforeEach, describe, expect, it, vi } from "vitest";
import { createClient } from "@/src/lib/supabase/server";
import { login, resendOtp, signup, verifyOtp } from "./actions";
import {
  asSupabaseClient,
  buildFormData,
  createSupabaseMock,
  redirectSignal,
  type SupabaseMock,
} from "./actions.test-utils";

vi.mock("@/src/lib/supabase/server", () => ({ createClient: vi.fn() }));
// redirect() real lança NEXT_REDIRECT e interrompe a action; o mock imita isso
vi.mock("next/navigation", () => ({
  redirect: vi.fn((url: string) => {
    throw new Error(`NEXT_REDIRECT:${url}`);
  }),
}));

const INTERNAL_ERROR = "AuthApiError: connection to db-internal-42 refused";

let supabase: SupabaseMock;

beforeEach(() => {
  supabase = createSupabaseMock();
  vi.mocked(createClient).mockResolvedValue(asSupabaseClient(supabase));
});

describe("login", () => {
  it("rejeita email inválido sem chamar o Supabase", async () => {
    const result = await login(null, buildFormData({ email: "ana", password: "abc12345" }));
    expect(result).toEqual({ fieldErrors: { email: "Formato de e-mail inválido" } });
    expect(supabase.auth.signInWithPassword).not.toHaveBeenCalled();
  });

  it("exige senha", async () => {
    const result = await login(null, buildFormData({ email: "ana@test.com", password: "" }));
    expect(result).toEqual({ fieldErrors: { password: "Senha é obrigatória" } });
  });

  it("devolve mensagem genérica para credencial inválida, sem vazar o erro interno", async () => {
    supabase.auth.signInWithPassword.mockResolvedValueOnce({
      error: { message: INTERNAL_ERROR },
    });
    const result = await login(null, buildFormData({ email: "ana@test.com", password: "errada1" }));
    expect(result).toEqual({ error: "E-mail ou senha incorretos" });
  });

  it("autentica com email sem espaços e redireciona para o feed", async () => {
    const form = buildFormData({ email: "  ana@test.com ", password: "abc12345" });
    await expect(login(null, form)).rejects.toThrow(redirectSignal("/feed"));
    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "ana@test.com",
      password: "abc12345",
    });
  });
});

describe("signup", () => {
  const validFields = { name: "Ana Souza", email: "ana+bt@test.com", password: "abc12345" };
  const verifyUrl = "/cadastro/verificar?email=ana%2Bbt%40test.com";

  it("valida nome, email e senha antes de chamar o Supabase", async () => {
    const shortName = await signup(null, buildFormData({ ...validFields, name: "A" }));
    const badEmail = await signup(null, buildFormData({ ...validFields, email: "ana@" }));
    const weakPassword = await signup(null, buildFormData({ ...validFields, password: "abcdefgh" }));

    expect(shortName?.fieldErrors?.name).toBeDefined();
    expect(badEmail?.fieldErrors?.email).toBe("Formato de e-mail inválido");
    expect(weakPassword).toEqual({ fieldErrors: { password: "Senha não atende os requisitos" } });
    expect(supabase.auth.signUp).not.toHaveBeenCalled();
  });

  it("cria a conta com o nome nos metadados e redireciona para o OTP", async () => {
    await expect(signup(null, buildFormData(validFields))).rejects.toThrow(redirectSignal(verifyUrl));
    expect(supabase.auth.signUp).toHaveBeenCalledWith({
      email: "ana+bt@test.com",
      password: "abc12345",
      options: { data: { full_name: "Ana Souza" } },
    });
  });

  it("email já cadastrado: envia OTP novo sem criar usuário e segue o fluxo", async () => {
    supabase.auth.signUp.mockResolvedValueOnce({ error: { message: "User already registered" } });
    await expect(signup(null, buildFormData(validFields))).rejects.toThrow(redirectSignal(verifyUrl));
    expect(supabase.auth.signInWithOtp).toHaveBeenCalledWith({
      email: "ana+bt@test.com",
      options: { shouldCreateUser: false },
    });
  });

  it("email já cadastrado e falha no envio do OTP: mensagem amigável", async () => {
    supabase.auth.signUp.mockResolvedValueOnce({ error: { message: "User already registered" } });
    supabase.auth.signInWithOtp.mockResolvedValueOnce({ error: { message: INTERNAL_ERROR } });
    const result = await signup(null, buildFormData(validFields));
    expect(result).toEqual({ error: "Erro ao enviar código. Tente novamente." });
  });

  it("erro desconhecido: mensagem genérica, sem vazar o erro interno", async () => {
    supabase.auth.signUp.mockResolvedValueOnce({ error: { message: INTERNAL_ERROR } });
    const result = await signup(null, buildFormData(validFields));
    expect(result).toEqual({ error: "Erro ao criar conta. Tente novamente." });
    expect(supabase.auth.signInWithOtp).not.toHaveBeenCalled();
  });
});

describe("verifyOtp", () => {
  const form = () => buildFormData({ email: "ana@test.com", otp: "12345678" });

  it("rejeita OTP fora do formato sem chamar o Supabase", async () => {
    const result = await verifyOtp(null, buildFormData({ email: "ana@test.com", otp: "1234" }));
    expect(result?.fieldErrors?.otp).toBe("Código precisa ter 8 dígitos");
    expect(supabase.auth.verifyOtp).not.toHaveBeenCalled();
  });

  it("OTP expirado pede um novo código", async () => {
    supabase.auth.verifyOtp.mockResolvedValueOnce({ error: { message: "Token has expired" } });
    const result = await verifyOtp(null, form());
    expect(result).toEqual({ error: "Código expirado. Solicite um novo código." });
  });

  it("OTP inválido: mensagem genérica", async () => {
    supabase.auth.verifyOtp.mockResolvedValueOnce({ error: { message: INTERNAL_ERROR } });
    const result = await verifyOtp(null, form());
    expect(result).toEqual({ error: "Código inválido. Tente novamente." });
  });

  it("OTP válido verifica como `email` e segue para o perfil", async () => {
    await expect(verifyOtp(null, form())).rejects.toThrow(redirectSignal("/cadastro/perfil"));
    expect(supabase.auth.verifyOtp).toHaveBeenCalledWith({
      email: "ana@test.com",
      token: "12345678",
      type: "email",
    });
  });
});

describe("resendOtp", () => {
  it("exige email", async () => {
    const result = await resendOtp(null, buildFormData({ email: "" }));
    expect(result).toEqual({ error: "E-mail não informado." });
    expect(supabase.auth.resend).not.toHaveBeenCalled();
  });

  it("falha no reenvio: mensagem amigável", async () => {
    supabase.auth.resend.mockResolvedValueOnce({ error: { message: INTERNAL_ERROR } });
    const result = await resendOtp(null, buildFormData({ email: "ana@test.com" }));
    expect(result).toEqual({ error: "Erro ao reenviar código. Tente novamente." });
  });

  it("reenvia o OTP de signup", async () => {
    const result = await resendOtp(null, buildFormData({ email: "ana@test.com" }));
    expect(result).toEqual({ success: true });
    expect(supabase.auth.resend).toHaveBeenCalledWith({ type: "signup", email: "ana@test.com" });
  });
});
