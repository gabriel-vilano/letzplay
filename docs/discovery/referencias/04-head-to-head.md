# 04 — Head-to-head

Comparação entre dois jogadores ou duas duplas: quantas vezes se enfrentaram, quem ganhou, como cada um chega ao jogo.

**JTBDs:** 3 (preparar-me para um confronto) principal; 4 (acompanhar amigos, rivalidade como conteúdo) secundário.
**Oportunidades relacionadas (`DISCOVERY.md`):** 3.2 H2H com os dois recortes (dupla × dupla e jogador × jogador), 3.3 contexto no H2H (adversários em comum, ranking na época, W.O. separado).
**Ponto de entrada já especificado:** botão "Já jogaram N vezes, veja o H2H" nos cards de resultado e confronto (`FEED_CARDS.md`), exibido só quando `h2h_count >= 1`.

---

## Resumo

- **Três formatos de H2H aparecem no mercado**, e eles respondem perguntas diferentes: **placar-resumo** ("8 × 30 em 47 jogos", Premier League), **lista de confrontos** (FotMob, DAZN) e **duelo de estatísticas espelhadas** (Box Box Club, Hevy). Os apps de liga combinam os dois primeiros; o duelo espelhado é típico de esporte individual.
- **Barra espelhada com números nas pontas é o padrão visual mais forte da comparação:** 8 de 13 apps (Premier League, Box Box Club, MLS, Apple Sports, theScore, X, NBA, Hevy).
- **H2H raramente é uma tela solta.** Em 4 de 5 apps de liga ele é **uma aba da página da partida** (FotMob, DAZN, Premier League, Fixtured). Só o Box Box Club tem tela dedicada "Head to Head".
- **Forma recente** (últimos 5 como círculos V/D coloridos, Fixtured) é o complemento mais usado quando os dois nunca se enfrentaram.

---

## Padrões recorrentes

### 1. Placar-resumo do confronto

**Premier League:** três números na mesma linha, "Wins 8 · Played 47 · Wins 30", com uma barra de duas cores entre eles e "Drawn 9" abaixo. Em seguida, quebra por mando ("Home wins 7 × 19", "Away wins 1 × 11").

No BT não há empate nem mando. O equivalente seria **vitórias de cada lado + total**, com quebras úteis ao domínio: por **tipo de competição** (ranking × torneio), por **formato** (1 set × 2 sets + STB) ou por **período**.

### 2. Lista de confrontos anteriores

**Observado em FotMob, DAZN e Premier League.** Cada item: data, competição e fase ("UEFA Champions League · Semi final"), os dois lados e o placar. DAZN coloca "FT" à esquerda e "See stats" à direita; FotMob mostra a competição como tag cinza e termina em "See all matches".

É o formato que mais se aproxima do `ScoreBlock` já existente: um H2H em lista pode ser uma pilha de placares compactos.

### 3. Estatísticas espelhadas

**Observado em 8 apps.** Rótulo centralizado, número de cada lado nas pontas, barra dividida ao meio com a cor de cada lado.

- **Box Box Club** (piloto × piloto): o lado que lidera a métrica fica mais claro; segmented **Season / Career** no topo; capacetes e "VS" em diagonal.
- **Hevy** (eu × outro): barras empilhadas, não espelhadas, com **diferença percentual** em vermelho ("↓ 83%") e tag "STRONGER" no lado melhor.
- **Premier League (comparação de jogadores):** slot vazio "+ Click to add player" para escolher o segundo lado; seletor de temporada **para cada lado**; categorias em acordeão (Overview, Attacking, Teamplay).
- **MLS, Apple Sports, theScore, X, NBA:** estatística da partida, não histórico. Mesmo componente visual.

### 4. Contexto de chegada ao jogo

- **Posição de cada lado no ranking** num mini-quadro (DAZN: "League positions" com as duas linhas da tabela; Fixtured: "Standings" com as duas linhas).
- **Forma recente:** 5 círculos V/D coloridos por lado (Fixtured: "L W L W L" × "W W W L W"). Usa letra **e** cor, o que atende WCAG 1.4.1.

### 5. Recorte do H2H

- **Temporada × carreira** (Box Box Club: segmented "Season / Career").
- **Janela temporal fixa** (UTR: o H2H considera os últimos 15 meses de partidas, **documentado** no site da UTR).
- **Dupla × dupla e jogador × jogador:** não aparece na amostra do Mobbin. O `DISCOVERY.md` registra que apps de padel (StudyPadel, Padel Addict) mostram os dois recortes lado a lado e que os números divergem muito. É o recorte mais importante para o BT e o que o mercado geral **não resolve**.

---

## Exemplos

| App | O que observar | Link |
| --- | --- | --- |
| Premier League | Placar-resumo "8 · 47 · 30" com barra; quebra por mando; resultados anteriores | [tela](https://mobbin.com/screens/23dce6cf-7ec9-4bd5-b8a2-6adc573f8eb4) |
| FotMob | Aba H2H da partida: lista de confrontos com tag de competição | [tela](https://mobbin.com/screens/0380608e-ddb8-498d-a4a9-4a9ee9107cd6) |
| DAZN | Posições no campeonato + lista de confrontos com fase e "See stats" | [tela](https://mobbin.com/screens/09baa587-3851-4ad9-9ba8-10f74396c8df) |
| Fixtured | Pré-jogo: posições dos dois + forma recente em círculos V/D | [tela](https://mobbin.com/screens/7eb2ae9a-5a13-4871-8b64-a4ad7ed7e0b5) |
| Box Box Club | Tela dedicada: "VS", segmented Season / Career, barras espelhadas | [tela](https://mobbin.com/screens/cccefced-5d6f-492a-9757-5d51bdf7bde4) |
| Box Box Club | Continuação: métricas de melhor posição, com empate visual | [tela](https://mobbin.com/screens/c9da8840-bb8c-49a9-aa0e-d9e3a00bc766) |
| Premier League | Comparação com slot vazio para escolher o segundo jogador | [tela](https://mobbin.com/screens/ced953df-0929-4297-9a66-7e9ed518e8bc) |
| Hevy | Eu × outro, diferença percentual e tag "STRONGER" | [tela](https://mobbin.com/screens/0f91d578-7a46-466f-897c-08a505b17507) |
| Apple Sports | Barras espelhadas com as cores de cada time | [tela](https://mobbin.com/screens/a85e8a79-016d-47f3-b938-046bc96dbd74) |
| NBA | Comparação em cards com barra por lado e fração ("41/92 · 44.6%") | [tela](https://mobbin.com/screens/2a85cf45-0207-498a-afe1-65473c8d3bae) |

Amostra: 18 telas em 2 buscas, 13 usadas, de 13 apps. Descartadas: Tinder, Binance, Apple Store (comparação fora de esporte). Fonte web: página do app UTR (utrsports.net, acesso em 25/09/2026), só por resumo de busca.

---

## Caminhos possíveis

### A. Resumo + lista de confrontos

Topo: "Lucas 3 × 1 Pedro" com barra proporcional. Abaixo: cada confronto como placar compacto, com data, competição e fase. W.O. listado à parte ou marcado (oportunidade 3.3).

- **A favor:** só depende de dados que o produto já terá (partidas registradas). Fácil de entender, fácil de implementar com o `ScoreBlock`.
- **Contra:** quando os dois se enfrentaram uma vez, a tela é quase vazia. Não ajuda a preparar o jogo além de "quem ganhou antes".
- **Referências:** Premier League, FotMob, DAZN.

### B. Duelo de estatísticas espelhadas

Os dois lados no topo (avatar, categoria, posição), seguidos de métricas espelhadas: vitórias no período, % de sets ganhos, tiebreaks vencidos, pontos no ranking, sequência atual.

- **A favor:** funciona **mesmo sem confronto direto** (compara cada um contra o resto). É o formato mais "preparação para o jogo".
- **Contra:** exige estatísticas por jogador que ainda não existem no modelo de dados. Risco de mostrar número sem significado ("62% × 58% de sets" diz pouco com 5 partidas).
- **Referências:** Box Box Club, Hevy, Premier League (comparação).

### C. Pré-jogo contextual

Em vez de tela própria, o H2H vive no **card e na página do confronto**: posição de cada lado, forma recente (últimos 5) e, se houver, o placar-resumo do H2H.

- **A favor:** entrega a informação no momento em que ela importa (confronto definido, JTBD 3), sem navegação extra.
- **Contra:** não serve à consulta livre ("como estou contra o Pedro?") fora de um confronto marcado.
- **Referências:** Fixtured, DAZN.

### O recorte de duplas

Independente do caminho, o H2H de BT precisa responder **qual recorte está em tela**. Opções vistas em outros contextos:

1. **Segmented no topo** "Duplas · Jogadores" (análogo ao "Season / Career" do Box Box Club).
2. **Duas seções empilhadas**: primeiro o confronto de hoje (dupla × dupla), depois o histórico individual de cada par de jogadores.
3. **Só o recorte da dupla**, com link para o perfil individual.

---

## O que funciona e o que evitar

- ✅ **Números nas pontas das barras espelhadas.** A barra dá a proporção, o número dá o valor. Nenhum dos 8 apps usa só a barra.
- ✅ **Forma recente com letra + cor** (V/D), nunca só a cor.
- ✅ **Esconder o botão quando não há histórico** (já na spec). O Premier League faz o contrário (mostra "0 · 0 · 0"), e fica pior.
- ❌ **Comparação com diferença percentual em vermelho** entre amigos (Hevy: "↓ 83%"). Em esporte competitivo pode ser motivador; em app social de amigos pode soar humilhante. Decisão de tom (**inferência**).
- ❌ **Misturar W.O. com vitória jogada** no placar-resumo. ATP e UTR separam (oportunidade 3.3).

## Acessibilidade

- Não existe padrão APG para comparação (**documentado**, ausência). A estrutura semântica mais robusta é uma `<table>` com os dois lados como colunas e a métrica como cabeçalho de linha. Barras são decorativas (`aria-hidden`), números são o conteúdo.
- Cor dos lados: os dois lados precisam se distinguir por posição (esquerda/direita) e nome, não só por cor.

## Relação com o que já existe

`H2HButton`, `MatchVsBlock` e `ScoreBlock` (branch do feed) já cobrem o ponto de entrada, o "VS" e o placar. Faltam: barra espelhada (ComparisonBar), resumo de confronto, indicador de forma recente (FormGuide), segmented de recorte. Ver o inventário.

## Perguntas para o Gabriel

1. O H2H é **uma tela própria** (A ou B) ou **uma seção do confronto** (C)?
2. Qual recorte é o padrão ao abrir: **dupla × dupla** (o jogo de hoje) ou **jogador × jogador** (o histórico)?
3. Quando os dois nunca jogaram, a tela mostra **adversários em comum** (oportunidade 3.3) ou a entrada simplesmente não existe (como no card do feed)?
4. H2H conta partidas de **todos os rankings e torneios** ou só do ranking em que o confronto acontece?
