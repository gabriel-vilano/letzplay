import { describe, expect, it } from "vitest";

import { findExposedSecrets } from "./next.config";

// Fixtures montados em partes para o secret scanning do GitHub (repo público)
// não tratar valores de teste como credenciais reais
const FAKE_SECRET_KEY = ["sb", "secret", "valor-que-nao-pode-vazar"].join("_");
const FAKE_POSTGRES_URL =
  "postgresql://postgres:" + "senha-falsa" + "@db.exemplo.supabase.co:5432/postgres";

// O Next declara NODE_ENV como obrigatório em NodeJS.ProcessEnv
function buildEnv(vars: Record<string, string>): NodeJS.ProcessEnv {
  return { NODE_ENV: "test", ...vars };
}

function fakeJwt(role: string): string {
  const encode = (part: object): string =>
    Buffer.from(JSON.stringify(part)).toString("base64url");
  return [encode({ alg: "HS256", typ: "JWT" }), encode({ role }), "assinatura"].join(".");
}

describe("findExposedSecrets", () => {
  it("aponta secret key do Supabase em variável pública", () => {
    expect(
      findExposedSecrets(buildEnv({ NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: FAKE_SECRET_KEY }))
    ).toEqual([
      {
        name: "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
        kind: "secret key do Supabase (sb_secret_…)",
      },
    ]);
  });

  it("aponta service_role legada (JWT) em variável pública", () => {
    const exposed = findExposedSecrets(
      buildEnv({ NEXT_PUBLIC_SUPABASE_ANON_KEY: fakeJwt("service_role") })
    );

    expect(exposed.map(({ name }) => name)).toEqual(["NEXT_PUBLIC_SUPABASE_ANON_KEY"]);
  });

  it("aponta connection string do Postgres com senha em variável pública", () => {
    const exposed = findExposedSecrets(buildEnv({ NEXT_PUBLIC_DATABASE_URL: FAKE_POSTGRES_URL }));

    expect(exposed.map(({ name }) => name)).toEqual(["NEXT_PUBLIC_DATABASE_URL"]);
  });

  it("aceita valores públicos: publishable key, anon JWT e URL do projeto", () => {
    expect(
      findExposedSecrets(
        buildEnv({
          NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_chave-de-teste",
          NEXT_PUBLIC_SUPABASE_ANON_KEY: fakeJwt("anon"),
          NEXT_PUBLIC_SUPABASE_URL: "https://exemplo.supabase.co",
        })
      )
    ).toEqual([]);
  });

  it("ignora segredos em variáveis server-only (sem NEXT_PUBLIC_)", () => {
    expect(
      findExposedSecrets(
        buildEnv({ SUPABASE_SECRET_KEY: FAKE_SECRET_KEY, POSTGRES_URL: FAKE_POSTGRES_URL })
      )
    ).toEqual([]);
  });

  it("nunca devolve o valor do segredo", () => {
    const serialized = JSON.stringify(
      findExposedSecrets(buildEnv({ NEXT_PUBLIC_QUALQUER: FAKE_SECRET_KEY }))
    );

    expect(serialized).not.toContain("valor-que-nao-pode-vazar");
  });
});
