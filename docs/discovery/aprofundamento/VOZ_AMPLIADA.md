# VOZ_AMPLIADA.md — LetzPlay

Segunda coleta da voz do usuário: reviews de loja, Reclame Aqui e Reddit que a pesquisa anterior não alcançou. Complementa o `VOZ_DO_USUARIO.md` da pesquisa de mercado (branch `docs/prd-13-discovery-mercado`), sem repetir o que já está lá.

**Pesquisa feita em 25/09/2026.** Todas as fontes foram acessadas nessa data.

> **Sem decisões de produto.** Este doc registra evidência e recorrência. Não diz o que o LetzPlay deve fazer.

---

## Resumo

- **A meta de 30 reviews por app não é alcançável com as ferramentas desta sessão.** A App Store mostra no máximo 10 reviews por país, o Google Play mostra 3, o feed público de reviews da Apple voltou vazio e o Reddit não pode ser aberto. O que dá para ampliar é a **cobertura de apps** e o **Reddit pelo trecho do buscador**, e foi isso que esta coleta fez.
- **Achado novo mais forte: confirmar resultado pelo adversário tem um modo de falha conhecido.** Em Playtomic e DUPR, o adversário que perde **recusa ou "contesta" o placar**, e o resultado fica pendente para sempre. 8 threads, em 2 apps e 2 esportes. Isso muda a leitura da oportunidade 1 (ver "O que muda").
- **O LetzPlay já tem toda a voz pública visível coletada.** Reclame Aqui tem só 5 reclamações no total. App Store BR mostra as mesmas 10 reviews, Google Play as mesmas 3, App Store de Portugal não tem nenhuma. Mais voz do LetzPlay só vem de entrevista ou de dado interno.
- **O lado do organizador fala bem do app mais simples.** As 10 reviews visíveis do Meu Ranking Organizador (4,9★) são elogios, e o tema é sempre o mesmo: fácil de usar e suporte rápido.
- **Cobrar do jogador gera revolta mesmo em app querido.** O MATCHi (Suécia, 4,7★ com 25 mil avaliações) passou a cobrar taxa de serviço do jogador, e 5 das 10 reviews visíveis reclamam disso.

---

## Método

### O que foi tentado e o resultado

| Tentativa | Resultado | Leitura |
| --- | --- | --- |
| Feed público de reviews da App Store (`itunes.apple.com/.../rss/customerreviews`, JSON e XML) via Firecrawl | Volta vazio (feed sem nenhuma entrada), com status 200 | O feed é a única forma conhecida de passar de 10 reviews na Apple. Não funciona para este app nesta data |
| Google Play com `showAllReviews=true` | Mesmas 3 reviews | O Google Play carrega o resto por script depois de um clique. O Firecrawl desta sessão não expõe ações de clique |
| App Store de outro país (Portugal) para o LetzPlay | "Não recebeu classificações suficientes" | O LetzPlay só tem voz no Brasil |
| Reddit direto (`old.reddit.com`) via Firecrawl | Recusado: "we do not support this site" | Reddit só pelo trecho do buscador |
| Reddit pela busca nativa com filtro de domínio | Recusado: domínio inacessível para a busca nativa | idem |
| Reddit pelo `firecrawl_search` | Funciona. Devolve título e um trecho de cada thread | Única via. Conta como sinal de recorrência, não como citação completa |

### Um risco de método encontrado: o modo JSON do Firecrawl inventa dados

A extração estruturada (`formats: ["json"]`) foi testada em 4 páginas e comparada com o texto bruto (`markdown`) das mesmas páginas:

| Página | O JSON disse | O texto bruto mostra |
| --- | --- | --- |
| Tornfy, Google Play | Nota 4,5, 200 avaliações e 3 reviews com data de 2023 e resposta do desenvolvedor | **Nenhuma nota e nenhuma review.** Só "1 mil+ downloads" |
| LetzPlay, Google Play | 3 reviews com data (23/01/2026, 10/07/2024, 01/06/2025) | As 3 reviews são reais, mas **a página não mostra data** |
| LetzPlay, App Store BR | Nota 2,8 em cada review | 2,8 é a **média do app**. A página não mostra a nota de cada review |
| Meu Ranking Jogador, Google Play | Review de 24/10/2024 | A data visível é da **resposta do desenvolvedor** (11/10/2024) |

Por isso, **todo item deste doc foi conferido no texto bruto**. Nenhuma data ou nota vem do JSON. Isso vale como aviso para pesquisas futuras: o JSON preenche o schema mesmo quando a página não tem o dado.

### Tamanho desta coleta

| Fonte | Itens novos | Leitura |
| --- | --- | --- |
| Reviews de loja (4 apps novos ou lojas novas) | 26 | Texto integral |
| Reclame Aqui (LetzPlay, lista completa) | 5 (3 já estavam na coleta anterior) | Título + primeira linha |
| Reddit (r/padel, r/Pickleball, r/10s, r/BeachTennisBrasil) | 21 threads | Título + trecho do buscador |
| **Total** | **52** (49 inéditos) | |

Somado à coleta anterior (110 itens), a amostra total fica em **159 itens**.

### Apps e lojas desta coleta

| App | Esporte e papel | Loja | Nota (nº de avaliações) | Reviews visíveis |
| --- | --- | --- | --- | --- |
| Meu Ranking Organizador | BT, tênis e outros. **App do organizador** | App Store BR | 4,9 (64) | 10, todas positivas |
| Meu Ranking Jogador | idem, app do jogador | Google Play BR | 4,7 (147), 10 mil+ downloads, atualizado em 05/09/2026 | 3 |
| Tornfy | Torneios de BT, padel e vôlei | App Store BR · Google Play BR | iOS 2,7 (9) · Android sem nota, 1 mil+ downloads | 3 · 0 |
| MATCHi | Padel e tênis (Suécia). Reserva de quadra e eventos | App Store SE | 4,7 (25 mil) | 10 |
| LetzPlay | BT, tênis, padel | Reclame Aqui · App Store PT | RA: 5 reclamações no total, 100% respondidas · PT: sem avaliações | 5 · 0 |

**Não cobertos, e por quê:**

| App | Motivo |
| --- | --- |
| Ranketes | Não tem app nas lojas. A busca em Google Play e App Store não achou nada com o nome. Parece ser só web (ver `TEARDOWN.md`) |
| Rankedin | Não há app oficial com reviews encontrável. O que aparece é um app de terceiro (Padelin) que lê dados públicos do Rankedin |
| RankingBR | A página do Google Play indicada pela busca devolve 404 (app removido ou renomeado) |
| Apps de arena white-label (ex.: Arena Santista BT) | A página da App Store devolve 404 no Brasil. Apps de marca da arena têm pouquíssima avaliação |
| Tênis Integrado no Reclame Aqui | Endereço presumido devolveu 404. Não repetido para poupar orçamento |
| YouTube e fóruns brasileiros | Comentário do YouTube carrega por script. Não há fórum brasileiro ativo de BT: a conversa acontece em grupos de WhatsApp e no Instagram, que não são abertos |

---

## Achados por tema

### 1. Confirmação de resultado pelo adversário: o modo de falha

A coleta anterior encontrou "resultado pendente" como dor (4 menções em 2 apps + 4 threads). Esta coleta achou o **outro lado**: quando o app pede que o adversário confirme, o perdedor tem um veto.

| Trecho (tradução livre quando em inglês) | App | Fonte |
| --- | --- | --- |
| "Adversários estão rejeitando o placar e dizendo que **eles** ganharam? O que fazer?" | Playtomic | r/padel, thread de set/2026 |
| "Eles ficam cancelando nosso resultado e colocando um placar impossível" | Playtomic | r/padel |
| "Combinamos o placar depois do jogo (eles perderam) e desde então estão rejeitando o resultado e colocando 0-0" | Playtomic | r/padel |
| "A Playtomic dá 24 horas para validar. Dá para esperar até o último momento e torcer para eles desistirem" | Playtomic | r/padel |
| "Por favor, mudem a validação para automática se ninguém contestar em 72 horas. É um incômodo real correr atrás de quem não valida" | DUPR | r/Pickleball |
| "Dá para simplesmente se recusar a validar a partida" | DUPR | r/Pickleball ("DUPR is a divisive tool at the Rec level") |
| "Mandei resultados para aceite e eles ficaram parados para sempre, ou foram contestados pelo adversário" | DUPR | r/Pickleball, AMA com o chefe de análise do DUPR |
| "A Playtomic diz que o jogo é 'inválido' e não conta para o nível" | Playtomic | r/padel |

**Força: Forte** para a existência do problema (8 threads, 2 apps, 2 esportes, incluindo uma AMA oficial). **Fraca** para a frequência: o Reddit mostra o caso que dá briga, não a taxa de contestação.

**Ligação com o BT:** os rankings de arena no LetzPlay já usam "lança → adversário aprova → auto-aprovação em 24h" (pesquisa de domínio). Não há, na amostra, relato do BT sobre contestação. A ausência pode ser falta de fonte (não há Reddit ativo de BT), não falta de problema.

### 2. Identidade e nível: contas múltiplas para "resetar" o nível

| Trecho | App | Fonte |
| --- | --- | --- |
| "Tem uma brecha no DUPR: não gostou do seu rating? Crie uma conta nova" | DUPR | r/Pickleball |
| "Muita gente que eu conheço tem 2 ou mais [contas]" | Playtomic | r/padel |
| "O nível virou distintivo de honra para alguns, um status" | Playtomic | r/padel |
| "Tem jogador excelente com nível 2 ou menos porque joga sempre no mesmo grupo de amigos" | Playtomic | r/padel |
| "O rating tem o efeito paradoxal de deixar os usuários mais assíduos menos abertos a jogar com gente nova" | Playtomic | r/padel |
| "Por que a Playtomic não deixa restringir partidas por confiabilidade?" | Playtomic | r/padel |
| "Você mantém seu nível de propósito?" (thread sobre segurar o nível) | Playtomic | r/padel |
| "Melhoria na segurança do cadastro para evitar perfis duplicados" em torneio de BT | LetzPlay | Reclame Aqui, 31/08/2025 (já estava na coleta anterior) |

**Força: Forte.** Perfil duplicado aparece agora em 3 apps e 2 esportes, incluindo o BT brasileiro (LetzPlay). A thread sobre filtrar por confiabilidade é o único pedido explícito, na amostra, de usar a confiabilidade do nível como filtro.

### 3. O organizador quer simplicidade e suporte

As 10 reviews visíveis do **Meu Ranking Organizador** (App Store BR, 4,9★, 64 avaliações) são todas positivas, e os temas se repetem:

| Tema | Menções (de 10) | Trecho |
| --- | --- | --- |
| Fácil de usar, simples, objetivo | 8 | "O aplicativo é simples e objetivo, fácil de entender" |
| Suporte rápido e disponível | 5 | "suporte estão sempre disponíveis para ajudar" · "O suporte dos desenvolvedores é rápido e ágil!" |
| Regras bem explicadas | 1 | "Bem explicado as regras e muito fácil de usar" |
| Escala de uso | 1 | "estamos entrando no 3º mês de uso, são quase 80 pessoas em nosso ranking" (clube de tênis) |
| Uso em arena | 1 | "pra Arena foi mto bom" |

No app do jogador (Google Play), a review mais útil também é de organizador: "criemos barragens personalizadas em poucos cliques. O sistema de geração de jogos e atualização de resultados é automático". As outras duas são bugs de Android que o desenvolvedor resolveu por contato direto, uma delas "após contato pelo WhatsApp".

**Força: Média.** Um app só, e as reviews positivas de organizador podem ser de clientes próximos. O dado relevante é o **tamanho**: um ranking típico citado tem ~80 pessoas.

### 4. Cobrar do jogador gera revolta

O **MATCHi** (Suécia) passou a cobrar uma taxa de serviço por reserva do próprio jogador. 5 das 10 reviews visíveis tratam disso:

| Trecho (tradução livre do sueco) | Fonte |
| --- | --- |
| "De repente o MATCHi começou a cobrar taxa de serviço de 15 coroas para reservar uma quadra de padel de 90 min … agora no jogador, em vez do dono da quadra" | App Store SE |
| "Quando começam a cobrar do usuário a cada reserva e não dá para reservar de outro jeito, a gente se sente **preso**" | App Store SE |
| "No começo o MATCHi era visto como inovador. Agora cobra do clube e do jogador por cada vez mais funções. Mais clubes estão cansando e olhando alternativas" | App Store SE |
| "Absurdo pagar a mais por funções de que não preciso (preço subiu, e já cobram porcentagem das quadras)" | App Store SE |

Somado à coleta anterior (cobrança indevida, taxa e assinatura que não entrega: 14 menções em 4 apps), cobrança ao jogador é um tema **Forte**. O detalhe novo é o mecanismo: a revolta vem de **cobrar dos dois lados** e de o jogador **não ter como escolher outro app**, porque a quadra ou o organizador escolheu.

### 5. Tornfy: pouca voz, e negativa

| Trecho | Loja |
| --- | --- |
| "Muito ruim, vive travando, não atualiza os pagamentos, dificuldade de marcar os jogos" | App Store BR |
| "Muito ruim aplicativo para torneios" | App Store BR |
| "Muito bom!" | App Store BR |

2,7★ com 9 avaliações no iOS, sem avaliação no Android e 1 mil+ downloads. **Força: Fraca** (3 reviews). O dado útil é o tamanho: o Tornfy é pequeno no lado do jogador.

### 6. LetzPlay: o que a lista completa do Reclame Aqui mostra

A página da empresa no Reclame Aqui tem **5 reclamações no total**, todas respondidas:

| Data | Título (resumido) | Tema | Status |
| --- | --- | --- | --- |
| 16/09/2026 | 3º lugar no torneio não lançado ("demora na atualização do resultado") | JTBD 2, organizador | Resolvida |
| 07/03/2026 | Cobrança indevida e uso não autorizado do cartão | Fundação, cobrança | Respondida |
| 03/10/2025 | Cobrança indevida de boleto | Fundação, cobrança | Resolvida |
| 31/08/2025 | Segurança do cadastro para evitar perfis duplicados em torneio de BT | JTBD 3 | Resolvida |
| 15/08/2025 | Cobrança por campeonato não cadastrado | Fundação, cobrança | Resolvida |

**Leitura descritiva:** 3 de 5 são de **cobrança**. Para uma base de 100 mil+ downloads, 5 reclamações em um ano é pouco: o Reclame Aqui não é o canal onde o jogador de BT reclama. A dor principal do LetzPlay continua nas lojas (navegação, notificação, sessão).

### 7. Reddit de Beach Tennis: quase vazio

- **r/BeachTennisBrasil existe**, mas os temas visíveis no buscador são equipamento (preço médio de raquete: R$ 1.400 em out/2025, segundo um post), cursos online, um app de placar para Apple Watch e um app para criar evento e achar parceiro. **Nenhuma thread sobre ranking, torneio ou app de competição** apareceu.
- Fora do Brasil, BT aparece no Reddit como curiosidade ("TIL: beach tennis"), exibição de ex-tenistas (Luanco) ou busca de parceiro em cidade nova (Aruba, Denver, Colônia, Berlim).
- Uma menção de Londres: "o app é bom, bem barato … roda com um ranking Elo próprio" (r/10s), sobre um grupo de BT.

**Leitura:** o jogador competitivo de BT brasileiro **não discute ranking em público aberto**. A conversa deve estar no WhatsApp e no Instagram. Isso é consistente com o insight do `CLAUDE.md` ("marcação de jogos de ranking acontece no WhatsApp") e explica por que a voz do BT na amostra é pequena.

---

## Classificação por JTBD e por oportunidade do top 10

Contagem de itens **desta coleta** (uma review pode ter mais de uma tag). Os números do top 10 seguem o `SINTESE.md`.

| Oportunidade do top 10 | Itens novos | De onde | Efeito na evidência |
| --- | --- | --- | --- |
| 1. Resultado rápido e confiável (JTBD 2, 5) | 9 | 8 threads (Playtomic, DUPR) + 1 RA LetzPlay | **Ganha nuance.** A confirmação pelo adversário, citada como solução na oferta, tem falha documentada: veto do perdedor e pendência |
| 2. Nível e perfil confiáveis (JTBD 3) | 8 | 7 threads + 1 RA LetzPlay | **Ganha força.** Contas múltiplas para resetar nível em 3 apps. Pedido de filtro por confiabilidade |
| 3. Horário e notificação no dia do torneio (JTBD 1) | 0 | — | Sem mudança |
| 4. Explicar por que a posição mudou (JTBD 2, 5) | 1 | "invalid score não conta para o nível" | Sem mudança relevante |
| 5. Regra do organizador visível (JTBD 2, 1) | 2 | Meu Ranking Organizador ("regras bem explicadas"), bye invertido (LetzPlay, 6 pessoas acharam útil) | Sem mudança |
| 6. Navegação direta para a tarefa do dia | 9 | 8 elogios de "fácil de usar" (organizador) + "3 cliques" (LetzPlay, 3 pessoas acharam útil) | Leve ganho, e agora também do lado do organizador |
| 7. Conta, sessão e desempenho | 4 | Tornfy (trava), Meu Ranking (2 bugs de Android), suporte (5 elogios) | Sem mudança. Reforça que suporte rápido é o que o organizador elogia |
| 8. Descobrir competição por nível e região | 2 | Pedido de filtro de favoritos (MATCHi), app de achar parceiro (r/BeachTennisBrasil) | Sem mudança |
| 9. Progressão e evolução visíveis | 1 | "manter o nível de propósito" | Sem mudança |
| 10. Nível que atravesse arenas | 1 | BT em Londres com "Elo próprio" | Sem mudança |
| Fora do top 10: cobrança ao jogador | 8 | MATCHi (5), RA LetzPlay (3) | Ver "O que muda" |

---

## O que muda em relação à coleta anterior

| Tema | Antes | Agora |
| --- | --- | --- |
| Confirmação pelo adversário | Tratada como **solução** (só Ranketes e DUPR declaram) | Também é **fonte de dor**: veto do perdedor, pendência sem fim, pedido de auto-validação em 72h. Forte |
| Perfil duplicado | 6 menções em 4 apps | Soma o padrão de **conta nova para resetar o nível** (DUPR, Playtomic). Forte |
| Voz do organizador | "Quase só marketing de fornecedor" | 10 reviews reais de organizador (Meu Ranking), todas sobre simplicidade e suporte. Média |
| Cobrança | Cobrança indevida e taxa | Mecanismo novo: taxa ao jogador num app que ele **não escolheu** gera sensação de estar "preso". Forte |
| Voz pública do BT brasileiro | Pequena | **Confirmado que é pequena**, e por quê: o jogador de BT não discute ranking em canal aberto. A lacuna só se fecha com entrevista |

---

## Perguntas abertas

Só o Gabriel responde.

1. **Quem desempata um resultado contestado?** Se o redesign seguir a confirmação pelo adversário, a evidência mostra que alguém precisa arbitrar o veto. No BT de arena, esse alguém é o organizador, que está fora do MVP (`docs/PRODUCT.md`).
2. **Vale fazer entrevista ou um formulário com jogadores de BT?** Esta coleta confirmou que a voz pública do BT competitivo brasileiro é quase inexistente. As ferramentas desta sessão não conseguem ir além.
3. **O Gabriel tem acesso a grupos de WhatsApp de ranking ou torneio (como participante)?** É onde a conversa acontece. Uma leitura manual, com consentimento do grupo e sem identificar ninguém, seria a fonte mais próxima da realidade.

---

## Fontes

| Fonte | Endereço | Acesso |
| --- | --- | --- |
| Meu Ranking Organizador, App Store BR | [apps.apple.com/br/app/meu-ranking-organizador/id1661980654](https://apps.apple.com/br/app/meu-ranking-organizador/id1661980654?see-all=reviews) | Lido (texto bruto) |
| Meu Ranking Jogador, Google Play BR | [play.google.com/…com.rankingtennis](https://play.google.com/store/apps/details?id=com.rankingtennis&hl=pt_BR&gl=BR) | Lido |
| Tornfy, App Store BR | [apps.apple.com/br/app/tornfy/id6474335470](https://apps.apple.com/br/app/tornfy/id6474335470?see-all=reviews) | Lido |
| Tornfy, Google Play BR | [play.google.com/…com.tornfy](https://play.google.com/store/apps/details?id=com.tornfy&hl=pt_BR&gl=BR) | Lido |
| MATCHi, App Store SE | [apps.apple.com/se/app/matchi/id720782039](https://apps.apple.com/se/app/matchi/id720782039?see-all=reviews) | Lido |
| LetzPlay, Reclame Aqui | [reclameaqui.com.br/…/lptennis-aplicativos-e-servicos/lista-reclamacoes](https://www.reclameaqui.com.br/empresa/lptennis-aplicativos-e-servicos/lista-reclamacoes/) | Lido (títulos e primeira linha) |
| LetzPlay, Google Play BR e App Store BR e PT | [Google Play](https://play.google.com/store/apps/details?id=com.lptennis.letzplay&hl=pt_BR&gl=BR) · [App Store BR](https://apps.apple.com/br/app/letzplay/id1262006308?see-all=reviews) · [App Store PT](https://apps.apple.com/pt/app/letzplay/id1262006308?see-all=reviews) | Lido |
| r/padel: contestação de placar | [1wk2e8p](https://www.reddit.com/r/padel/comments/1wk2e8p/) · [1np4q1f](https://www.reddit.com/r/padel/comments/1np4q1f/) · [1lmrlo3](https://www.reddit.com/r/padel/comments/1lmrlo3/) · [1btcazb](https://www.reddit.com/r/padel/comments/1btcazb/) · [1ogexqn](https://www.reddit.com/r/padel/comments/1ogexqn/) | Resumo |
| r/padel: nível e contas | [17g5l1c](https://www.reddit.com/r/padel/comments/17g5l1c/) · [1gsj6ma](https://www.reddit.com/r/padel/comments/1gsj6ma/) · [1r78i6e](https://www.reddit.com/r/padel/comments/1r78i6e/) · [1jysgij](https://www.reddit.com/r/padel/comments/1jysgij/) · [1qvcak0](https://www.reddit.com/r/padel/comments/1qvcak0/) · [1nlyo5g](https://www.reddit.com/r/padel/comments/1nlyo5g/) · [14el62n](https://www.reddit.com/r/padel/comments/14el62n/) · [1wn9c2w](https://www.reddit.com/r/padel/comments/1wn9c2w/) · [1lb2uob](https://www.reddit.com/r/padel/comments/1lb2uob/) · [1du7rb0](https://www.reddit.com/r/padel/comments/1du7rb0/) | Resumo |
| r/Pickleball: DUPR | [1agtbne](https://www.reddit.com/r/Pickleball/comments/1agtbne/) · [1az1sw7](https://www.reddit.com/r/Pickleball/comments/1az1sw7/) · [16097fq](https://www.reddit.com/r/Pickleball/comments/16097fq/) · [1pk0jq2](https://www.reddit.com/r/Pickleball/comments/1pk0jq2/) | Resumo |
| r/BeachTennisBrasil e outros | [r/BeachTennisBrasil](https://www.reddit.com/r/BeachTennisBrasil/) · [preço de raquete](https://www.reddit.com/r/BeachTennisBrasil/comments/1oidm7x/) · [r/10s Londres](https://www.reddit.com/r/10s/comments/1vv73uj/) | Resumo |

## Nota de método: uso de ferramentas nesta frente

- **Firecrawl: 23 chamadas.** 17 `firecrawl_scrape` (2 no feed da Apple, vazio; 4 em JSON, das quais 1 fabricou dados e 1 deu 404; 2 de verificação em markdown; 5 em lojas; 1 no Reclame Aqui do LetzPlay; 1 no Reclame Aqui do Tênis Integrado, 404; 1 no Reddit, recusada) e 6 `firecrawl_search` (Reddit). Nenhuma no modo Alexandria (as buscas usaram `sources: ["web"]`).
- **Busca nativa: 7** (2 recusadas por causa do domínio do Reddit).
