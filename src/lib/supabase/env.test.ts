import { afterEach, describe, expect, it, vi } from "vitest";

import { getSupabasePublicEnv } from "./env";

const PROJECT_URL = "https://exemplo.supabase.co";
const PUBLISHABLE_KEY = "sb_publishable_chave-de-teste";
// Montada em partes para o secret scanning do GitHub (repo público) não tratar o fixture como chave real
const FAKE_SECRET_KEY = ["sb", "secret", "valor-que-nao-pode-vazar"].join("_");

function stubSupabaseEnv(url: string | undefined, key: string | undefined): void {
  vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", url);
  vi.stubEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY", key);
}

function captureErrorMessage(run: () => unknown): string {
  try {
    run();
  } catch (error) {
    return error instanceof Error ? error.message : String(error);
  }
  throw new Error("Esperava que a função lançasse erro, mas ela retornou normalmente");
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getSupabasePublicEnv", () => {
  it("retorna URL e publishable key quando as duas são válidas", () => {
    stubSupabaseEnv(PROJECT_URL, PUBLISHABLE_KEY);

    expect(getSupabasePublicEnv()).toEqual({
      url: PROJECT_URL,
      publishableKey: PUBLISHABLE_KEY,
    });
  });

  it("aponta a variável que falta quando a URL não está definida", () => {
    stubSupabaseEnv(undefined, PUBLISHABLE_KEY);

    expect(() => getSupabasePublicEnv()).toThrow(/NEXT_PUBLIC_SUPABASE_URL ausente/);
  });

  it("aponta a variável que falta quando a chave não está definida", () => {
    stubSupabaseEnv(PROJECT_URL, undefined);

    expect(() => getSupabasePublicEnv()).toThrow(
      /NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ausente/
    );
  });

  it("rejeita secret key sem repetir o valor na mensagem", () => {
    stubSupabaseEnv(PROJECT_URL, FAKE_SECRET_KEY);

    const message = captureErrorMessage(getSupabasePublicEnv);

    expect(message).toMatch(/secret key \(sb_secret_…\)/);
    expect(message).not.toContain("valor-que-nao-pode-vazar");
  });

  it("rejeita a anon key legada (JWT)", () => {
    stubSupabaseEnv(PROJECT_URL, "eyJfake.eyJfake.fake");

    expect(() => getSupabasePublicEnv()).toThrow(/JWT legado/);
  });
});
