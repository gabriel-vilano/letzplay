# 02 — Feed de atividade

Activity stream no modelo Strava: conteúdo gerado por eventos (resultado, inscrição, amizade, ranking), não por publicação manual.

**JTBDs:** 4 (acompanhar amigos) principal; 1 (encontrar competição, via inscrição de amigos), 2 (ranking) e 3 (confronto) pelos tipos de card.
**Oportunidades relacionadas (`DISCOVERY.md`):** 4.1 feed automático, 4.2 notificação de resultado de amigo.

> A spec dos cards já está aprovada (`docs/FEED_CARDS.md`, branch `feature/feed-cards`). Este arquivo **não reabre decisões da spec**. Ele compara a spec com o mercado e lista o que ela ainda não cobre: a **tela** do feed (o que vive entre os cards), estados vazios e padrões de card que podem virar variações futuras.

---

## Resumo

- **A spec está alinhada com o Strava** na estrutura (cabeçalho de pessoa, corpo de dados, rodapé de ações). As diferenças estão em dois detalhes do rodapé, listados abaixo.
- **O feed do Strava não é só uma lista de cards de atividade.** Entre os cards, ele intercala **módulos sobre o próprio usuário** (sequência semanal, resumo da semana com variação, sugestão de quem seguir, checklist de onboarding). Esse é o maior ponto que a spec não cobre, e conversa com o JTBD 5 (evolução).
- **Apps de esporte comunicam o vencedor apagando o perdedor**, não pintando o vencedor. A spec faz o mesmo por set (`foreground-primary` × `foreground-secondary`). Consenso forte.
- **Estado vazio tem padrão claro:** uma frase que explica o que vai aparecer ali + um CTA para seguir pessoas. 8 de 8 apps observados.

---

## Padrões recorrentes

### 1. Estrutura do card de atividade (Strava)

**Observado em 8 telas do Strava:**

- **Cabeçalho:** avatar (com moldura de assinante), nome, "data · dispositivo" e local numa segunda linha, menu `⋯` à direita. Equivale ao padrão B da spec.
- **Título** da atividade em destaque ("Morning Run").
- **Linha de stats** com 3 ou 4 colunas: rótulo pequeno em cima, valor grande embaixo ("Distance / 20.47 km"). Equivale ao que no BT seria placar + duração.
- **Chamada de conquista inline:** caixa cinza com ícone de coroa e "K1 virou Local Legend de interval loop". Uma conquista dentro do card de atividade, sem card próprio.
- **Mídia** (mapa, desenho do corpo para treino de força).
- **Prova social:** pilha de avatares + "170 gave kudos".
- **Rodapé:** três ícones **sem rótulo** (curtir, comentar, compartilhar).

### 2. Módulos que não são atividade

**Observado no Strava** (4 módulos diferentes no topo do feed, em carrossel com paginação por pontos):

| Módulo | O que mostra | Paralelo no BT |
| --- | --- | --- |
| **Your streak** | Semanas seguidas com atividade, dias da semana marcados, botão Share | Sequência de semanas jogando / confirmando resultado |
| **Weekly snapshot** | Atividades, tempo e distância da semana com variação (▲ 3) | Jogos, vitórias e pontos da semana (JTBD 5) |
| **Instant workouts** | Sugestão de treino | Competição sugerida (JTBD 1) |
| **Who to follow** | Carrossel de perfis | Jogadores da mesma arena ou categoria |
| **Onboarding checklist** | "You're set, 4/4", barra de progresso | Completar perfil (foto, categoria, arena) |

O Duolingo faz o mesmo no feed dele: intercala um card de amigo ("Added their first friend!") com um card de sequência e CTA "Start a lesson".

### 3. Resultado de partida em apps de esporte

**Observado em 6 apps:** Apple Sports, Fixtured, Apple TV, NBA, X, Riot Mobile.

- **Perdedor apagado:** Apple Sports (MUN 0 em cinza, EVE 1 em branco), Fixtured (linha do perdedor em cinza), Apple TV (placar do perdedor em cinza). Mesma lógica da spec.
- **Rótulo de status** acima do placar: "Final", "FINAL" em vermelho (X), "Abandoned" (Fixtured). O Fixtured desenha a partida **abandonada com borda tracejada** e sem placar: um tratamento visual específico para jogo que não aconteceu, análogo ao W.O.
- **Consequência escrita:** NBA ("MIL Advances" sob o placar). No BT seria "Avançou para a semifinal" ou "+100 pts no ranking". A spec atual não tem essa linha.
- **Hierarquia horizontal** (time A · placar · time B) em quase todos. A spec usa **vertical** (vencedor em cima), que funciona melhor para duplas com nomes longos a 393px (**inferência**).

### 4. Inscrição e evento com prova social

**Observado em 5 apps:** Commons, Luma, X, LinkedIn, Meta Quest.

- **Pilha de avatares + contagem** ("1,285 people have joined", Commons; "414 going", X).
- **Status do próprio usuário** em tag sobre a imagem (Luma: "Invited", "Hosting", "Going").
- **CTA de adesão no card** ("Join challenge", Commons; ícone de calendário, X; "Interested", Meta Quest).
- **Tempo restante** ("18 days left", Commons; "Ends in 6 hours", Meta Quest).

A spec do card de inscrição mostra "14 inscritos" em texto e não tem CTA de inscrição. Os padrões acima são candidatos a variação futura, não correção.

### 5. Estado vazio

**Observado em 8 de 8 apps:** Shop, SoundCloud, Tonal, Bluesky, ElevenReader, Weverse, Posh, TikTok.

Fórmula comum: **título que explica o que vai aparecer** ("Follow friends to see their activity", Tonal) + **uma linha de apoio** + **um CTA** ("Find friends", "Sync contacts", "Follow now"). Variação útil: o Shop mostra o aviso **e** conteúdo sugerido logo abaixo, então a tela nunca fica vazia.

---

## Exemplos

| App | O que observar | Link |
| --- | --- | --- |
| Strava | Card completo: stats, conquistas, mapa, kudos e rodapé só com ícones | [tela](https://mobbin.com/screens/f9216faa-47b8-4b6c-9e69-6464b21c3d74) |
| Strava | Chamada inline "virou Local Legend" dentro do card | [tela](https://mobbin.com/screens/3d664c5d-fa9f-413c-8599-e125f622ce0b) |
| Strava | Módulo "Your streak" no topo do feed | [tela](https://mobbin.com/screens/0d794955-16a5-450d-b10e-dc6df2e9c8bb) |
| Strava | Módulo "Weekly snapshot" com variações | [tela](https://mobbin.com/screens/b3fba3c0-9ad3-4cc7-ac17-e6bd4d136813) |
| Strava | "Who to follow" entre cards | [tela](https://mobbin.com/screens/106bee68-c61f-48f0-b7fd-5b4625874ec0) |
| Strava | Checklist de onboarding dentro do feed | [tela](https://mobbin.com/screens/ba77b254-e2a1-4de3-88f0-2667b828fede) |
| Apple Sports | Placar do perdedor apagado, rótulo "Final" | [tela](https://mobbin.com/screens/cd3f1193-d220-48a3-89e6-0201c67e3490) |
| Fixtured | Card "Abandoned" com borda tracejada; perdedor em cinza | [tela](https://mobbin.com/screens/d1a52420-563f-4a13-8b8e-581111e74c10) |
| NBA | Linha de consequência "MIL Advances" sob o placar | [tela](https://mobbin.com/screens/5a4f82bf-a214-49ca-a42e-a56a091a48cf) |
| Apple TV | Placar vertical com perdedor apagado sobre foto | [tela](https://mobbin.com/screens/8a51ab5e-ef95-4599-8b58-532e5c28e99f) |
| Commons | Desafio com prazo, barra de progresso coletiva, avatares e "Join" | [tela](https://mobbin.com/screens/4021a35a-09d4-4c63-9971-eafa2774b09c) |
| Luma | Tags de status "Going / Invited / Hosting" em lista de eventos | [tela](https://mobbin.com/screens/9f3e1d45-f117-4ff5-9b72-46ba5273a2f6) |
| Duolingo | Feed misto: card de amigo e card de sequência com CTA | [tela](https://mobbin.com/screens/7eeb55eb-6731-47ec-a4b2-5e0df29092e6) |
| Tonal | Estado vazio com tabs "Friends / Only you" e "Find friends" | [tela](https://mobbin.com/screens/8c844f9e-d230-44ae-8f64-cd9d1107c200) |
| Shop | Aviso de vazio + conteúdo sugerido abaixo | [tela](https://mobbin.com/screens/cd874d67-e020-42fa-88f5-e44577bb9f55) |

Amostra: 34 telas em 4 buscas, 28 usadas, de 22 apps. Descartadas: destaques em vídeo (MLS, NFL, DAZN), que são mídia editorial e não activity stream.

---

## Comparação com a spec aprovada

| Ponto | Spec (`FEED_CARDS.md`) | Mercado | Observação |
| --- | --- | --- | --- |
| Estrutura em 3 zonas | Sim | Strava idêntico | Consenso |
| Vencedor comunicado | Label VITÓRIA/DERROTA + cor por set | Perdedor apagado (Apple Sports, Fixtured) | A spec faz os dois. Alinhado |
| Rodapé | Ícone + rótulo, sem avatares | Strava: só ícone + pilha de avatares acima | Diferença consciente. O rótulo ajuda na descoberta; o ícone sozinho economiza espaço |
| Conquista | Só no card de ranking (badge de marco) | Strava: chamada inline dentro de qualquer card | Candidato a variação: "Primeira vitória contra X", "5 vitórias seguidas" |
| W.O. | Placar 0/0 em secundário + texto | Fixtured: borda tracejada, sem placar | Outra forma de dizer "não houve jogo" |
| Consequência | Não há | NBA: "MIL Advances" | Liga o resultado ao ranking (JTBD 2) |
| Módulos não-card | Não cobre | Strava, Duolingo | Maior lacuna da spec |
| Estado vazio | Não cobre | 8 de 8 apps | Lacuna |

---

## Caminhos possíveis (para a tela do feed)

### A. Feed puro de cards

Só cards de evento, em ordem cronológica. É o que a spec descreve hoje.

- **A favor:** simples, previsível, fácil de implementar e testar. Honra o "activity stream, não rede social".
- **Contra:** para quem tem poucos amigos no app (cold start, risco H1 do `DISCOVERY.md`), o feed fica vazio ou repetitivo.

### B. Feed com módulo pessoal fixo no topo

Um bloco no topo com dados do próprio jogador (posição atual, jogos da semana, próximo confronto), e os cards abaixo.

- **A favor:** abrir o app sempre mostra algo relevante, mesmo sem atividade de amigos. Atende o JTBD 5 e o 2 sem trocar de aba.
- **Contra:** duplica informação do ranking e do perfil. Aumenta o que precisa ser mantido em sincronia.
- **Referências:** Strava (Weekly snapshot, Your streak).

### C. Feed com módulos intercalados

Cards de evento com módulos de sistema entre eles: "Quem seguir", "Competições com inscrição aberta", "Complete seu perfil".

- **A favor:** resolve o estado quase vazio e alimenta a descoberta (JTBD 1 e 4). É o modelo do Strava e do Duolingo.
- **Contra:** o feed deixa de ser "só o que aconteceu". Com excesso, vira vitrine. Exige regra de frequência (ex.: um módulo a cada N cards).

---

## O que funciona e o que evitar

- ✅ **Apagar o perdedor** em vez de colorir o vencedor. Consenso entre apps de esporte e já na spec.
- ✅ **Estado vazio com CTA** para seguir jogadores da mesma arena.
- ✅ **Agrupar eventos da mesma dupla em um card** (já na spec). O Strava faz o mesmo com atividades em grupo (**inferência** pelo padrão conhecido, não visto nesta amostra).
- ❌ **Mídia editorial no feed** (vídeo de destaque, notícia). Os apps de liga fazem isso e o resultado é feed de TV, não de amigos.
- ❌ **Rodapé só com ícones sem `aria-label`.** Se um dia o rótulo sair, o nome acessível precisa ficar.

## Acessibilidade

- O APG tem o padrão **Feed** (`role="feed"`, cada item `role="article"` com `aria-labelledby`, `aria-posinset`, `aria-setsize` e `aria-busy` durante o carregamento; `Page Down` / `Page Up` movem entre artigos) (**documentado**, WAI-ARIA APG, "Feed Pattern"). É o padrão certo para scroll infinito. Implementação à mão: o movimento de foco entre artigos.
- Placar com perdedor apagado: `--color-foreground-secondary` sobre branco precisa de 4,5:1 para texto. Verificar o par (`#707070` sobre `#ffffff` dá cerca de 4,95:1, **cálculo do agente**).

## Relação com o que já existe

Os blocos da spec estão na branch `feature/feed-cards` (`CardShell`, `CardHeader`, `CardFooter`, `ScoreBlock`, `MetaInfo`, `CompetitionBlock`, `RankingBlock`, `MatchVsBlock`, `CheerBar`, `H2HButton`, `ProfileMiniCard`, `Avatar`). Os padrões novos deste arquivo precisariam de: EmptyState, módulo de resumo semanal (StatTile/StatRow), carrossel de sugestões, chamada de conquista inline (Callout). Ver o inventário.

## Perguntas para o Gabriel

1. O feed é **só dos outros** (A) ou abre com **um bloco sobre o próprio jogador** (B)?
2. Módulos de sistema intercalados (C) cabem no "activity stream, não rede social", ou quebram o princípio?
3. Conquistas pequenas ("5 vitórias seguidas", "primeira vitória contra X") viram card próprio, chamada inline dentro do card de resultado, ou ficam de fora do MVP?
4. O card de inscrição ganha um CTA "Inscrever também" quando a inscrição está aberta?
