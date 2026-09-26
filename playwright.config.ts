import { defineConfig, devices } from "@playwright/test";

const PORT = 3000;
const BASE_URL = `http://127.0.0.1:${PORT}`;

// Os testes rodam contra o build de produção (`next start`), não o `next dev`: é o que
// vai pro ar, e evita o bug de hidratação do Turbopack (CLAUDE.md > Common hurdles).
// Pré-requisitos: Supabase local no ar e `npm run build` com as variáveis dele (README > Testes E2E).
export default defineConfig({
  testDir: "./e2e",
  forbidOnly: Boolean(process.env.CI),
  // Sem retry: teste instável precisa aparecer vermelho, não passar escondido na segunda tentativa
  retries: 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "mobile",
      use: { ...devices["Pixel 7"], viewport: { width: 430, height: 932 } },
    },
  ],
  webServer: {
    command: `npm run start -- --port ${PORT}`,
    url: `${BASE_URL}/entrar`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
