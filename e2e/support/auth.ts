import type { Page } from "@playwright/test";

/** Preenche e envia o formulário de login em /entrar. */
export async function submitLogin(page: Page, email: string, password: string): Promise<void> {
  await page.goto("/entrar");
  await page.getByLabel("E-mail", { exact: true }).fill(email);
  await page.getByLabel("Senha", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Entrar", exact: true }).click();
}

/** Preenche o campo de código (OTP) das telas de verificação e envia. */
export async function submitOtp(page: Page, otp: string): Promise<void> {
  await page.locator('input[autocomplete="one-time-code"]').fill(otp);
  await page.getByRole("button", { name: "Verificar", exact: true }).click();
}
