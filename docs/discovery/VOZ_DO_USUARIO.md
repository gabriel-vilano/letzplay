# VOZ_DO_USUARIO.md — LetzPlay

O que jogadores dizem, em público, sobre o LetzPlay atual e sobre apps concorrentes de ranking, rating e torneio. Reviews de loja (App Store e Google Play), reclamações no Reclame Aqui e discussões no Reddit, classificadas pelos JTBDs do `CLAUDE.md`.

**Pesquisa feita em 25/09/2026.** Todas as fontes foram acessadas nessa data.

> **Sem decisões de produto.** Este doc registra evidência e recorrência. Não diz o que o LetzPlay deve fazer. A priorização é do Gabriel e mora no Linear.

---

## Método

1. **Coleta.** Páginas de reviews das lojas lidas via serviço de scraping (Firecrawl), porque o proxy da sessão bloqueia lojas e Reclame Aqui. App Store: página `?see-all=reviews` (mostra ~10 reviews). Google Play: página do app (mostra só 3 reviews; o "Ver todas" exige interação e não carregou). Reclame Aqui: lista de reclamações da empresa (títulos + primeira linha). Reddit: só títulos e trechos do resumo de busca, sem abrir as threads.
2. **Registro.** Cada item ganhou um ID, app, loja, nota, data, trecho curto e classificação. Tabelas no Apêndice.
3. **Classificação.** Uma review pode ter mais de uma tag (ex.: "lento e sem suporte" conta em Performance e em Suporte). As contagens abaixo somam tags, não reviews únicas.
4. **Categorias.** Os 5 JTBDs do `CLAUDE.md`, mais **Fundação** (conta, login, performance, UX, suporte, cobrança) e **Organizador/arena** (dores que nascem de regra ou ação de quem organiza).

### Força da evidência (escala deste doc)

| Nível | Critério |
| --- | --- |
| **Forte** | Recorrente em 3 ou mais apps, ou em 2 apps mais o Reddit |
| **Média** | Recorrente num app só, ou em 2 apps com poucas menções |
| **Fraca** | Menção isolada |

### Tamanho da amostra

| Fonte | Itens | Leitura |
| --- | --- | --- |
| Reviews de loja (6 apps) | 80 | Texto integral da review |
| Reclame Aqui (LetzPlay) | 6 | Título + primeira linha (5) ou resumo de busca (1) |
| Reddit (3 comunidades) | 24 | Título + trecho do resumo de busca |
| **Total** | **110** | |

Por app (lojas + Reclame Aqui):

| App | Esporte | Lojas lidas | Itens | Nota média da loja (nº de avaliações) |
| --- | --- | --- | --- | --- |
| **LetzPlay** | BT, tênis, padel | App Store BR, Google Play BR, Reclame Aqui | 19 | iOS 2,8 (217) · Android 3,9 (238), 100 mil+ downloads |
| Playtomic | Padel | App Store BR, US e PT, Google Play BR | 24 | iOS BR 4,9 (219) · US 4,8 (13 mil) · PT 4,8 (6,9 mil) · Android 4,7 (109 mil), 1 mi+ |
| Tênis Integrado | Tênis (federações) | App Store BR, Google Play BR | 13 | iOS 2,5 (68) · Android 3,4 (154), 50 mil+ |
| Meu Ranking | Tênis, BT e outros | App Store BR | 10 | iOS 4,5 (123) |
| UTR Sports | Tênis, pickleball | App Store US | 10 | iOS 4,6 (4,4 mil) |
| DUPR | Pickleball | App Store US | 10 | iOS 4,1 (3,8 mil) |

### Limitações e vieses

- **Amostra pequena e escolhida pela loja.** A App Store mostra ~10 reviews "mais úteis/relevantes"; o Google Play mostra 3. Não é aleatória nem recente por padrão.
- **Nota individual e data quase nunca aparecem.** O texto extraído não traz as estrelas de cada review. A data aparece só no Reclame Aqui e, às vezes, como data da resposta do desenvolvedor (usada como limite superior). O Apêndice marca o **tom** (negativo, positivo, misto) no lugar da nota.
- **Negativo supera positivo.** Dos 86 itens de loja e Reclame Aqui: 64 negativos, 15 positivos, 6 mistos, 1 não classificável. A nota média das lojas (4,1 a 4,9 nos concorrentes) mostra que a maioria silenciosa avalia melhor do que o texto sugere. O Meu Ranking é a exceção: 8 das 10 reviews visíveis são elogios curtos.
- **Google Play do LetzPlay: só 3 reviews.** Era a fonte mais importante e foi a mais pobre. O restante não carregou sem interação na página.
- **Concorrentes fora do BT e fora do Brasil.** Playtomic (padel), UTR (tênis) e DUPR (pickleball) foram lidos nas lojas dos EUA e de Portugal. A dor pode não se transferir igual para o BT brasileiro.
- **Reddit lido só pelo resumo.** Os trechos podem vir de um comentário, não do post original. Contam como sinal de recorrência, não como citação completa. Não há Reddit de Beach Tennis brasileiro: a busca não achou nada.
- **Não cobertos:** Rankedin (página da App Store US deu 404), Matchi, Rivals, apps de arena BR (BT Match, Arena Online, Match Point BT) e Ranking Beach Tennis. Motivo: orçamento de scraping (22 chamadas) e lojas sem reviews visíveis nos apps white-label.

---

## Resumo: padrões que aparecem em vários apps

Ordenados por número de menções nas lojas e no Reclame Aqui. A coluna Reddit soma threads que tratam do mesmo tema.

| # | Padrão | Categoria | Lojas + RA (menções / apps) | Reddit | Força |
| --- | --- | --- | --- | --- | --- |
| 1 | Navegação confusa, excesso de cliques, "complicado para algo simples" | Fundação | 15 / 5 | — | **Forte** |
| 2 | Cobrança indevida, taxas, assinatura que não entrega, reembolso | Fundação | 14 / 4 | — | **Forte** |
| 3 | Lentidão, bugs, app que não abre ou piora após atualização | Fundação | 13 / 5 | — | **Forte** |
| 4 | Regra ou ação do organizador que o jogador não controla | Organizador/arena | 13 / 6 | — | **Forte** |
| 5 | Descoberta e filtros de competição ruins (nível, local, horário, eventos inscritos) | JTBD 1 | 9 / 5 | 2 | **Forte** |
| 6 | Suporte ausente, lento ou só por bot | Fundação | 9 / 5 | — | **Forte** |
| 7 | Rating ou nível que não reflete a realidade, e não se explica | JTBD 2, 3, 5 | 7 / 3 | 15 | **Forte** |
| 8 | Conta: logout, cadastro que falha, conta que não se exclui | Fundação | 8 / 3 | — | **Forte** |
| 9 | Perfil duplicado, sandbagging, jogador em nível errado | JTBD 3 | 6 / 4 | 3 | **Forte** |
| 10 | Horário do jogo e notificação que falham, com perda de torneio ou W.O. | JTBD 1 | 6 / 3 | — | **Forte** |
| 11 | Resultado pendente ou rating que demora meses para atualizar | JTBD 2 | 4 / 2 | 4 | **Forte** |

Três observações de recorrência:

- **O dano mais caro é o de horário.** Os 6 relatos de notificação e programação descrevem consequência competitiva real: "perdemos torneios" (LetzPlay), W.O. numa quartas de final de Brasileiro (Tênis Integrado), horário avisado um dia antes (UTR).
- **O rating é o tema que mais gera discussão fora da loja.** 15 das 24 threads do Reddit tratam de rating que "mente", cai após vitória ou depende do parceiro. Nas lojas, o tema aparece em Playtomic, UTR e DUPR, os três apps com rating algorítmico.
- **O jogador muitas vezes não escolheu o app.** Quatro reviews dizem que usam o app porque a federação, o clube ou o circuito exige (Tênis Integrado ×2, Playtomic, DUPR).

---

## Por JTBD

### JTBD 1 — Encontrar competição

**Dores**

| Dor | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Filtros e busca de partidas/torneios ruins (nível, local, horário, gênero, amistoso × ranqueado) | 7 (Playtomic, UTR, Tênis Integrado) | "cannot select Ranked or Friendly only" (Playtomic) · "location settings have to set every time I search" (UTR) · "não possui filtros … (esporte, localização)" (Tênis Integrado) | **Forte** |
| Não saber quando e onde é o próximo jogo; notificação que não chega | 6 (LetzPlay, Tênis Integrado, UTR) | "não está aparecendo notificações, e muitas vezes perdemos torneios" (LetzPlay) · "nao tinha nenhuma previsão do segundo jogo do dia" (Tênis Integrado) | **Forte** |
| Acompanhar eventos em que já se inscreveu | 2 (UTR) | "no intuitive way of tracking events you've already signed up for" · "have them scroll through a list of 9+ different draws" | Média |
| Faixa de nível trava a formação da partida | 1 loja + 1 Reddit (Playtomic) | "Always leads to games being auto cancelled" · "rejected my partner for being only 0.2 out of the range" | Média |
| Categoria ou nível insuficiente na inscrição | 1 (LetzPlay) | "possibilidade de incluir mais categorias/níveis de jogadores" | Fraca |
| Beach Tennis não coberto por app de rating grande | 1 (Playtomic) | "can you add … pickleball, beach tennis?" | Fraca |

**Elogios**

| Elogio | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Achar jogo, torneio e gente do mesmo nível | 6 (Playtomic, Meu Ranking, DUPR) | "Best place to find the same level opponents" (Playtomic) · "Muito fácil de encontrar os torneios tops" (Meu Ranking) · "Helps me play frequently and meet other players" (Playtomic) | **Forte** |

### JTBD 2 — Saber onde estou no ranking

**Dores**

| Dor | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Resultado pendente; ranking que não atualiza | 4 (LetzPlay, DUPR) + 4 Reddit (DUPR, UTR) | "2 meses e os jogos ainda estão pendentes!" (LetzPlay) · "Não lançaram meu 3o lugar no torneio" (Reclame Aqui) · "Scores take forever to update … months and months" (DUPR) | **Forte** |
| Pontuação que cai após vitória, sem explicação | 2 (DUPR) + 5 Reddit (DUPR, UTR) | "penalizing players for winning against lower-rated teams" (DUPR) · "frustrated winning but 'not by enough'" (Reddit, DUPR) · "UTR rating going down after wins" (Reddit) | **Forte** |
| Rating muda sem o jogador jogar | 1 (DUPR) + 2 Reddit (UTR) | "increase or decrease your rating … EVEN YEARS after" (DUPR) · "rising with no match play" (Reddit, UTR) | Média |
| Placar válido recusado pelo app | 1 (Playtomic) | "gives an invalid score for 6/5. Then, it does not allow a change" | Fraca |

A dor de "pendente" aparece com dono diferente em cada app. No LetzPlay, a culpa recai no organizador que não lança. No DUPR e no UTR, no processo de verificação e no algoritmo.

**Elogios**

| Elogio | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Ver ranking, jogos e histórico num lugar | 4 (Meu Ranking, DUPR) | "Visualização e formato do ranking, jogos, head to head, bem legal!" (Meu Ranking) · "follow all your reported matches and view stats" (DUPR) | Média |
| Validar o placar do jogo com o adversário no app | 1 (DUPR) | "I was able to see the games and validate them" | Fraca |

### JTBD 3 — Preparar-me para um confronto

**Dores**

| Dor | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Perfil duplicado e sandbagging (jogar abaixo do nível) | 4 (LetzPlay, DUPR) + 3 Reddit (DUPR, Playtomic) | "perfis duplicados" (Reclame Aqui, LetzPlay) · "use the DUPR ID with the lower rating to register" (DUPR) · "Sandbagging ruined my first tournament" (Reddit) | **Forte** |
| Rating do adversário não é confiável | 3 (Playtomic, UTR, DUPR) + 5 Reddit | "absolute worse rating system I have ever seen" (Playtomic) · "Two people playing at the same level … totally different ratings" (UTR) · "My Playtomic level is such a lie" (Reddit) | **Forte** |
| Categoria não usa o histórico do jogador | 1 (LetzPlay) | "possui histórico dos jogadores, mas não usa essas informações para sugerir ou limitar categorias" | Fraca |
| Histórico de no-show do adversário invisível | 1 (Playtomic) | "mark people as 'absent/no show' so that there is a history" | Fraca |
| Rating em dupla depende do parceiro | 1 (DUPR) + 3 Reddit (Playtomic, UTR) | "they're not rating you alone" (Reddit, Playtomic) · "largely due to partners who … end up making mistakes" (Reddit, Playtomic) | **Forte** |

**Elogios**

| Elogio | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Comparar ratings e ver o nível da competição | 4 (UTR, DUPR, Meu Ranking) | "I can compare UTR's and see my competition" (UTR) · "the best way to get someone's rating" (DUPR) · "head to head" (Meu Ranking) | **Forte** |

Um elogio do UTR compara rating com ranking por pontos: "more realistic than your national ranking because some people just play tournaments to get points". É menção isolada (Fraca), mas toca a diferença entre ranking de pontos (modelo do BT) e rating de nível.

### JTBD 4 — Acompanhar amigos no BT

| Sinal | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Elogio: conhecer gente e se divertir | 1 (Playtomic) | "very powerful tool to meet people and have fun" | Fraca |
| Dor: camada social atrapalha quem só quer reservar | 1 (Playtomic) | "I don't care for it to be a social media site as well" | Fraca |
| Dor: gerir a lista de parceiros | 1 (LetzPlay) | "opção de excluir parceiros que não jogamos mais" | Fraca |

**Lacuna.** O JTBD 4 quase não aparece na amostra. Nenhuma review do LetzPlay fala de feed, torcida ou comentário, embora o app tenha esses recursos. Ausência em review não prova ausência de valor: reviews tendem a registrar o que quebra.

### JTBD 5 — Sentir que estou evoluindo

| Dor | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Rating "preso" que não acompanha a evolução real | 2 (Playtomic) + 3 Reddit (DUPR, Playtomic) | "quarterly adjustments to people's levels if they've been playing consistently" (Playtomic) · "Stuck at 2.5 DUPR … Now Playing at 4.0" (Reddit) | **Forte** |
| Estatística paga que não entrega | 1 (UTR) | "my stats aren't there, none of the analytics are there" | Fraca |
| Resultado pendente esvazia a estatística | 1 (LetzPlay) | "não adianta investir nas estatísticas" | Fraca |

Elogio: "Ótima app para seguir meus jogos" (Meu Ranking). Menção isolada, Fraca.

---

## Fundação (conta, login, performance, suporte, cobrança)

| Dor | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Navegação confusa, muitos cliques | 15 (Playtomic 7, Tênis Integrado 3, LetzPlay 2, DUPR 2, UTR 1) | "Mais que 3 cliques pra ver informação simples" (LetzPlay) · "Sempre que entro no app é necessário ficar procurando a informação" (LetzPlay) · "It makes what's easy into something complicated" (Playtomic) | **Forte** |
| Cobrança e pagamento | 14 (Playtomic 6, LetzPlay 4, UTR 2, DUPR 2) | "Cobranças indevidas e uso não autorizado do cartão" (Reclame Aqui, LetzPlay) · "Fiz o pagamento pelo App e a Arena não recebeu!" (Reclame Aqui) · "trick you to start a free trial of the premium" (Playtomic) | **Forte** |
| Lentidão, bugs, instabilidade | 13 (Tênis Integrado 5, DUPR 3, LetzPlay 2, Playtomic 2, Meu Ranking 1) | "deixou o site mto lento, e as vezes nem abre os jogos" (LetzPlay) · "Todo dia um erro diferente" (Tênis Integrado) | **Forte** |
| Suporte ausente ou lento | 9 (Playtomic 3, LetzPlay 2, Tênis Integrado 2, UTR 1, DUPR 1) | "Ajuda apenas por bot de IA" (Playtomic) · "suporte só via e-mail o qual demoram 1 ano pra responder" (Tênis Integrado) | **Forte** |
| Conta e login | 8 (Tênis Integrado 4, LetzPlay 3, Playtomic 1) | "começou a deslogar os usuários depois de poucos minutos" (LetzPlay) · "não consigo nem fazer meu cadastro" (LetzPlay) · "não reconhece meu login … no meio do torneio" (Tênis Integrado) | **Forte** |
| Conta que não se exclui (subtema) | 3 (LetzPlay 1, Tênis Integrado 2) | "Não é possível excluir ou mesmo desativar … a conta" (LetzPlay) · "meu cpf ficou lá nela e não consigo criar outra" (Tênis Integrado) | Média |
| Anúncios e upsell agressivos | 2 (DUPR) | "full-screen ads … without a close button" · "constant harassment to upgrade" | Média |

Dentro de Cobrança, o LetzPlay aparece só pelo Reclame Aqui (4 de 6 reclamações da empresa são de cobrança). Nas lojas do LetzPlay a amostra não trouxe queixa de pagamento.

---

## Organizador/arena

Dores que o jogador atribui a regras ou ações de quem organiza, ou ao fato de não poder escolher o app.

| Dor | Menções (apps) | Trechos | Força |
| --- | --- | --- | --- |
| Organizador não lança resultado e o app não cobra | 2 (LetzPlay) | "não força o gestor do torneio a atualizar os jogos!" · "demora na atualização do resultado de um torneio" (Reclame Aqui) | Média |
| Formato de chave ou grupo percebido como injusto | 2 (LetzPlay, Meu Ranking) | "função de bye invertida … Os grupos maiores … ficam com 2 jogos a mais" (LetzPlay) · "tem parceiro q repete mas não cai contra um novo" (Meu Ranking) | Média |
| Jogador obrigado a usar o app escolhido pelo organizador | 4 (Tênis Integrado 2, Playtomic, DUPR) | "não sei pq a federação insiste nesse app" (Tênis Integrado) · "courts I play at only have this option" (Playtomic) · "most people are forced into getting it" (DUPR) | **Forte** |
| Divisão de nível do torneio mal feita | 3 (LetzPlay, UTR, DUPR) | "compromete o equilíbrio dos torneios" (LetzPlay) · "they match 15-year-old with 10-year-olds" (UTR) | **Forte** |
| Pagamento que não chega ao organizador | 1 (LetzPlay, Reclame Aqui) | "Fiz o pagamento pelo App e a Arena não recebeu!" | Fraca |
| Eventos sobrepostos na agenda do jogador | 1 (DUPR) | "prevents participants from scheduling overlapping events" | Fraca |

**Padrão de resposta dos desenvolvedores.** Duas respostas públicas transferem a questão para o organizador: "Basta pedir para o organizador mudar o formato" (Meu Ranking) e "Cancellation policies are set by each club" (Playtomic). O jogador reclama com o app; o app devolve para o organizador.

---

## Recorte: só o LetzPlay

| Tema | Itens | IDs |
| --- | --- | --- |
| Conta e login (logout, cadastro, exclusão) | 3 | L1, L5, L6 |
| Cobrança | 4 | RA2, RA3, RA5, RA6 |
| Resultado pendente por inação do organizador | 2 | L4, RA1 |
| Notificação que não chega | 2 | L2, L7 |
| Navegação e excesso de cliques | 2 | G1, G3 |
| Integridade de categoria e perfil duplicado | 2 | L10, RA4 |
| Lentidão | 2 | L3, L6 |
| Regra de chave (bye) | 1 | G2 |
| Suporte e gestão de parceiros | 1 | L9 |
| Elogio | 1 | L8 |

Uma única review positiva em 19 itens. As duas reviews do Google Play com mais votos de "útil" (6 e 3) tratam de regra de chave e de navegação.

---

## Apêndice A — Reviews de loja e Reclame Aqui

Legenda de classificação: **J1–J5** = JTBD; **F-UX**, **F-perf**, **F-conta**, **F-sup**, **F-cob** = Fundação (UX, performance, conta, suporte, cobrança); **ORG** = organizador/arena; **RAT** = confiabilidade do rating. Tom: − negativo, + positivo, ± misto. "Resp." = data da resposta do desenvolvedor, quando é a única data visível. Nota individual não exposta no texto extraído (n/d).

### LetzPlay

| ID | Loja | Nota | Data | Tom | Trecho | Classificação |
| --- | --- | --- | --- | --- | --- | --- |
| L1 | App Store BR | n/d | n/d | − | "começou a deslogar os usuários depois de poucos minutos de inatividade" | F-conta |
| L2 | App Store BR | n/d | n/d | − | "não está aparecendo notificações, e muitas vezes perdemos torneios com isso" | J1 (notificação) |
| L3 | App Store BR | n/d | n/d | − | "deixou o site mto lento, e as vezes nem abre os jogos" | F-perf |
| L4 | App Store BR | n/d | n/d | − | "não força o gestor do torneio a atualizar os jogos! … 2 meses e os jogos ainda estão pendentes" | J2 (pendente), ORG, J5 |
| L5 | App Store BR | n/d | n/d | − | "Não é possível excluir ou mesmo desativar … a conta" | F-conta |
| L6 | App Store BR | n/d | n/d | − | "não consigo nem fazer meu cadastro, fica dando mensagem 'tente mais tarde'" | F-conta, F-perf |
| L7 | App Store BR | n/d | n/d | − | "não notifica por push, somente por e-mail … quando uma reserva é suspensa ou cancelada" | J1 (notificação) |
| L8 | App Store BR | 5 (provável) | n/d | + | "App facilitou minha vida!" | Elogio geral |
| L9 | App Store BR | n/d | n/d | − | Título "Sem suporte": "podia ter opção de excluir parceiros que não jogamos mais" | F-sup, J4 |
| L10 | App Store BR | n/d | n/d | − | "não usa essas informações para sugerir ou limitar categorias. Isso compromete o equilíbrio dos torneios" | J3 (integridade), ORG |
| G1 | Google Play BR | n/d | n/d | − | "Sempre que entro no app é necessário ficar procurando a informação" · "horários em andamento não ficam visíveis" | F-UX |
| G2 | Google Play BR | n/d | n/d | − | "O app está com a função de bye invertida … é injusto" (6 votos úteis) | ORG (regra de chave) |
| G3 | Google Play BR | n/d | n/d | − | "Mais que 3 cliques pra ver informação simples" · "incluir mais categorias/níveis" (3 votos úteis) | F-UX, J1 |
| RA1 | Reclame Aqui | — | 16/09/2026 (resolvida) | − | "Não lançaram meu 3o lugar no torneio Mista D" · "demora na atualização do resultado" | J2 (pendente), ORG |
| RA2 | Reclame Aqui | — | 07/03/2026 (respondida) | − | "Cobranças indevidas e uso não autorizado do cartão na plataforma" | F-cob |
| RA3 | Reclame Aqui | — | 03/10/2025 (resolvida) | − | "Cobrança indevida de boleto pela empresa Letzplay" | F-cob |
| RA4 | Reclame Aqui | — | 31/08/2025 (resolvida) | − | "precisa melhorar a sua segurança no cadastro de jogadores urgentemente" · "evitar perfis duplicados" | J3 (integridade) |
| RA5 | Reclame Aqui | — | 15/08/2025 (resolvida) | − | "Cobrança indevida por campeonato não cadastrado no app" | F-cob |
| RA6 | Reclame Aqui (empresa LL Tênis) | — | n/d | − | "Fiz o pagamento pelo App e a Arena não recebeu!" · sem comprovante e sem suporte (resumo de busca) | F-cob, F-sup, ORG |

### Playtomic

| ID | Loja | Nota | Data | Tom | Trecho | Classificação |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | App Store BR | n/d | resp. 25/08/2025 | + | "very powerful tool to meet people and have fun" | Elogio J1, J4 |
| P2 | App Store US | n/d | resp. 20/02/2025 | − | "gives an invalid score for 6/5. Then, it does not allow a change" | J2 (registro) |
| P3 | App Store US | n/d | resp. 04/09 | − | "mark people as 'absent/no show'" · "quarterly adjustments to people's levels" | J3, J5, RAT |
| P4 | App Store US | n/d | 2024 (título) | − | "trick you to start a free trial of the premium" · "5% of Playtomic fees" | F-cob, F-UX |
| P5 | App Store US | n/d | resp. 03/02/2025 | − | "Manual adjust rank at 100 disappeared" · "cannot select Ranked or Friendly only" | J1 (filtro), RAT |
| P6 | App Store US | n/d | resp. 10/09 | ± | "crucial to my padel journey" · "lots of bugs" · "search function doesnt work well" | Elogio J1, F-perf, J1 (filtro) |
| P7 | App Store US | n/d | n/d | ± | "Seems great, user friendly, but can you add … pickleball, beach tennis?" | Elogio, J1 |
| P8 | App Store US | n/d | resp. 14/04 | − | "somebody cancels within 24 hrs. You paid, there is no game" · "help bot is unhelpful" | F-cob, F-sup |
| P9 | App Store US | n/d | n/d | − | "way too much going on when all I want to do is book a court" | F-UX, J4 |
| P10 | App Store US | n/d | resp. 26/08/2025 | − | "the absolute worse rating system I have ever seen" | RAT, J3 |
| P11 | App Store US | n/d | resp. 14/08/2025 | − | "impossible to get an open play scheduled … games being auto cancelled" | J1 (matchmaking) |
| PG1 | Google Play BR | n/d | n/d | − | "Cobrança indevida. Ajuda apenas por bot de IA" | F-cob, F-sup |
| PG2 | Google Play BR | n/d | n/d | − | "pagamento funciona mais lentamente e bloqueia quando se tenta adicionar um novo cartão" (10 úteis) | F-cob, F-perf |
| PG3 | Google Play BR | n/d | n/d | − | "cobrar aos utilizadores por cada marcação feita quando já cobram aos clubes" (16 úteis) | F-cob |
| PT1 | App Store PT | n/d | n/d | − | "Very inflexible chose time" | J1 (filtro) |
| PT2 | App Store PT | n/d | n/d | − | "The UI of booking is not user friendly at all" | F-UX |
| PT3 | App Store PT | n/d | n/d | ± | "The app is really good!" · "be able to make small tournaments" | Elogio, J1 |
| PT4 | App Store PT | n/d | n/d | ± | Título "Great app, confusing UX" | F-UX |
| PT5 | App Store PT | n/d | n/d | − | "Doesn't allow to see actual reservations, some addresses are wrong" | F-UX |
| PT6 | App Store PT | n/d | n/d | − | "Muito complicada. Pouco intuitiva. Nao devolvem dinheiro de cancelamentos. Help desk horrível." | F-UX, F-cob, F-sup |
| PT7 | App Store PT | n/d | n/d | − | "It makes what's easy into something complicated for no reason" | F-UX |
| PT8 | App Store PT | n/d | resp. 21/07 | + | "Best place to find the same level opponents" | Elogio J1, J3 |
| PT9 | App Store PT | n/d | resp. 07/09 | − | "lost the ability to create matches … need a verified phone number" | F-conta |
| PT10 | App Store PT | n/d | resp. 11/08 | − | "would prefer not to be on Playtomic but … courts … only have this option" | ORG (lock-in) |

### Tênis Integrado

| ID | Loja | Nota | Data | Tom | Trecho | Classificação |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | App Store BR | n/d | n/d | − | "tomou WO … por falha técnica deste aplicativo" · "nao tinha nenhuma previsão do segundo jogo do dia" | J1 (programação), F-perf, J2 |
| T2 | App Store BR | n/d | n/d | − | "exclui a conta … meu cpf ficou lá nela e não consigo criar outra" | F-conta |
| T3 | App Store BR | n/d | n/d | − | "mal organizado, de difícil visualização dos comandos" | F-UX |
| T4 | App Store BR | 5 (título) | n/d | + | "5 estrelas" | Elogio geral |
| T5 | App Store BR | n/d | n/d | − | "Desenvolvimento horrível, não sei pq a federação insiste nesse app" | F-UX, ORG (lock-in) |
| T6 | App Store BR | n/d | n/d | − | "Todo dia um erro diferente" · "suporte só via e-mail … demoram 1 ano" | F-perf, F-sup |
| T7 | App Store BR | n/d | n/d | − | "demora carregar, layout pouco amigável e extremamente burocrático" | F-perf, F-UX, ORG (lock-in) |
| T8 | App Store BR | n/d | n/d | − | "mantém todos os meus dados e não permite eu retomar para o app" | F-conta |
| T9 | App Store BR | n/d | n/d | − | "app diz clicar icone e não tem ícone … troquei de clube e não consigo mudar" | F-sup, F-conta |
| T10 | App Store BR | n/d | n/d | + | "Excelente aplicativo. Bem completo e de fácil uso." | Elogio geral |
| TG1 | Google Play BR | n/d | resp. 06/11/2019 | − | "depois da atualização ficou instável … não consigo mais reservar quadras" (9 úteis) | F-perf |
| TG2 | Google Play BR | n/d | n/d | − | "não reconhece meu login … Estou no meio do torneio e sem informações" (4 úteis) | F-conta, J1 |
| TG3 | Google Play BR | n/d | n/d | − | "lento, não possui filtros … (esporte, localização, etc.)" (22 úteis) | F-perf, J1 (filtro) |

### Meu Ranking

| ID | Loja | Nota | Data | Tom | Trecho | Classificação |
| --- | --- | --- | --- | --- | --- | --- |
| M1 | App Store BR | n/d | n/d | + | "Muito fácil de encontrar os torneios tops" | Elogio J1 |
| M2 | App Store BR | n/d | n/d | + | "Ótima app para seguir meus jogos" | Elogio J2, J5 |
| M3 | App Store BR | n/d | n/d | + | "Ótimo app para ranking de Tennis" | Elogio J2 |
| M4 | App Store BR | n/d | n/d | + | "Visualização e formato do ranking, jogos, head to head, bem legal!" | Elogio J2, J3, ORG |
| M5 | App Store BR | n/d | n/d | + | "faz com que as barragens fluam sem interferências" | Elogio ORG, J2 |
| M6 | App Store BR | 5 (texto) | n/d | + | "5 estrelas!" | Elogio geral |
| M7 | App Store BR | n/d | n/d | + | "Bom ap" | Elogio geral |
| M8 | App Store BR | n/d | n/d | + | "gerir as partidas de tênis da barragem. Facilita a vida demais" | Elogio ORG, J2 |
| M9 | App Store BR | n/d | resp. 23/04/2025 | − | "tinha q ser todos contra todos… tem parceiro q repete … fica até injusto" | ORG (regra de formato) |
| M10 | App Store BR | n/d | resp. 12/03/2025 | − | "Simplesmente não abre" | F-perf |

### UTR Sports

| ID | Loja | Nota | Data | Tom | Trecho | Classificação |
| --- | --- | --- | --- | --- | --- | --- |
| U1 | App Store US | n/d | resp. 25/02/2023 | + | "I can compare UTR's and see my competition" · "more realistic than your national ranking" | Elogio J3, RAT |
| U2 | App Store US | n/d | n/d | ? | Review de brincadeira, sem conteúdo avaliável | Não classificável |
| U3 | App Store US | n/d | n/d | − | "Power Subscription Does Nothing" · "none of the analytics are there" | F-cob, J5 |
| U4 | App Store US | n/d | n/d | − | "informed me of my tournament time just one day before" · "Inflexible Refund Policy" | J1 (programação), F-cob, ORG |
| U5 | App Store US | n/d | resp. 26/08/2023 | ± | "no intuitive way of tracking events you've already signed up for" | J1 (filtro) |
| U6 | App Store US | n/d | n/d | − | "location settings have to set every time I search for events" | J1 (filtro) |
| U7 | App Store US | n/d | n/d | − | "an easily accessible link to determine when and where the athlete plays" | J1 (programação) |
| U8 | App Store US | n/d | n/d | − | "they match 15-year-old with 10-year-olds" · "no phone number provided" | F-sup, ORG, J3 |
| U9 | App Store US | n/d | n/d | − | "So many things you can't do from the app" | F-UX |
| U10 | App Store US | n/d | n/d | − | "Two people playing at the same level … can have totally different ratings" | RAT, J3 |

### DUPR

| ID | Loja | Nota | Data | Tom | Trecho | Classificação |
| --- | --- | --- | --- | --- | --- | --- |
| D1 | App Store US | n/d | n/d | ± | "the best way to get someone's rating" · "you have to make 2 DUPR accounts" | Elogio J3, J3 (integridade), ORG (lock-in) |
| D2 | App Store US | n/d | n/d | − | "many people with multiple DUPR profiles … use the DUPR ID with the lower rating" | J3 (integridade), ORG |
| D3 | App Store US | n/d | n/d | − | "increase or decrease your rating … EVEN YEARS after" · "The app is buggy" | RAT, J2, F-UX, F-perf |
| D4 | App Store US | n/d | n/d | − | "penalizing players for winning against lower-rated teams is not the right approach" | RAT, J2 |
| D5 | App Store US | n/d | n/d | ± | "prevents participants from scheduling overlapping events" | J1, ORG |
| D6 | App Store US | n/d | n/d | − | "My card was charged … misled into clicking a link" | F-cob |
| D7 | App Store US | n/d | n/d | − | "full-screen ads … without a close button" · "harassment to upgrade to DUPR+" | F-perf, F-cob |
| D8 | App Store US | n/d | n/d | + | "look up other player's ratings, follow all your reported matches" · "validate them" | Elogio J2, J3 |
| D9 | App Store US | n/d | n/d | ± | "slow when logging in" · "Loading scores … takes awhile" · "Navigation is somewhat counter intuitive" | F-perf, F-UX, J2 (pendente) |
| D10 | App Store US | n/d | n/d | − | "win against higher rated players, your ratings go down yet Teammates scores go up" · "months and months" | RAT, J2 (pendente), F-sup |

## Apêndice B — Reddit (título e trecho do resumo de busca)

| ID | Comunidade | Thread | Trecho | Classificação |
| --- | --- | --- | --- | --- |
| RP1 | r/padel | [Playtomic rating?](https://www.reddit.com/r/padel/comments/1gsj6ma/playtomic_rating/) | "often very misleading … they're not rating you alone" | RAT (parceiro) |
| RP2 | r/padel | [Playtomic Self-adjustment](https://www.reddit.com/r/padel/comments/1lb2uob/playtomic_selfadjustment/) | "largely due to partners who like to play aggressive" | RAT (parceiro), J5 |
| RP3 | r/padel | [Reminder that … your Playtomic rating is a lie](https://www.reddit.com/r/padel/comments/1qvcak0/reminder_that_the_devil_and_your_playtomic_rating/) | "huge mismatch in actual levels" | RAT |
| RP4 | r/padel | [My Playtomic level is such a lie](https://www.reddit.com/r/padel/comments/17g5l1c/my_playtomic_level_is_such_a_lie/) | "determines the reliability of your score to be low" | RAT |
| RP5 | r/padel | [Playtomic etiquette](https://www.reddit.com/r/padel/comments/1jysgij/playtomic_etiquette/) | "rejected my partner for being only 0.2 out of the range" | J1 (matchmaking) |
| RP6 | r/padel | [Playtomic Ranking](https://www.reddit.com/r/padel/comments/17ukw8x/playtomic_ranking/) | "exclusively a way to find other players … similar level" | J1 (neutro) |
| RP7 | r/padel | [Score on Playtomic when a player was absent](https://www.reddit.com/r/padel/comments/1ogexqn/score_on_playtomic_when_a_player_was_absent_fair/) | "select lower and enjoy your sweet …" | J3 (manipulação) |
| RP8 | r/padel | [Playtomic aggy opponents](https://www.reddit.com/r/padel/comments/1r78i6e/playtomic_aggy_opponents/) | "The obsession with the Playtomic rating is REAL" | RAT (efeito social) |
| RD1 | r/Pickleball | [Anybody who doesn't like DUPR's update…](https://www.reddit.com/r/Pickleball/comments/1lv0ex4/anybody_who_doesnt_like_duprs_update_is_either/) | "targeting, denying losses, and not entering scores" | J3 (manipulação), J2 |
| RD2 | r/Pickleball | [Goofed up my DUPR rating and now stuck](https://www.reddit.com/r/Pickleball/comments/1klct0q/goofed_up_my_dupr_rating_and_now_stuck/) | "reliability score is very high I can't change my score" | RAT, J5 |
| RD3 | r/Pickleball | [DUPR Not Updating](https://www.reddit.com/r/Pickleball/comments/16ba7v2/dupr_not_updating/) | "my rating stayed the same through all games" | J2 (pendente) |
| RD4 | r/Pickleball | [… why DUPR is broken](https://www.reddit.com/r/Pickleball/comments/1ew3v5v/the_only_data_point_you_need_to_see_why_dupr_is/) | Título | RAT |
| RD5 | r/Pickleball | [Stuck at 2.5 DUPR … Now Playing at 4.0](https://www.reddit.com/r/Pickleball/comments/1la42h0/stuck_at_25_dupr_after_early_losses_now_playing/) | "I get rejected because of my outdated 2.5 rating" | J5, RAT |
| RD6 | r/Pickleball | [Sandbagging ruined my first tournament](https://www.reddit.com/r/Pickleball/comments/1mb3a72/sandbagging_ruined_my_first_tournament_experience/) | Título | J3 (sandbagging) |
| RD7 | r/Pickleball | [AMA do CEO e cientista de dados da DUPR](https://www.reddit.com/r/Pickleball/comments/1p28vpt/we_are_the_ceo_lead_data_scientist_at_dupr_ask_us/) | "Why does it take forever for the ratings to update" | J2 (pendente) |
| RD8 | r/Pickleball | [AMA do Head of Analytics da DUPR](https://www.reddit.com/r/Pickleball/comments/16097fq/im_scott_mendelssohn_head_of_analytics_at_dupr/) | "frustrated winning but 'not by enough' and seeing their DUPR go down" | RAT (explicação) |
| RU1 | r/10s | [UTR rating going down after wins](https://www.reddit.com/r/10s/comments/16pukut/utr_rating_going_down_after_wins/) | Título | RAT (explicação) |
| RU2 | r/10s | [UTR not as accurate?](https://www.reddit.com/r/10s/comments/1cuh8xs/utr_not_as_accurate/) | "not accurate for lower level players and players who do not play a lot" | RAT |
| RU3 | r/10s | [UTR is so dumb](https://www.reddit.com/r/10s/comments/1c0id84/utr_is_so_dumb/) | "takes 7 days for match results to be verified" | J2 (pendente) |
| RU4 | r/10s | [… I sometimes find my results confusing](https://www.reddit.com/r/10s/comments/1ksiir9/i_like_utr_in_theory_but_i_sometimes_find_my/) | "didn't go up much because your partner was only 60% reliable" | RAT (parceiro, explicação) |
| RU5 | r/10s | [My teens utr is rising with no match play](https://www.reddit.com/r/10s/comments/1q6th2d/my_teens_utr_is_rising_with_no_match_play/) | Título | RAT (explicação) |
| RU6 | r/10s | [UTR still not updating](https://www.reddit.com/r/10s/comments/1e7tlhm/utr_still_not_updating/) | Título | J2 (pendente) |
| RU7 | r/10s | [Friendly reminder to take rating sites … with a grain of salt](https://www.reddit.com/r/10s/comments/12bih4w/friendly_reminder_to_take_rating_sites_eg_utr/) | "UTR is known to inflate ratings for junior players" | RAT |
| RU8 | r/10s | [UTR is weird sometimes](https://www.reddit.com/r/10s/comments/1qb3ao9/utr_is_weird_sometimes/) | "constantly recalibrating based on who you play" | RAT (explicação) |

## Apêndice C — Fontes

Todas acessadas em 25/09/2026.

| Fonte | Link | Como foi lida |
| --- | --- | --- |
| LetzPlay, App Store BR | [apps.apple.com/br/app/letzplay/id1262006308](https://apps.apple.com/br/app/letzplay/id1262006308?see-all=reviews) | Scraping (coleta prévia do orquestrador) |
| LetzPlay, Google Play BR | [play.google.com/…com.lptennis.letzplay](https://play.google.com/store/apps/details?id=com.lptennis.letzplay&hl=pt_BR&gl=BR) | Scraping, 3 reviews |
| LetzPlay, Reclame Aqui | [reclameaqui.com.br/empresa/lptennis-aplicativos-e-servicos](https://www.reclameaqui.com.br/empresa/lptennis-aplicativos-e-servicos/lista-reclamacoes/) | Scraping da lista (título + 1ª linha). Empresa "sem reputação definida", não verificada |
| Reclamação na empresa LL Tênis | [reclameaqui.com.br/ll-tenis/…](https://www.reclameaqui.com.br/ll-tenis/fiz-o-pagamento-pelo-app-e-a-arena-nao-recebeu_bWKYgCGtuHnPfPHq/) | Só resumo de busca |
| Playtomic, App Store BR | [apps.apple.com/br/app/…/id1242321076](https://apps.apple.com/br/app/playtomic-play-padel/id1242321076?see-all=reviews) | Scraping, 1 review visível |
| Playtomic, App Store US | [apps.apple.com/us/app/…/id1242321076](https://apps.apple.com/us/app/playtomic-padel-pickleball/id1242321076?see-all=reviews) | Scraping, 10 reviews |
| Playtomic, App Store PT | [apps.apple.com/pt/app/…/id1242321076](https://apps.apple.com/pt/app/playtomic-play-padel/id1242321076?see-all=reviews) | Scraping, 10 reviews |
| Playtomic, Google Play BR | [play.google.com/…com.playtomic](https://play.google.com/store/apps/details?id=com.playtomic&hl=pt_BR&gl=BR) | Scraping, 3 reviews (duas em português de Portugal) |
| Tênis Integrado, App Store BR | [apps.apple.com/br/app/…/id1185848909](https://apps.apple.com/br/app/t%C3%AAnis-integrado/id1185848909?see-all=reviews) | Scraping, 10 reviews |
| Tênis Integrado, Google Play BR | [play.google.com/…br.com.tenisintegrado](https://play.google.com/store/apps/details?id=br.com.tenisintegrado&hl=pt_BR&gl=BR) | Scraping, 3 reviews |
| Meu Ranking, App Store BR | [apps.apple.com/br/app/meu-ranking/id1483076354](https://apps.apple.com/br/app/meu-ranking/id1483076354?see-all=reviews) | Scraping, 10 reviews |
| UTR Sports, App Store US | [apps.apple.com/us/app/utr-sports/id1519232627](https://apps.apple.com/us/app/utr-sports/id1519232627?see-all=reviews) | Scraping, 10 reviews |
| DUPR, App Store US | [apps.apple.com/us/app/dupr/id1567932355](https://apps.apple.com/us/app/dupr/id1567932355?see-all=reviews) | Scraping, 10 reviews |
| Reddit r/padel, r/Pickleball, r/10s | Links no Apêndice B | Só resumo de busca |
