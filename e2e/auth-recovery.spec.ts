import { expect, test } from "@playwright/test";

import { submitLogin, submitOtp } from "./support/auth";
import { readOtpFromMailpit } from "./support/mailpit";
import { createConfirmedUser, uniqueEmail } from "./support/users";

test("recuperação: código do e-mail, nova senha e login com ela", async ({ page }) => {
  const email = uniqueEmail("recuperacao");
  const newPassword = "NovaSenha5678";
  await createConfirmedUser(email);

  await page.goto("/recuperar-senha");
  await page.getByLabel("E-mail", { exact: true }).fill(email);
  await page.getByRole("button", { name: "Enviar código", exact: true }).click();

  await expect(page).toHaveURL(/\/recuperar-senha\/verificar/);
  await submitOtp(page, await readOtpFromMailpit(email));

  await expect(page).toHaveURL(/\/recuperar-senha\/nova-senha$/);
  await page.getByLabel("Nova senha", { exact: true }).fill(newPassword);
  await page.getByLabel("Confirmar senha", { exact: true }).fill(newPassword);
  await page.getByRole("button", { name: "Redefinir senha", exact: true }).click();

  await expect(page).toHaveURL(/\/entrar\?recovered=true$/);
  await expect(page.getByRole("alert").filter({ hasText: "Senha redefinida com sucesso" })).toBeVisible();

  await submitLogin(page, email, newPassword);
  await expect(page).toHaveURL(/\/feed$/);
});
