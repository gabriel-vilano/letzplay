import { expect, test } from "@playwright/test";

import { submitLogin } from "./support/auth";
import { createConfirmedUser, TEST_PASSWORD, uniqueEmail } from "./support/users";

test.describe("Login e rota protegida", () => {
  test("senha errada mostra erro e mantém na tela de login", async ({ page }) => {
    const email = uniqueEmail("login-erro");
    await createConfirmedUser(email);

    await submitLogin(page, email, "SenhaErrada99");

    await expect(page.getByRole("alert").filter({ hasText: "E-mail ou senha incorretos" })).toBeVisible();
    await expect(page).toHaveURL(/\/entrar$/);
  });

  test("senha certa leva ao feed e, logado, /entrar volta pro feed", async ({ page }) => {
    const email = uniqueEmail("login");
    await createConfirmedUser(email);

    await submitLogin(page, email, TEST_PASSWORD);

    await expect(page).toHaveURL(/\/feed$/);
    await expect(page.getByRole("heading", { name: "Feed", exact: true })).toBeVisible();

    await page.goto("/entrar");
    await expect(page).toHaveURL(/\/feed$/);
  });

  test("sem sessão, /feed leva ao login", async ({ page }) => {
    await page.goto("/feed");

    await expect(page).toHaveURL(/\/entrar$/);
    await expect(page.getByRole("heading", { name: "Bem-vindo de volta", exact: true })).toBeVisible();
  });
});
