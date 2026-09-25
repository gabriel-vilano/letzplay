// Único ponto de leitura das variáveis públicas do Supabase.
// O acesso precisa ser literal (`process.env.NEXT_PUBLIC_X`): o Next só embute
// no bundle do navegador referências estáticas, nunca `process.env[nome]`.

type SupabasePublicEnv = {
  url: string;
  publishableKey: string;
};

const PUBLISHABLE_KEY_PREFIX = "sb_publishable_";

/**
 * URL e publishable key do Supabase, validadas antes de criar qualquer client.
 * Ex: `const { url, publishableKey } = getSupabasePublicEnv()`.
 */
export function getSupabasePublicEnv(): SupabasePublicEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url) throw new Error(missingVarMessage("NEXT_PUBLIC_SUPABASE_URL"));
  if (!publishableKey) {
    throw new Error(missingVarMessage("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"));
  }
  assertPublishableKey(publishableKey);

  return { url, publishableKey };
}

function missingVarMessage(name: string): string {
  return `${name} ausente: defina no .env.local (dev) ou nas env vars da Vercel (deploy). Modelo em .env.example`;
}

function assertPublishableKey(value: string): void {
  if (value.startsWith(PUBLISHABLE_KEY_PREFIX)) return;

  // O valor nunca entra na mensagem: se for segredo, o erro o vazaria em logs e no navegador.
  throw new Error(
    `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY inválida: recebi ${describeKeyFormat(value)}, esperado uma publishable key (${PUBLISHABLE_KEY_PREFIX}…) de Project Settings → API Keys`
  );
}

function describeKeyFormat(value: string): string {
  if (value.startsWith("sb_secret_")) {
    return "uma secret key (sb_secret_…), que dá acesso total ao banco e nunca pode ir pro navegador";
  }
  if (value.startsWith("eyJ")) return "um JWT legado (anon ou service_role)";
  return "um valor em formato desconhecido";
}
