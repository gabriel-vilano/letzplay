import { getE2eEnv } from "./env";

// O Supabase local entrega todo e-mail do Auth no Mailpit, que tem API HTTP:
// https://mailpit.axllent.org/docs/api-v1/

type MailpitSearchResult = {
  messages: { ID: string }[];
};

type MailpitMessage = {
  Text: string;
  HTML: string;
};

const OTP_PATTERN = /\b(\d{8})\b/;
const OTP_TIMEOUT_MS = 15_000;
const POLL_INTERVAL_MS = 500;

/** Espera o e-mail mais recente enviado para `email` e devolve o código de 8 dígitos dele. */
export async function readOtpFromMailpit(email: string): Promise<string> {
  const deadline = Date.now() + OTP_TIMEOUT_MS;

  while (Date.now() < deadline) {
    const otp = await findLatestOtp(email);
    if (otp) return otp;
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  throw new Error(
    `Nenhum e-mail com código de 8 dígitos chegou no Mailpit para ${email} em ${OTP_TIMEOUT_MS / 1000}s`
  );
}

async function findLatestOtp(email: string): Promise<string | null> {
  const { mailpitUrl } = getE2eEnv();
  const query = encodeURIComponent(`to:"${email}"`);
  const { messages } = await fetchJson<MailpitSearchResult>(`${mailpitUrl}/api/v1/search?query=${query}`);

  // A busca devolve do mais novo para o mais antigo
  const latest = messages[0];
  if (!latest) return null;

  const message = await fetchJson<MailpitMessage>(`${mailpitUrl}/api/v1/message/${latest.ID}`);
  const body = message.Text || message.HTML;
  return body.match(OTP_PATTERN)?.[1] ?? null;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Mailpit respondeu ${response.status} para ${url}`);
  }
  return (await response.json()) as T;
}
