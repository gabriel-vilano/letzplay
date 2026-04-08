# ROADMAP.md — LetzPlay

Roadmap organizado em 6 fases sequenciais. Cada fase tem atividades, decisões, entregas e status.

**Abordagem:** fundação técnica primeiro, depois incremental feature por feature. Cada feature segue o ciclo: design (Figma) → código (Claude Code) → deploy (Vercel) → review.

**Estimativa total:** 15–22 semanas.

---

## Fase 0 — Discovery & research [2–3 semanas]

**Objetivo:** entender o problema, o usuário e o mercado antes de projetar.

| # | Atividade | Estado |
|---|-----------|--------|
| 0.1 | Audit heurístico do app atual | Em andamento (20+ telas, faltam arenas e torneios) |
| 0.2 | Análise competitiva (Lemon8, Instagram, Facebook, Meetup) | Concluída |
| 0.3 | Personas & JTBD (5 hipóteses, jogador competitivo BT) | Concluída |
| 0.4 | Pesquisa de formulário (Tally, 12 perguntas) | Em andamento (distribuição via WhatsApp) |
| 0.5 | Journey map & síntese de oportunidades | Pendente |

**Decisões tomadas:**
- Foco exclusivo no jogador competitivo de Beach Tennis
- Feed é activity stream (Strava), não rede social
- Ranking é o coração emocional do produto

**Entrega:** discovery doc consolidado (problemas priorizados, JTBD validados, critérios de sucesso).

---

## Fase 1 — Estratégia & arquitetura [1–2 semanas]

**Objetivo:** transformar research em decisões concretas de produto e arquitetura.

| # | Atividade | Decisões envolvidas |
|---|-----------|---------------------|
| 1.1 | Information architecture | Quais seções? Tab bar ou menu? Hierarquia de navegação |
| 1.2 | User flows | 3–4 jornadas críticas: inscrição, ranking, H2H, feed |
| 1.3 | Priorização MoSCoW | Classificação formal de features |
| 1.4 | Modelagem de dados | Entidades e relacionamentos (jogador, ranking, torneio, partida) |
| 1.5 | Navegação e rotas | Estrutura de páginas no Next.js App Router |

**Perguntas estratégicas:**
- Tab bar fixa ou menu lateral? (menu atual com 19+ itens é problemático)
- Perfil como aba dedicada ou acessível pelo header?
- Busca com aba própria ou no header?
- Rankings e torneios juntos ou separados?

**Entrega:** mapa do produto (IA + user flows) + backlog priorizado.

---

## Fase 2 — Design system & UI [3–4 semanas]

**Objetivo:** criar a linguagem visual e interfaces do MVP.

| # | Atividade | Critério de conclusão |
|---|-----------|----------------------|
| 2.1 | Tokens de design | Cores, tipo, spacing, radii com mapeamento direto pro Tailwind |
| 2.2 | Componentes base | Button, input, card, toast, avatar com variantes e estados |
| 2.3 | Wireframes | Baixa fidelidade de todas as telas do MVP |
| 2.4 | UI alta fidelidade | Telas finais mobile-first |
| 2.5 | Protótipo interativo | Fluxos navegáveis no Figma |
| 2.6 | Documentação DS | Guia tokens → Tailwind, componentes → React |

**Princípios de design:**
- Mobile-first (393px ou 430px de largura base)
- Resolver os 4 problemas do audit: consistência, IA, feedback, componentes
- Perfil com duas "leituras": social (amigo) e competitiva (adversário)
- Ranking como momento emocional, não como tabela de dados

**Entrega:** Figma completo (DS + wireframes + UI + protótipo) + documentação.

---

## Fase 3 — Setup & fundação técnica [1–2 semanas]

**Objetivo:** preparar a base de código para implementação incremental.

| # | Atividade | Estado |
|---|-----------|--------|
| 3.1 | Next.js + TypeScript + Tailwind (tokens do DS) | Concluído |
| 3.2 | Supabase (auth, banco, storage, RLS) | Parcial (projeto criado, client pendente) |
| 3.3 | Componentes base em código (Figma → React) | Pendente |
| 3.4 | GitHub + Vercel (deploy automático) | Concluído |
| 3.5 | Middleware de auth + rotas protegidas | Pendente |
| 3.6 | CI mínimo (lint + build check via GitHub Actions) | Pendente |

**Decisões de auth:**
- Email + senha apenas (sem login social por agora)
- Signup multi-step: Step 1 (nome + email + senha) → Step 2 (foto + @username)
- Dados opcionais no perfil pós-cadastro: aniversário, gênero
- Sempre redirecionar pro feed após login
- Recuperar senha: fluxo inteiro dentro do app
- @username: validação de unicidade em tempo real

**Entrega:** app rodando com DS implementado, auth funcional, deploy automático.

---

## Fase 4 — MVP development [6–8 semanas]

**Objetivo:** implementar features core, uma por vez (design → código → deploy → review).

| # | Feature | Depende de | JTBD |
|---|---------|------------|------|
| 4.1 | Perfil do jogador | Auth (fase 3) | Job 3, Job 5 |
| 4.2 | Modelo de dados completo | Perfil | Todos |
| 4.3 | Ranking com filtros | Modelo de dados | Job 2 |
| 4.4 | Registro de partidas | Ranking | Job 2, Job 5 |
| 4.5 | Head-to-head | Perfil + partidas | Job 3 |
| 4.6 | Feed de atividade | Todas anteriores | Job 4 |
| 4.7 | Busca unificada | Perfil + ranking | Job 1, Job 3 |
| 4.8 | Notificações básicas | Feed | Job 2, Job 4 |

**Por que essa ordem:** perfil é extensão do auth. Ranking antes do feed porque é o core de valor. Feed por último porque depende das outras pra ter conteúdo.

**Entrega:** MVP funcional com todas as features core.

---

## Fase 5 — Launch & iteração [2–3 semanas]

**Objetivo:** validar com jogadores reais e documentar o case.

| # | Atividade | Detalhes |
|---|-----------|----------|
| 5.1 | Beta fechado | 5–10 jogadores de BT |
| 5.2 | Coleta de feedback | Formulário estruturado pós-teste |
| 5.3 | Correção de bugs | Priorização por severidade |
| 5.4 | PWA | Instalação no celular via next-pwa |
| 5.5 | Case de portfolio | Documentação: research → design → código → resultados |

**Métricas de sucesso:**
- Jogadores completam fluxos críticos sem ajuda?
- Dores do audit foram resolvidas?
- JTBD estão sendo atendidos?

**Entrega:** produto lançado + case documentado.

---

## Escopo do MVP

### Must have
- Autenticação (login, signup multi-step, recuperar senha)
- Perfil do jogador (cadastro, foto, stats)
- Ranking por categoria/nível
- Registro de partidas e resultados
- Head-to-head entre jogadores
- Feed de atividade (activity stream)

### Fora do MVP
- Torneios completos (gestão de chaves)
- Login social (Google, Apple)
- Aulas, quadras, agenda
- Chat entre jogadores
- Pagamentos
- Visão do organizador/gestor

---

## Resumo

| Fase | Foco | Duração | Status |
|------|------|---------|--------|
| 0 | Discovery & research | 2–3 sem | Em andamento |
| 1 | Estratégia & arquitetura | 1–2 sem | Pendente |
| 2 | Design system & UI | 3–4 sem | Pendente |
| 3 | Setup & fundação técnica | 1–2 sem | Parcial |
| 4 | MVP development | 6–8 sem | Pendente |
| 5 | Launch & iteração | 2–3 sem | Pendente |