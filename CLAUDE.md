# CLAUDE.md — LetzPlay

@AGENTS.md
@docs/PRODUCT.md
@docs/GIT_WORKFLOW.md
@docs/TOKENS.md

## Sobre o projeto

Redesign focado em Beach Tennis do app LetzPlay, uma plataforma de gestão de rankings, torneios e comunidade de esportes de raquete. O objetivo é reconstruir a experiência do jogador competitivo de Beach Tennis com uma interface mais intuitiva e uma arquitetura moderna.

Este é um side project com três objetivos simultâneos: portfolio de Design Engineer, produto real para lançamento, e aprendizado técnico prático. Portanto, o Claude deve agir de forma colaborativa e explicativa — como um professor ensina um aluno — para que o desenvolvedor possa não só executar, mas entender e absorver todos os conceitos.

## Como trabalhar neste projeto

O desenvolvedor é um designer (~4 anos em branding/marketing/gráfico, ~2 anos em UX/UI) em transição para Design Engineer, com domínio de HTML/CSS e noções de JavaScript.

- **Explique o conceito antes de executar.** O objetivo não é só entregar código ou decisões — é garantir que o desenvolvedor entenda cada passo e o porquê.
- **Nomeie os conceitos.** Quando usar um padrão (middleware, server component, RLS policy, hook, JTBD, etc.), diga o nome e explique brevemente.
- **Justifique as escolhas.** Quando houver alternativas, explique por que uma foi escolhida sobre a outra.
- **Não simplifique demais.** Se algo é complexo, diga que é e quebre em partes menores.
- **Conecte com o que já se sabe.** Use analogias com design, Figma e UX sempre que possível.
- **Pergunte antes de assumir.** Se uma decisão impacta design ou experiência, pergunte antes de implementar.

## Filosofia de documentação

Documentamos o que é estável. Decisões, padrões, princípios, hurdles, convenções — coisas que mudam raramente e que, quando mudarem, merecem PR e `git blame`. **Não documentamos estado.** Status de tarefa, progresso de fase, "o que vem depois" volúvel pertence ao tracker (GitHub Issues), não ao repo.

**Teste antes de criar ou manter um doc:** "Se eu não atualizar isso por 3 meses, ele ainda estará correto?" Se a resposta é não, é estado disfarçado de documentação. Vai pro tracker.

**Mapa de docs:**

- `CLAUDE.md` — convenções, padrões, hurdles, filosofia
- `docs/PRODUCT.md` — visão, escopo MVP, princípios de design, métricas
- `docs/TOKENS.md` — design system
- `docs/GIT_WORKFLOW.md` — workflow de branches, PR, versionamento
- `docs/components/<nome>.md` — documentação de componente individual
- **GitHub Issues** — tarefas, progresso, próximos passos

## Stack técnica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript 5
- **UI:** React 19
- **Estilização:** CSS customizado com CSS Modules (escopo de componente) + CSS Custom Properties (design tokens)
- **Ícones:** Phosphor Icons (`@phosphor-icons/react`) — sempre via componente `<Icon />`
- **Backend:** Supabase (Auth, PostgreSQL, Storage, Data API, RLS automático)
  - `@supabase/supabase-js` ^2.101.1
  - `@supabase/ssr` ^0.10.0
- **Deploy:** Vercel (deploy automático via GitHub)
- **Repositório:** GitHub (privado, nome "letzplay") — Issues como tracker de execução
- **IDE:** VS Code com Claude Code (plano Max)

## Convenções de código

### Commits

- **Conventional Commits:** prefixos em inglês, descrição em português
- Letra minúscula após o prefixo, sem ponto final, máximo ~72 caracteres
- **Nunca** incluir `Co-Authored-By` ou trailers de coautoria nos commits
- Exemplos:
  - `feat: adicionar tela de login com autenticação Supabase`
  - `fix: corrigir validação de email no cadastro`
  - `chore: configurar variáveis de ambiente do Supabase`
  - `style: ajustar espaçamento do card de ranking`
  - `refactor: extrair componente de botão reutilizável`
  - `docs: adicionar README com instruções de setup`

### Nomenclatura

- Componentes React: PascalCase (`PlayerCard.tsx`)
- Utilidades: camelCase (`formatDate.ts`)
- Tipos TypeScript: PascalCase (`PlayerProfile`, `TournamentData`)
- Variáveis e funções: camelCase
- Constantes globais: UPPER_SNAKE_CASE
- Pastas: kebab-case

### Regras numéricas

Restrições mensuráveis, otimizadas para que o agente raciocine sobre o código com atenção plena (Read trunca em 2000 linhas; atenção degrada com tamanho do arquivo).

- **Funções:** 4–20 linhas. Acima disso, dividir.
- **Arquivos:** abaixo de 500 linhas, idealmente 200–300. Acima disso, extrair responsabilidades.
- **Indentação:** máximo 2 níveis por função. Preferir early return sobre `else` aninhado.
- **Tipos:** nunca `any`, nunca função sem assinatura tipada, nunca `Record<string, unknown>` quando o shape é conhecido.
- **Nomes:** específicos e únicos. Evitar genéricos (`data`, `handler`, `Manager`, `Service`). Antes de aceitar um nome novo, mentalmente: `grep` por ele retorna < 5 resultados relevantes? Se retorna muito ruído, refinar.
- **Mensagens de exceção:** incluir o valor que causou o problema e o formato esperado. Ex: `` `OTP inválido: recebi '${code}', esperado 8 dígitos numéricos` `` em vez de `"OTP inválido"`.

### Estilo

- Código (variáveis, funções, tipos): inglês
- Comentários: português quando necessário, preferir código autoexplicativo
- Sempre functional components com hooks
- Imports com alias `@/`
- Estilização via CSS Modules: cada componente tem seu `ComponentName.module.css`
- Nunca CSS inline (atributo `style=`), nunca CSS global para componentes
- Design tokens definidos como CSS Custom Properties em `styles/tokens/`
- Nomenclatura BEM dentro dos arquivos `.module.css`: `.card__header`, `.btn--primary`
- Mobile-first, responsivo depois

### Comentários

- **WHY, não WHAT.** Código bem nomeado já diz o que faz. Comentário existe para justificar decisão não óbvia: workaround para bug upstream, constraint de negócio, ordem específica que importa, alternativa que parecia óbvia mas não funciona.
- **Não apagar comentários em refactor.** Se um comentário existe, presume-se que carrega proveniência ou intenção. Em refactor, preservar — só remover quando se confirma que ficou redundante ou errado. Comentário óbvio (`// increment counter`) é exceção e pode ir.
- **Docstrings em funções públicas:** intenção em uma linha + um exemplo de uso quando o uso não for óbvio.
- **Referenciar issues, PRs ou commits** quando uma linha existe por causa de um bug específico ou constraint de lib externa. Ex: `// workaround: supabase-js@2.101 não trata expired session em verifyOtp (#123)`.
- **Não comentar o óbvio.** `i++ // increment i` desperdiça tokens e atenção do agente.

### Ícones

- Lib: `@phosphor-icons/react`
- Sempre via wrapper: `<Icon icon={Trophy} size="md" weight="regular" />`
- Importar o ícone Phosphor no consumidor: `import { Trophy } from '@phosphor-icons/react'`
- Cor sempre via `currentColor` — nunca definir cor dentro do componente `Icon`
- Ícones decorativos: `aria-hidden={true}` (default — não precisa declarar)
- Ícones com significado semântico: `aria-label="descrição"` + `aria-hidden={false}`
- Botão com ícone sem texto: `aria-label` vai no `<button>`, não no `<Icon>`
- Ícones customizados de marca: `src/components/icons/` (SVG próprio, fora do Phosphor)
- Referência completa: `@docs/components/icon.md`

## Documentação de componentes

Cada novo componente do design system ganha seu arquivo de documentação em `docs/components/`.
Incluir o arquivo relevante no início da sessão quando for trabalhar num componente específico.

```
docs/
  TOKENS.md              ← tokens primitivos e semânticos (referenciado via @ acima)
  components/
    icon.md              ← componente Icon
    ...                  ← um arquivo por componente do DS
```

## Supabase

- Row Level Security (RLS) ativo em todas as tabelas
- Sempre definir policies antes de usar uma tabela
- Nunca expor a `service_role` key no frontend
- Variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Insights estratégicos

### Sobre o ecossistema de Beach Tennis

- Rankings são contínuos (semestre), culminando em "Finals" para as 8 melhores duplas
- Torneios são eventos discretos (1-2 dias de fim de semana)
- Marcação de jogos de ranking acontece no WhatsApp, não no app
- O LetzPlay é um app de competição — quem não compete não tem motivo para usá-lo

### Sobre o feed

- Activity Stream (modelo Strava), não rede social
- Conteúdo automático (resultados, inscrições, amizades) é o que engaja
- UGC (publicações próprias) é depreciado no uso
- Cards de resultado são o formato principal

### Sobre o jogador competitivo

- Ranking é o coração emocional do produto — subir motiva, descer frustra
- Dois tipos de consulta a perfil: social (acompanhar amigos) e competitivo (avaliar adversário)
- Frequência de uso alta durante competições, cai entre elas

## Jobs-to-be-done (hipóteses)

Foco: jogador competitivo de Beach Tennis.

1. **Encontrar competição** — "Quando estou sem torneio ou ranking no horizonte, quero encontrar competições compatíveis com meu nível e região, para manter uma agenda ativa."
2. **Saber onde estou no ranking** — "Quando um resultado é registrado, quero ver imediatamente como minha posição foi afetada, para decidir como agir."
3. **Preparar-me para um confronto** — "Quando descubro quem vou enfrentar, quero avaliar o nível e histórico desse jogador, para me preparar."
4. **Acompanhar amigos no BT** — "Quando abro o app no dia a dia, quero ver o que meus amigos estão fazendo, para me manter conectado e descobrir oportunidades."
5. **Sentir que estou evoluindo** — "Quando estou entre competições, quero ver evidências da minha evolução, para me manter motivado."

## Problemas do app atual (audit heurístico)

1. **Consistência visual/semântica** — cores sem lógica, tipografia irregular, componentes sem padrão
2. **Arquitetura de informação** — menu com 19+ itens, busca duplicada, perfil sobrecarregado
3. **Feedback e estados** — login mostra "sessão encerrada", criação de conta sem feedback
4. **Componentes e interações** — filtros sem labels, seletores quebrados, modais sem fechar

## Qualidade e disciplina

### Calibração — onde IA tende a errar

Áreas onde o Claude deve se questionar ativamente, em vez de seguir o impulso natural do modelo:

- **Decisões de arquitetura.** Tendência ao over-engineering — mais camadas, mais abstrações, mais estados do que o problema pede. Antes de propor 4+ estados/camadas, perguntar: "existe versão mais simples?".
- **Conhecimento de domínio.** Beach Tennis, ranking competitivo, JTBDs do jogador — são contextos que o Gabriel conhece e o Claude não. Em decisões com peso de domínio, perguntar antes de assumir.
- **Manter opinião forte em texto.** Tendência a suavizar tudo, "balancear" demais. Quando o Gabriel pede análise crítica, manter a posição.
- **Segurança proativa.** O Claude implementa o caminho feliz quando pedem. Raramente sugere proteções extras (rate limit, validação no boundary, retry com backoff). Se a feature toca dado sensível ou rede, sinalizar explicitamente quais proteções fazem sentido.
- **Priorização.** O Claude executa qualquer pedido com igual entusiasmo, mesmo quando o pedido é secundário. Se o trabalho parece desviar de algo mais importante, perguntar.

### Guardrails (intervenções proativas)

O Claude deve sinalizar proativamente quando:

- Uma feature está sendo implementada sem nenhum teste — perguntar: "Quer que eu crie testes básicos para esse fluxo?"
- Um arquivo passa de ~200 linhas — sugerir extração de responsabilidades
- Uma solução está ficando complexa demais — perguntar: "Existe uma versão mais simples?"
- Houve vários commits de feature sem nenhum refactoring — sugerir pausa para limpeza
- Uma decisão de segurança foi ignorada (ex: dados sensíveis, RLS policy faltando)

### Testes

- **Framework:** Vitest. Rodar com `npm test`. Arquivos `<nome>.test.ts(x)` ao lado do código testado
- **Abordagem equilibrada:** não exige TDD rigoroso, mas todo fluxo crítico ganha teste antes de ser considerado "pronto". Testar imediatamente após implementar — não deixar acumular dívida de teste
- **Prioridade de cobertura:** auth (login, signup, validações), operações de banco (criar perfil, registrar partida), validações de input, e qualquer fluxo que envolva dados sensíveis
- **Bug fix → teste de regressão.** Todo bug corrigido ganha um teste que reproduziria o bug, para evitar regressão futura

### Oferecer a versão simples primeiro

Quando propor uma solução, apresentar a versão mínima viável primeiro. Só adicionar complexidade se confirmado que é necessário. Sempre explicar os tradeoffs.

### Checklist pós-implementação (por feature)

- [ ] Feature funcionando em mobile
- [ ] Testes dos fluxos críticos
- [ ] Sem erros de TypeScript (`npm run build`)
- [ ] CLAUDE.md atualizado (se houve novo hurdle ou padrão)
- [ ] Commit seguindo conventional commits

## Common hurdles

Problemas encontrados e suas soluções. Atualizar sempre que resolver algo não-óbvio.

### iOS Chrome/Safari: React não hidrata em `next dev` (Turbopack)

**Sintoma:** Em `npm run dev` acessado do iOS (Chrome/Safari), handlers React não disparam. `onChange` dos inputs não atualiza state (nada de validação inline, nada de `PasswordChecklist`), `onClick` dos botões nativos (`<button>`) não faz nada. `<a>` via `next/link` funciona porque é navegação do browser. Desktop dev funciona normal.

**Causa:** Bug de hidratação do React 19 + Turbopack em dev, específico do WebKit do iOS. Upstream.

**Workaround:** Testar qualquer fluxo sensível a interação no iOS via prod build:

```bash
npm run build && npm start
```

Daí acessar `http://<IP-do-dev>:3000` do celular. Em prod tudo funciona.

**Quando aparecer novamente:** Antes de acreditar que um botão/handler novo está quebrado no iOS, rodar o build prod. Se funcionar lá, é o mesmo hurdle.

### iOS: auto-zoom ao focar inputs

**Sintoma:** iOS Safari/Chrome zoomava ao focar qualquer input porque o `font-size` efetivo era 14px (< 16px).

**Solução:** `export const viewport` em `app/layout.tsx` com `maximumScale: 1, userScalable: false`. iOS 10+ ignora `user-scalable: no` para gestos manuais de pinch, então zoom manual continua funcionando — só o auto-zoom no foco é bloqueado.

### Phosphor Icons: `createContext` em Server Components

**Sintoma:** `createContext only works in Client Components` ao usar um ícone Phosphor em um Server Component.

**Causa:** `@phosphor-icons/react` usa `createContext` internamente. Qualquer import de valor (ex: `import { Handshake } from "@phosphor-icons/react"`) num Server Component dispara o erro.

**Solução:** Adicionar `"use client"` no componente que importa o ícone como valor. O wrapper `<Icon />` é seguro em Server Components porque recebe o ícone como prop (`React.ElementType`) — nunca importa valores do Phosphor diretamente.

**Regra:** todo componente de feed que importa ícones Phosphor precisa de `"use client"`.

### iOS: "sticky hover" em botões com `:hover`

**Sintoma:** Primeiro tap em um elemento com regra `:hover` não dispara `click` no iOS — aplica o estado hover e espera o segundo tap.

**Solução:** Envolver todas as regras `:hover` em `@media (hover: hover)` para que só apliquem em dispositivos com cursor real. Padrão seguido em todos os `.module.css` do DS.

### Stack de avatares em duplas no CardHeader

**Sintoma:** CardHeader renderiza só player_a.avatar_url em cards de enrollment duplas.

**Solução pendente:** estender CardHeader para receber player_b quando enrollment_format === 'doubles' e renderizar stack com offset 8px.

**Quando resolver:** ao evoluir o CardHeader para o feed real.

### Componentes com stubs sem comportamento

ProfileMiniCard, H2HButton, botões Torcer e "+ Adicionar" foram implementados como <button> sem onClick.
Quando resolver: plugar handlers e <Link> ao integrar esses componentes com o feed real.

## Regras gerais

- Não instalar dependências sem justificativa clara
- Preferir soluções nativas do Next.js e Supabase
- Sempre tipar dados que vêm do Supabase
- Tratar erros de forma amigável para o usuário
- Testar fluxos em mobile antes de desktop
- Documentar processo para portfolio
