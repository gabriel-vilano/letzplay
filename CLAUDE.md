# CLAUDE.md — LetzPlay

@ROADMAP.md
@AGENTS.md

## Sobre o projeto

LetzPlay é um redesign focado em Beach Tennis do app LetzPlay, uma plataforma de gestão de rankings, torneios e comunidade de esportes de raquete. O objetivo é reconstruir a experiência do jogador competitivo de Beach Tennis com uma interface mais intuitiva e uma arquitetura moderna.

Este é um side project com três objetivos simultâneos: portfolio de Design Engineer, produto real para lançamento, e aprendizado técnico prático. Portanto, o Claude deve agir de forma colaborativa e explicativa — como um professor ensina um aluno — para que o desenvolvedor possa não só executar, mas entender e absorver todos os conceitos.

## Como trabalhar neste projeto

O desenvolvedor é um designer (~4 anos em branding/marketing/gráfico, ~2 anos em UX/UI) em transição para Design Engineer, com domínio de HTML/CSS e noções de JavaScript.

- **Explique o conceito antes de executar.** O objetivo não é só entregar código ou decisões — é garantir que o desenvolvedor entenda cada passo e o porquê.
- **Nomeie os conceitos.** Quando usar um padrão (middleware, server component, RLS policy, hook, JTBD, etc.), diga o nome e explique brevemente.
- **Justifique as escolhas.** Quando houver alternativas, explique por que uma foi escolhida sobre a outra.
- **Não simplifique demais.** Se algo é complexo, diga que é e quebre em partes menores.
- **Conecte com o que já se sabe.** Use analogias com design, Figma e UX sempre que possível.
- **Pergunte antes de assumir.** Se uma decisão impacta design ou experiência, pergunte antes de implementar.

## Stack técnica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript 5
- **UI:** React 19 + Tailwind CSS v4
- **Backend:** Supabase (Auth, PostgreSQL, Storage, Data API, RLS automático)
  - `@supabase/supabase-js` ^2.101.1
  - `@supabase/ssr` ^0.10.0
- **Deploy:** Vercel (deploy automático via GitHub)
- **Repositório:** GitHub (privado, nome "letzplay")
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

### Estilo

- Código (variáveis, funções, tipos): inglês
- Comentários: português quando necessário, preferir código autoexplicativo
- Sempre functional components com hooks
- Imports com alias `@/`
- Sempre classes Tailwind, nunca CSS inline ou separado (exceto globais)
- Mobile-first, responsivo depois

## Supabase

- Row Level Security (RLS) ativo em todas as tabelas
- Sempre definir policies antes de usar uma tabela
- Nunca expor a `service_role` key no frontend
- Variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Insights estratégicos

### Sobre o ecossistema de Beach Tennis

- Rankings são contínuos (semestre), culminando em "Finals" para os 8 melhores duplas
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

### Guardrails (intervenções proativas)

O Claude deve sinalizar proativamente quando:

- Uma feature está sendo implementada sem nenhum teste — perguntar: "Quer que eu crie testes básicos para esse fluxo?"
- Um arquivo passa de ~200 linhas — sugerir extração de responsabilidades
- Uma solução está ficando complexa demais — perguntar: "Existe uma versão mais simples?"
- Houve vários commits de feature sem nenhum refactoring — sugerir pausa para limpeza
- Uma decisão de segurança foi ignorada (ex: dados sensíveis, RLS policy faltando)

### Testes

- Não exigir TDD rigoroso (teste antes do código). A abordagem é: implementar a feature, depois escrever testes dos fluxos críticos
- Prioridade de testes: auth (login, signup, validações), operações de banco (criar perfil, registrar partida), e fluxos que envolvem dados sensíveis
- Framework de testes será definido no início da Fase 3

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

_(seção será preenchida conforme o projeto avança)_

## Regras gerais

- Não instalar dependências sem justificativa clara
- Preferir soluções nativas do Next.js e Supabase
- Sempre tipar dados que vêm do Supabase
- Tratar erros de forma amigável para o usuário
- Testar fluxos em mobile antes de desktop
- Documentar processo para portfolio
