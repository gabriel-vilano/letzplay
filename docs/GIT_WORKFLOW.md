# GIT_WORKFLOW.md — LetzPlay

Guia de workflow Git do projeto. Define estrutura de branches, fluxo de trabalho, versionamento e boas práticas.

> Convenções de commits (prefixos, formato, idioma) estão no `CLAUDE.md`, seção "Commits".

---

## Estrutura de branches

```
master (branch principal, sempre estável)
  └── branches temporárias por feature/fix/chore
```

Não utilizamos branches de ambiente (develop, staging, etc). O projeto segue um modelo simples: `master` é a fonte de verdade, e todo trabalho significativo acontece em branches temporárias que são mergeadas de volta.

---

## Convenção de nomes de branch

```
<tipo>/<descrição-curta>
```

| Tipo        | Quando usar                            | Exemplo                             |
| ----------- | -------------------------------------- | ----------------------------------- |
| `feature/`  | Nova funcionalidade                    | `feature/auth`                      |
| `fix/`      | Correção de bug                        | `fix/login-validation`              |
| `chore/`    | Config, dependências, CI               | `chore/setup-github-actions`        |
| `refactor/` | Reestruturação sem mudar comportamento | `refactor/extract-button-component` |
| `docs/`     | Documentação significativa             | `docs/api-reference`                |

Regras:

- Sempre kebab-case
- Curto e descritivo (2-4 palavras)
- Sem prefixo de ticket (não temos issue tracker formal)

---

## Fluxo de trabalho

### Features e funcionalidades → via PR

```bash
# 1. Garantir que master está atualizada
git checkout master
git pull

# 2. Criar branch da feature
git checkout -b feature/auth

# 3. Trabalhar e commitar
git add <arquivos>
git commit -m "feat: adicionar tela de login"

# 4. Push e abrir PR
git push -u origin feature/auth
# Criar PR no GitHub com descrição

# 5. Após merge, limpar
git checkout master
git pull
git branch -d feature/auth
```

### Docs, config e fixes triviais → direto em master

```bash
git checkout master
git add <arquivos>
git commit -m "docs: atualizar README com instruções de setup"
git push
```

### Regra de decisão

| Situação                              | Destino          |
| ------------------------------------- | ---------------- |
| Muda comportamento do app             | Branch → PR      |
| Adiciona funcionalidade               | Branch → PR      |
| Refactor significativo                | Branch → PR      |
| Edição em CLAUDE.md, docs/\*          | Direto em master |
| Config (.gitignore, .env.example)     | Direto em master |
| Fix de typo ou ajuste trivial         | Direto em master |

---

## Pull requests

### Formato

- Título curto (< 70 caracteres), seguindo o estilo dos commits
- Descrição com:
  - **O que** foi feito (resumo em 1-3 bullets)
  - **Por que** (contexto, JTBD relacionado)
  - **Como testar** (passos para verificar)
- O template em `.github/pull_request_template.md` já traz essas seções e um checklist — é preenchido automaticamente ao abrir o PR

### CI

GitHub Actions (`.github/workflows/ci.yml`) roda em todo PR e em todo push na `master`, em dois jobs paralelos:

- **Lint, testes e build** — `npm run lint`, `npm test`, `npm run build` (o build inclui a checagem de tipos)
- **Stories** — `npm run test:stories` no Chromium, incluindo o addon de a11y

Só mergear com a CI verde.

### Merge

- Merge via GitHub (botão "Merge pull request")
- Preferir **merge commit** (não squash) para manter o histórico de commits da branch
- Deletar a branch após merge

---

## Versionamento

Semver simplificado com tags Git. Prefixo `v`, começando em pré-release (`0.x.x`).

```
v0.MINOR.PATCH

MINOR → nova feature ou marco do roadmap
PATCH → fix ou ajuste dentro de uma feature
```

### Como criar uma tag

```bash
git checkout master
git tag -a v0.1.0 -m "Fundação: setup inicial e design system"
git push origin v0.1.0
```

---

## Proteção de branch

Configuração no GitHub (Settings → Branches → Branch protection rules):

- **Prevent force push:** ativado (protege o histórico)
- **Require pull request:** desativado (permite push direto para docs/config)
- **Require reviews:** desativado (projeto solo)

Essa configuração pode ser endurecida no futuro se o projeto ganhar colaboradores.

---

## Worktrees

Git worktrees permitem ter múltiplas branches checadas simultaneamente em diretórios separados. Útil para paralelismo com Claude Code.

### Quando usar

- Claude trabalhando em uma feature enquanto você trabalha em outra
- Testar uma ideia experimental sem afetar a branch atual
- Dois agentes Claude em paralelo em features independentes

### Quando NÃO usar

- Trabalho sequencial (uma coisa de cada vez) → branch normal
- Features que dependem uma da outra → fazer em sequência
- Aprendizado hands-on → fazer na branch, sem delegação

### Como usar com Claude Code

```bash
# Claude trabalha em ranking enquanto você trabalha em auth
claude --worktree feature-ranking

# Worktrees ficam em .claude/worktrees/
# Cleanup automático quando não há mudanças
```

### Cuidados

- Cada worktree precisa do próprio `npm install`
- Arquivos `.env` não são copiados automaticamente
- Uma branch só pode estar em uma worktree por vez
