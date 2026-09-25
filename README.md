# LetzPlay

Redesign focado em Beach Tennis do app LetzPlay — plataforma de gestão de rankings, torneios e comunidade de esportes de raquete.

> Side project com três objetivos simultâneos: portfolio de Design Engineer, produto real para lançamento, aprendizado técnico prático.

## Stack

Next.js 16 (App Router) · TypeScript 5 · React 19 · CSS Modules + Custom Properties · Supabase (Auth, PostgreSQL, Storage, RLS) · Vercel (deploy automático) · Vitest.

## Setup

```bash
git clone <repo-url>
cd letzplay
npm install
cp .env.example .env.local
# preencher .env.local com as credenciais do Supabase
npm run dev
```

App disponível em [http://localhost:3000](http://localhost:3000). O `dev` roda com host `0.0.0.0` para permitir testes em mobile via IP local da rede.

## Comandos

| Comando         | O que faz                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Dev server (host `0.0.0.0`)          |
| `npm run build` | Build de produção                    |
| `npm start`     | Roda o build localmente              |
| `npm run lint`  | ESLint                               |
| `npm test`      | Testes (Vitest)                      |

## Variáveis de ambiente

Copiar `.env.example` para `.env.local` e preencher:

| Variável                               | Descrição                                                          |
| -------------------------------------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`             | URL do projeto Supabase                                            |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publishable key (`sb_publishable_…`), pública por design — RLS protege os dados |

Nunca coloque a secret key (`sb_secret_…`) nem a `service_role` numa variável `NEXT_PUBLIC_*`: ela iria para o JavaScript do navegador. O build falha de propósito se detectar isso.

## Onde olhar para entender o projeto

| Documento              | Conteúdo                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `CLAUDE.md`            | Convenções, padrões de código, hurdles, filosofia de documentação. Onboarding completo |
| `docs/PRODUCT.md`      | Visão do produto, escopo do MVP, princípios de design, métricas de sucesso              |
| `docs/TOKENS.md`       | Design system: tokens primitivos, semânticos, padrões de implementação                  |
| `docs/GIT_WORKFLOW.md` | Estrutura de branches, fluxo de PR, versionamento                                       |
| `src/components/**/*.mdx` | Documentação de cada componente (renderizada no Storybook)                         |
| `supabase/migrations/` | Schema do banco versionado (tabelas, policies, buckets)                                 |

## Planejamento

Tracking de execução no **Linear** (`linear.app/letzplay`). Decisões duráveis ficam em markdown no repo (`CLAUDE.md`, `docs/`).

## Hurdles conhecidos

Problemas resolvidos e seus workarounds estão no `CLAUDE.md`, seção "Common hurdles". Atualizar sempre que resolver algo não-óbvio.
