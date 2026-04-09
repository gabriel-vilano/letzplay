# PRD — LetzPlay Autenticação

Guia técnico para implementação no Claude Code.

**Stack:** Next.js 16 · TypeScript 5 · Tailwind v4 · Supabase · Vercel
**Data:** Abril 2026

---

## 1. Executive summary

### Problem statement

O LetzPlay atual apresenta falhas críticas no fluxo de autenticação: login mostra "sessão encerrada" sem contexto, criação de conta não oferece feedback adequado, e não existe verificação de email. Jogadores competitivos de Beach Tennis são obrigados a usar o app para inscrições em torneios, mas a experiência de entrada não corresponde à importância do produto.

### Proposed solution

Implementar um fluxo de autenticação completo com signup multi-step (credenciais + identidade pública), verificação de email via OTP, login direto, e recuperação de senha. O fluxo prioriza feedback claro em cada estado, validação em tempo real, e consistência visual.

### Success criteria

- Jogador completa signup (do Welcome ao Feed) sem erros não tratados
- Todos os estados de erro mostram mensagem descritiva e ação de recuperação
- Verificação OTP funcional com timer de reenvio e tratamento de expiração
- Validação de username em tempo real com debounce (sem requests desnecessários)
- Build passa sem erros de TypeScript (`npm run build`)
- Fluxo funcional em viewport mobile (max-width ~430px)

---

## 2. User experience & functionality

### 2.1 User persona

Jogador competitivo de Beach Tennis, 20-45 anos, que participa de rankings e torneios regularmente. Usa smartphone como dispositivo principal. Já conhece outros jogadores pelo nome. Precisa do LetzPlay para se inscrever em competições e acompanhar resultados.

### 2.2 User stories

#### US-01: Criar conta

Como jogador novo, quero criar minha conta com nome, email e senha, para poder acessar o app e me inscrever em competições.

**Critérios de aceite:**

- Formulário com 3 campos: nome (min. 2 chars), email (formato válido), senha (8+ chars, letra + número)
- Validação inline em tempo real com feedback visual (check/X, checklist de senha)
- CTA desabilitado até todos os campos válidos
- Erro de email duplicado mostra link para login
- Loading state no CTA durante submit
- Falha de rede preserva dados e permite retry

#### US-02: Verificar email

Como jogador criando conta, quero verificar meu email com um código de 6 dígitos, para provar que tenho acesso ao email informado.

**Critérios de aceite:**

- Input numérico de 6 dígitos com `inputmode="numeric"`
- CTA desabilitado até 6 dígitos preenchidos
- Timer de reenvio de 60 segundos com countdown visível
- Erro diferenciado: código inválido vs código expirado
- Código inválido limpa input e devolve focus
- Código expirado destaca opção de reenvio
- Seta de voltar retorna ao Step 1 com dados preservados

#### US-03: Configurar identidade pública

Como jogador verificado, quero adicionar foto e username para ser reconhecido por outros jogadores no app.

**Critérios de aceite:**

- Foto de perfil: upload via file input, preview circular, opcional
- Username pré-preenchido com slug do nome (lowercase, sem acentos, pontos)
- Validação async de disponibilidade com debounce 500ms
- Feedback visual: spinner (verificando), check (livre), X (ocupado)
- Ambos os campos opcionais (nome do Step 1 é identidade primária)
- CTA sempre ativo (valida username somente se preenchido)

#### US-04: Fazer login

Como jogador com conta, quero entrar com email e senha para acessar meu feed e rankings.

**Critérios de aceite:**

- 2 campos: email (formato válido) + senha (não vazia)
- Mensagem de erro genérica: "Email ou senha incorretos" (enumeration protection)
- Banner de sucesso quando vindo da recuperação de senha (`?recovered=true`)
- Links: "Esqueceu sua senha?" e "Criar conta"

#### US-05: Recuperar senha

Como jogador que esqueceu a senha, quero redefini-la via código OTP para recuperar acesso à minha conta.

**Critérios de aceite:**

- Tela 1: informar email, erro se email não existe (decisão de UX sobre segurança)
- Tela 2: OTP reutilizado (mesmos estados do signup)
- Tela 3: nova senha + confirmação, checklist de requisitos, validação de igualdade
- Sem seta de voltar na tela de nova senha (OTP já consumido)
- Sucesso redireciona para `/login?recovered=true`

### 2.3 Non-goals (fora do escopo)

- Login social (Google, Apple, Facebook)
- Autenticação biométrica
- Crop/edição de foto no upload
- Sugestão automática de usernames alternativos
- Onboarding pós-auth (interesses, categorias, grupos)
- "Continue as guest" (app requer autenticação)
- Verificação de email por link (substituída por OTP)
- Birthday e gênero no signup (opcionais no perfil, pós-cadastro)

---

## 3. Technical specifications

### 3.1 Stack

| Componente | Tecnologia |
|------------|-----------|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript 5 |
| UI | React 19 + Tailwind CSS v4 |
| Auth | Supabase Auth (`@supabase/ssr` + `@supabase/supabase-js`) |
| Banco | Supabase PostgreSQL (tabela `profiles`) |
| Storage | Supabase Storage (bucket `avatars`) |
| Deploy | Vercel (deploy automático via GitHub) |

### 3.2 Estrutura de rotas

**Rotas públicas (acessíveis sem auth):**

```
/                    → Welcome (redirect /feed se autenticado)
/login               → Login
/signup              → Signup Step 1
/signup/verify       → OTP (signup)
/signup/profile      → Signup Step 2
/recovery            → Informar email
/recovery/verify     → OTP (recovery)
/recovery/password   → Nova senha
```

**Rotas protegidas (requerem auth):**

```
/feed                → Feed (destino pós-auth)
```

### 3.3 Middleware de auth

O middleware do Next.js intercepta todas as requests e gerencia redirects:

- Se autenticado + rota pública (`/`, `/login`, `/signup`) → redirect `/feed`
- Se não autenticado + rota protegida (`/feed`, `/ranking`, etc.) → redirect `/`
- Se sessão expirada → redirect `/` com query `?expired=true`

Implementar usando `@supabase/ssr` para gerenciamento de cookies de sessão no middleware.

### 3.4 Supabase Auth — métodos

| Ação | Método Supabase | Notas |
|------|----------------|-------|
| Criar conta | `signUp({ email, password })` | Retorna user + session |
| Enviar OTP | `signInWithOtp({ email })` | Envia código de 6 dígitos |
| Verificar OTP | `verifyOtp({ email, token, type })` | type: `'email'` ou `'recovery'` |
| Login | `signInWithPassword({ email, password })` | Erro genérico se falhar |
| Recuperar senha | `resetPasswordForEmail(email)` | Envia OTP para recovery |
| Atualizar senha | `updateUser({ password })` | Requer sessão ativa do OTP |
| Logout | `signOut()` | Limpa sessão e cookies |

### 3.5 Banco de dados — tabela profiles

Criada após o signup, no Step 2 ou quando o jogador pula direto pro feed.

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT NOT NULL,
  username TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

**RLS policies:**

- **SELECT:** qualquer usuário autenticado pode ler qualquer perfil (perfis são públicos)
- **INSERT:** usuário pode criar apenas o próprio perfil (`auth.uid() = id`)
- **UPDATE:** usuário pode editar apenas o próprio perfil (`auth.uid() = id`)

### 3.6 Supabase Storage — bucket avatars

- Bucket público: `avatars`
- Path: `avatars/{user_id}/avatar.{ext}`
- Formatos aceitos: `image/jpeg`, `image/png`, `image/webp`
- Limite: 5MB por arquivo
- RLS: usuário pode upload/update apenas no próprio path

### 3.7 Validações

| Campo | Regras | Quando valida | Feedback |
|-------|--------|--------------|----------|
| Nome | Obrigatório, min. 2 caracteres | Em tempo real (onChange) | Check verde |
| Email | Obrigatório, formato válido (regex) | Em tempo real (onChange) | Check verde |
| Email (duplicidade) | Não pode existir no Supabase | No submit | Mensagem + link login |
| Senha | Min. 8 chars, 1 letra + 1 número | Em tempo real (onChange) | Checklist verde/cinza |
| Confirmar senha | Idêntica à senha | Em tempo real (onChange) | Check verde ou X |
| OTP | Exatamente 6 dígitos numéricos | No submit | Erro inline |
| Username | 3-20 chars, lowercase, `a-z0-9._` | Debounce 500ms | Spinner/check/X |
| Username (unicidade) | Não pode existir na tabela profiles | Debounce 500ms (async) | Spinner/check/X |
| Foto | jpg/png/webp, max 5MB | Na seleção do arquivo | Preview circular |

---

## 4. Component architecture

### 4.1 Componentes reutilizáveis

| Componente | Responsabilidade |
|-----------|-----------------|
| `FormInput` | Input com label fixa, ícone de status (check/X/spinner), mensagem de erro, suporte a toggle visibilidade |
| `PasswordChecklist` | Lista de requisitos da senha com estado visual por critério (verde/cinza/vermelho) |
| `OtpInput` | Campo de 6 dígitos, inputmode numeric, auto-focus. Reutilizado em signup e recovery |
| `Button` | Botão com variantes (primary/secondary/ghost), estados (default/loading/disabled), spinner integrado |
| `AvatarUpload` | Área circular clicável, file input hidden, preview com object-fit cover, placeholder |
| `Toast` | Notificação temporária para erros de rede, sucesso, e feedback contextual |
| `ResendTimer` | Countdown visual de 60s com link desabilitado/habilitado, callback de reenvio |

### 4.2 Estrutura de pastas

```
src/
  app/
    (auth)/                       → Layout grupo para rotas de auth
      layout.tsx                  → Layout mobile-first centralizado
      page.tsx                    → Welcome (rota /)
      login/page.tsx              → Login
      signup/page.tsx             → Signup Step 1
      signup/verify/page.tsx      → OTP (signup)
      signup/profile/page.tsx     → Signup Step 2
      recovery/page.tsx           → Informar email
      recovery/verify/page.tsx    → OTP (recovery)
      recovery/password/page.tsx  → Nova senha
    (app)/                        → Layout grupo para rotas protegidas
      feed/page.tsx               → Feed
  components/
    ui/                           → Button, FormInput, Toast, etc.
    auth/                         → OtpInput, PasswordChecklist, AvatarUpload, ResendTimer
  lib/
    supabase/                     → Client, server, middleware helpers
    validations.ts                → Regras de validação compartilhadas
  middleware.ts                   → Auth middleware (redirect logic)
```

---

## 5. Security & privacy

- RLS ativo em todas as tabelas (`profiles`). Policies definidas antes de qualquer operação
- `service_role` key nunca exposta no frontend. Apenas `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Enumeration protection no login: erro genérico "Email ou senha incorretos"
- Recuperação de senha: decisão consciente de informar email não encontrado (UX > segurança para contexto de nicho)
- OTP expira em 60 segundos (configuração Supabase)
- Sessão gerenciada via cookies HTTP-only pelo `@supabase/ssr`
- Upload de avatar limitado a 5MB, tipos restritos (jpg/png/webp)

---

## 6. Risks & rollout

### 6.1 Technical risks

| Risco | Impacto | Mitigação |
|-------|---------|----------|
| Email OTP vai para spam | Jogador não recebe código | Configurar domínio custom no Supabase, texto de ajuda na tela de OTP |
| Race condition no username | Dois jogadores pegam o mesmo username | Constraint UNIQUE no banco + verificação final no submit |
| Upload de foto falha | Jogador fica sem avatar | Foto é opcional, placeholder funcional, retry disponível no perfil |
| Sessão OTP expira antes de definir nova senha | Jogador perde progresso na recovery | Mensagem clara + redirect para reiniciar o fluxo |
| Middleware de redirect em loop | Tela branca infinita | Testes específicos para cada combinação estado/rota |

### 6.2 Phased rollout

**Fase A — Auth core**
- Welcome, Login, Signup Step 1, OTP, middleware de redirect
- Resultado: jogador consegue criar conta e logar

**Fase B — Identidade**
- Signup Step 2 (foto + username), tabela profiles, Supabase Storage
- Resultado: jogador tem perfil com identidade pública

**Fase C — Recovery**
- Recuperação de senha (3 telas), banner de sucesso no login
- Resultado: fluxo de auth completo

**Fase D — Polish**
- Estados de loading, tratamento de erros de rede, toast system
- Testes dos fluxos críticos
- Resultado: auth production-ready

---

## 7. Checklist pré-implementação

- [ ] Supabase project configurado com Auth habilitado
- [ ] Variáveis de ambiente configuradas (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- [ ] Tabela `profiles` criada com RLS policies
- [ ] Bucket `avatars` criado no Supabase Storage com policies
- [ ] OTP habilitado nas configurações de Auth do Supabase
- [ ] Email templates customizados (opcional mas recomendado)
- [ ] Design no Figma concluído para todas as 9 telas e seus estados
