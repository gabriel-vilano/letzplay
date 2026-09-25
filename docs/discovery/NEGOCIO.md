# NEGOCIO.md — Modelos de monetização em esportes de raquete

**Propósito:** mapear como o segmento de esportes de raquete amador e competitivo ganha dinheiro, com exemplos reais, e descrever o que cada modelo exige do produto. Aprofunda a seção 4 do `docs/DISCOVERY.md` (branch `docs/prd-11-mapa-oportunidades`). Não repete o que já está lá, exceto quando um número foi reconfirmado.

**Pesquisa feita em 25/09/2026.**

> Sem decisões de produto. Este doc descreve o mercado. Não recomenda modelo nem prioridade.

## Método

- Busca na web (resumos do mecanismo de busca) para mapear os modelos e achar as fontes.
- Leitura integral de fontes primárias quando o proxy deixou: regulamentos em PDF no S3 do Tênis Integrado (baixados e convertidos em texto), central de ajuda do LetzPlay, home do LetzPlay, páginas de preço do Playtomic Manager e do Rankedin.
- Cada linha diz se a fonte foi **Lida** (página aberta e lida) ou vista só por **Resumo** (trecho do buscador).
- Força da evidência, como no `README.md` desta pasta: **Forte** (várias fontes independentes, ou fonte primária lida), **Média** (uma fonte verificável, ou várias só por resumo), **Fraca** (inferência, agregador sem metodologia, ou fonte única de terceiro).
- "Cálculo" marca contas feitas aqui a partir de números da fonte. "Estimativa" marca número que a própria fonte chama de estimativa.

## Limitações

- O proxy bloqueou quase todos os sites de produto (playtomic.com, dupr.com, utrsports.net, courtreserve.com, btmatch, arenaonline, letzplay.me). Várias páginas só foram vistas por resumo.
- O orçamento de busca da sessão acabou antes do fim. Alguns pontos ficaram sem segunda fonte (marcados).
- Preço de assinatura dentro de app (Playtomic Premium, Match! Tennis) aparece só na loja, que o proxy bloqueia.
- Nenhuma empresa brasileira do segmento publica receita. Os números financeiros são de empresas estrangeiras.
- Um site de agregador atribui ao "Playtomic Premium" o preço de €119/mês. É o plano Standard do Playtomic Manager (para clubes), não a assinatura do jogador. Não foi usado.

---

## 1. Assinatura do jogador

O jogador paga por recorrência para ter mais do que o uso gratuito. O ranking ou rating básico fica grátis em todos os casos vistos. O pago é estatística, análise, desconto e remoção de taxa.

### Exemplos

| Produto | Preço | O que o pago dá | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- | --- |
| **UTR Power** (tênis/pickleball) | ~US$ 10/mês no plano anual | Analytics; isenção da *Verified Fee* em eventos UTR; desconto em inscrições; desde maio/2026, benefícios de viagem (~US$ 250/ano) e vestuário (Fabletics, só EUA). A UTR diz que o pacote "vale US$ 1.450+" | [GlobeNewswire, 11/05/2026](https://www.globenewswire.com/news-release/2026/05/11/3292217/0/en/utr-sports-transforms-the-racquet-sports-membership-model-with-the-reimagined-power-membership.html); [Power Perks](https://app.utrsports.net/power-perks) | Resumo | Média |
| **UTR Power Club Bundles** | Não público | Clube compra Power anual em lote e embute na mensalidade do sócio | [UTR Power Club](https://www.utrsports.net/pages/power-club) | Resumo | Média |
| **DUPR+** (pickleball) | US$ 3,99/mês ou US$ 29,99/ano | Perks, descontos e features exclusivas. O rating continua grátis | [dupr.com/duprplus](https://www.dupr.com/duprplus); [Zendesk DUPR](https://dupr.zendesk.com/hc/en-us/articles/40441846646292-How-to-Subscribe-to-DUPR) | Resumo | Média |
| **Playtomic Premium** (padel) | Não encontrado. Cobrado pela loja, varia por país | Zero taxa de reserva, partida e cancelamento; estatística avançada (tempo de quadra, sequências, comparação com jogadores do mesmo nível); "Golden Match" (partida promovida); alertas ilimitados | [Ajuda Playtomic — Premium Unlimited](https://playerhelp.playtomic.com/hc/en-gb/articles/19831696399633-Premium-Plan-Unlimited); [Ajuda Manager — Premium para jogadores](https://helpmanager.playtomic.com/hc/en-gb/articles/20534670300561-Playtomic-Premium-Plan-for-players) | Resumo | Média (benefícios); preço ausente |
| **Rankedin PRO Player** | €2,99/mês ou €15,99/ano | Sem anúncios; todas as abas de perfil (próprio e alheio); estatísticas; *Skill Rating* de todos os jogadores; indicador de partidas em tempo real | [rankedin.com/en/pricing](https://www.rankedin.com/en/pricing) (cache de 23/09/2026) | **Lida** | Forte |
| **Match! Tennis** | Elite custa US$ 17/mês a mais que o Pro. Relatório avulso US$ 1,49; no Elite, US$ 0,68 cada. Preço do Pro não encontrado | Relatórios de scouting com IA (30 no Elite), tendências, padrões de desempenho | [matchtennisapp.com/pricing](https://web.matchtennisapp.com/pricing/) | Resumo | Fraca (preço base ausente) |
| **Strava** (referência fora da raquete) | Brasil: R$ 22,90/mês ou R$ 149,90/ano; família R$ 389,90/ano; estudante R$ 74,95/ano. Pix aceito desde fev/2026 | Análise, rotas, segmentos, retrospectiva anual (a retrospectiva virou paga e gerou reclamação) | [Mania de Corrida, 02/2026](https://www.maniadecorrida.com.br/2026/02/strava-fortalece-presenca-no-brasil-e.html); [TechTudo, 10/2025](https://www.techtudo.com.br/guia/2025/10/strava-saiba-como-funciona-e-tudo-que-voce-precisa-saber-sobre-o-app-edapps.ghtml); [TudoCelular](https://www.tudocelular.com/curiosidade/noticias/n244882/strava-cobra-assinatura-retrospectiva-ano-polemica.html) | Resumo | Média |
| **Apps de padel BR** (World Padel Ranking, PadelRank, SportScore, Padel Ranking) | Não encontrado | Ranking, nivelamento, estatística. SportScore se apresenta como sistema recomendado pela Confederação Brasileira de Padel | [Clupik](https://clupik.com/pt-br/blog/aplicativos-jogadores-clubes-padel/); [SportScore](https://www.sportscore.com.br/) | Resumo | Fraca |
| **LetzPlay (jogador)** | Nenhum plano pago de jogador encontrado | A home oferece de graça ao jogador H2H, painel de desempenho e histórico | [letzplay.me/home](https://letzplay.me/home) | **Lida** | Média (ausência de evidência) |

### Números financeiros de referência

| Empresa | Número | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- |
| Strava | Rodada de maio/2025 liderada pela Sequoia, avaliação de US$ 2,2 bi (inclui dívida). Série F anterior: US$ 110 mi em nov/2020, avaliação US$ 1,5 bi | [PYMNTS, 05/2025](https://www.pymnts.com/news/investment-tracker/2025/funding-round-boosts-fitness-app-stravas-valuation-to-2-2-billion/); [Crunchbase News](https://news.crunchbase.com/venture/fitness-startup-funding-falters-strava-raise/) | Resumo | Forte (várias fontes) |
| Strava | ARR de ~US$ 500 mi divulgado na rodada de 2025. Outras fontes dão US$ 415 mi de receita em 2025. **Estimativa** Sacra: ~90% da receita vem de assinatura (dado de 2023); o resto é parceria de evento, anúncio e venda de dado agregado a cidades | [Sacra](https://sacra.com/c/strava/); [Latka](https://getlatka.com/companies/strava) | Resumo | Média (números divergem) |
| Strava | 150 a 180 mi de usuários registrados. Número de pagantes nunca divulgado. **Estimativa** de terceiros: 6 mi+ pagantes | [IPOX](https://www.ipox.com/ipox/ipox-watch-strava); [Business of Apps](https://www.businessofapps.com/data/strava-statistics/) | Resumo | Fraca |
| Strava | Pedido confidencial de IPO (S-1) em jan/2026. Até jul/2026 não havia S-1 público | [SiliconANGLE, 08/01/2026](https://siliconangle.com/2026/01/08/strava-makes-confidential-ipo-filing-amid-subscription-revenue-growth/); [SGI Europe](https://www.sgieurope.com/financial/strava-files-for-ipo-as-fitness-app-capitalizes-on-growth/118936.article) | Resumo | Média |
| UTR Sports | Captação de ~US$ 2 mi (agregador). Faixa de receita US$ 10–25 mi (agregador, sem metodologia). Fusão/aquisição com PicklePlay em 04/12/2024 | [Tracxn](https://tracxn.com/d/companies/utr-sports/__rmW8Af-luvvIUvlVwUk5OnKajeKvEwfyVO2RoxkMegA); [PitchBook](https://pitchbook.com/profiles/company/150267-70) | Resumo | Fraca |
| DUPR | US$ 8 mi em 24/01/2024; Andre Agassi, David Kass e Raine Ventures ficam com o controle. Avaliação não divulgada | [Blog DUPR](https://www.dupr.com/post/andre-agassi-david-kass-and-raine-ventures-acquire-controlling-interest-in-dupr-invest-dollar8m); [Pulse 2.0](https://pulse2.com/dupr-pickleball-rating-company-raises-8-million/) | Resumo | Forte (várias fontes) |

### Quem paga

O jogador. Em UTR Power Club, o clube pode pagar pelo jogador (B2B2C).

### O que o modelo exige do produto

| Exigência | Detalhe |
| --- | --- |
| **Entidades** | Usuário com estado de assinatura (plano, início, renovação, cancelamento, loja de origem). Direito de acesso (*entitlement*) por feature. Histórico de partidas longo o bastante para gerar estatística |
| **Features** | Uma camada paga distinta da grátis. Nos exemplos: estatística avançada, comparação com pares, relatórios, alertas, remoção de anúncio ou de taxa. Em UTR e Rankedin o pago também **revela dado de outros jogadores** (rating de todos, abas de perfil alheio) |
| **Operação** | Compra dentro do app passa pela Apple e Google (comissão da loja). Strava no Brasil aceita Pix fora da loja. Suporte a cobrança e cancelamento (reviews do Playtomic citam trial difícil de cancelar) |
| **Volume** | Depende de base grande: Strava tem 150 mi+ de registrados para uma fração pagante. Rating precisa de muitas partidas por jogador para ter valor |

### Riscos e sinais de tração

| Tipo | Sinal | Fonte |
| --- | --- | --- |
| Risco | Cobrar para remover uma taxa criada pela própria plataforma gera rejeição pública ("incredibly cynical") | [LinkedIn Playtomic, comentários](https://www.linkedin.com/posts/playtomic_premium-plan-unlimited-activity-6976110434793713665-mcFz) — Resumo |
| Risco | Tornar pago algo que era grátis (retrospectiva do Strava) gera reação | [TudoCelular](https://www.tudocelular.com/curiosidade/noticias/n244882/strava-cobra-assinatura-retrospectiva-ano-polemica.html) — Resumo |
| Risco | Em 2026 a UTR passou a empacotar viagem e vestuário no Power. Leitura possível: só analytics não sustentava o preço. **Inferência** (Fraca) | GlobeNewswire, 05/2026 |
| Tração | Strava: 80–90% de retenção de assinantes citada na rodada de 2025 | [IPOX](https://www.ipox.com/ipox/ipox-watch-strava) — Resumo |
| Tração | Preços baixos em raquete (DUPR+ US$ 29,99/ano; Rankedin €15,99/ano) sugerem disposição a pagar limitada em rating de nicho. **Inferência** (Fraca) | — |

---

## 2. Taxa sobre inscrição ou conveniência

A plataforma fica com uma parte de cada pagamento que passa por ela. Pode ser percentual, valor fixo, ou taxa de meio de pagamento com margem.

### Exemplos

| Plataforma | Taxa | Quem paga | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- | --- |
| **LetzPlay** (cobrança online) | Boleto R$ 3,00. Pix 1,5% com mínimo de R$ 3,00. Cartão R$ 1,70 + 2,51% (à vista; parcelado custa mais). Recorrência R$ 1,70 + 2,51%. Recebimento: boleto 1 dia útil, Pix na hora, cartão 30 dias | O organizador (arena, academia). O artigo **sugere repassar** a taxa ao aluno na mensalidade | [Ajuda LetzPlay — Características dos tipos de cobrança](https://help.letzplay.me/hc/pt-br/articles/360060415491-Caracter%C3%ADsticas-dos-tipos-de-cobran%C3%A7a-Boleto-Cart%C3%A3o-e-PIX) (sem data visível) | **Lida** | Forte (fonte primária) |
| LetzPlay (torneios) | Parte dos torneios cobra por Pix direto na chave do organizador, sem passar pela cobrança da plataforma | Jogador → organizador | [Torneio no LetzPlay (exemplo)](https://letzplay.me/torneiosnatanael/tourneys/37349) | Resumo | Média |
| **Tênis Integrado** | **R$ 9,00 por inscrição**, descontados do valor pago: encargos de intermediação da Info Esportes (administradora do Tênis Integrado) + emissão do boleto | Sai do valor da inscrição (a federação recebe o líquido). Na FET, a federação repassa 80% do líquido ao organizador da etapa | [Regulamento Beach Tennis FET 2025/26](https://tenis-integrado-prod.s3.amazonaws.com/sync-prod/id48142/anexos/anexo_1756267934.pdf) | **Lida** | Média (uma federação; outras podem ter outro valor) |
| Tênis Integrado | Sobre inscrição FET de R$ 119–199, os R$ 9 equivalem a 4,5%–7,6% (**cálculo**) | — | idem | Cálculo | — |
| **Sympla** | 10% de taxa de serviço + 2%–2,5% de processamento. Mínimo R$ 3,99 para ingresso até R$ 39,90. O organizador escolhe repassar ou absorver os 10%; o processamento não pode ser repassado | Comprador ou organizador | [Sympla — Quanto custa](https://produtores.sympla.com.br/quanto-custa/); [Termos — Taxa de serviço](https://termos-e-politicas.sympla.com.br/hc/pt-br/articles/360048945791-13-Taxa-de-servi%C3%A7o) | Resumo | Média |
| **Ticket Sports** | Percentual não confirmado nesta pesquisa. O DISCOVERY.md registrou 8–10% em um evento não-BT. A ajuda descreve o que a taxa cobre (antifraude, e-mails, suporte) | Atleta | [Ajuda Ticket Sports](https://ajuda.ticketsports.com.br/hc/pt-br/articles/12461706802331-O-que-%C3%A9-taxa-de-servi%C3%A7o-conveni%C3%AAncia-comodidade) | Resumo | Fraca |
| E-inscrição / Atletis (inscrição esportiva BR) | 6,9% / 7,99% | Atleta ou organizador | [E-inscrição](https://blog.e-inscricao.com/o-que-esta-incluso-na-taxa-da-e-inscricao/); [Atletis](https://www.atletis.com.br/taxa-de-servico-da-atletis) | Resumo | Média |
| **Rankedin** | Taxa do Stripe + **1%** Rankedin sobre pagamento online de inscrição | Organizador | [rankedin.com/en/pricing](https://www.rankedin.com/en/pricing) | **Lida** | Forte |
| **PickleballBrackets** (Pickleball Inc) | US$ 5 por evento por jogador (máx. US$ 10) no amador; US$ 25 por evento no pro. US$ 25 de setup por torneio novo. Cobrado via Stripe no ato da inscrição, separado do valor do organizador | Jogador (taxa de serviço); organizador (setup) | [FAQ Pickleball Play Solutions, 30/04/2024](https://pickleballplaysolutions.wordpress.com/2024/04/30/faqs-new-pickleball-brackets-player-service-fee-collection-process/); [pickleball.com docs](https://pickleball.com/docs/en/72000615191-tournament-pricing) | Resumo | Média |
| **DUPR** (software de torneio próprio) | 10% das inscrições quando o organizador usa o software do DUPR. Enviar resultado de outro software é grátis | Organizador | [Pickleball518 FAQ](https://www.pickleball518.com/pickleball518-dupr-faq/) | Resumo | Fraca (fonte de terceiro) |
| **UTR Verified Fee** | Valor não encontrado. Assinante Power não paga | Jogador | [UTR — Verified events](https://www.utrsports.net/blogs/news/utr-verified-events-play-tennis-tournaments-save-money) | Resumo | Média (existência); valor ausente |
| **Playtomic** (taxa de serviço) | Varia por país. Exemplo em ajuda: €0,29 sobre reserva de €10 (~2,9%, **cálculo**). Relato de usuário: "~€1 por jogador" por partida | Jogador | [Ajuda Playtomic — Service Fee](https://playerhelp.playtomic.com/hc/en-gb/articles/19831779272337-Service-Fee); [Reddit r/padel](https://www.reddit.com/r/padel/comments/1c505x1/review_of_playtomic_after_3_months_of_using/) | Resumo | Média |
| **MATCHi** | 4% sobre reserva de quadra e atividade, com mínimo e máximo por país. Não incide sobre mensalidade, pacote ou partida pública | Jogador | [MATCHi Players — Service fee](https://matchiplayers.zendesk.com/hc/en-gb/articles/21632070063517-Service-fee) | Resumo | Média |
| **Torneio Já** | Não encontrado. Usado no Circuito Mormaii de BT e em circuitos do PR e SC | — | [torneioja.com.br/sobre](https://torneioja.com.br/sobre/) | Resumo | — |

### Valores de inscrição que servem de base (BT, Brasil)

| Contexto | Valor | Fonte | Leitura |
| --- | --- | --- | --- |
| CBT nacional 2026 | R$ 157 (com taxa anual paga) ou R$ 247 | [Regulamento CBT BT 2026](https://tenis-integrado-prod.s3.amazonaws.com/sync-prod/id22798/anexos/anexo_1768245583.pdf) | **Lida** (reconfirmado) |
| FET (ES) 2025/26 | R$ 119–199 filiado; R$ 139–219 avulso | Regulamento FET 2025/26 (link acima) | **Lida** |
| Arenas no LetzPlay | R$ 50–80 por categoria, com desconto na 2ª e 3ª inscrição | [Torneios LetzPlay](https://letzplay.me/torneiosnatanael/tourneys/37349) | Resumo |

### Quem paga

O jogador paga a inscrição. A taxa sai do jogador (quando repassada) ou do organizador (quando absorvida).

### O que o modelo exige do produto

| Exigência | Detalhe |
| --- | --- |
| **Entidades** | Organizador com conta de recebimento (subconta, *split*). Competição com preço por categoria e regras de desconto. Inscrição ligada a pagamento, com status (pendente, pago, estornado). Em duplas, **pagamento por atleta**: no Tênis Integrado a inscrição só confirma quando os dois atletas pagam |
| **Features** | Checkout no app. Split entre plataforma e organizador. Reembolso e estorno. Conciliação automática ("a baixa é dada pelo próprio sistema", LetzPlay) |
| **Operação** | Gateway de pagamento (LetzPlay usa boleto, Pix e cartão; Rankedin e PickleballBrackets usam Stripe). Prazo de repasse (cartão em 30 dias). Suporte a disputa e devolução. Obrigação fiscal |
| **Volume** | A receita é proporcional ao volume transacionado. LetzPlay declara R$ 3,5 bi "gerenciados" (home, lida em 25/09/2026) |

### Riscos e sinais de tração

| Tipo | Sinal | Fonte |
| --- | --- | --- |
| Risco | **Bypass por Pix direto.** Torneios no LetzPlay recebem Pix na chave do organizador, fora da plataforma | Resumo de páginas de torneio |
| Risco | Taxa de conveniência é tema jurídico no Brasil. O STJ revisou o entendimento sobre abuso da taxa em ingressos online (2020) | [STJ, 15/10/2020](https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/15102020-STJ-readequa-entendimento-sobre-abuso-da-taxa-de-conveniencia-em-venda-de-ingressos-pela-internet.aspx) — Resumo |
| Risco | Taxa fixa pesa mais em inscrição barata. R$ 3 sobre R$ 50 = 6%; sobre R$ 199 = 1,5% (**cálculo**) | LetzPlay (lido) |
| Tração | PickleballTournaments (Pickleball Inc) hospedou 4.500 torneios e 2.000 temporadas de liga em 2025 | [pickleball.com, 05/2026](https://pickleball.com/industry/apollo-sports-capital-leads-landmark-225-million-investment-in-pickleball-inc) — Resumo |
| Tração | Federações brasileiras já cobram pelo Tênis Integrado há anos, com taxa embutida | Regulamento FET (lido) |

---

## 3. SaaS para organizador ou arena

A arena, o clube, a liga ou a federação paga mensalidade pelo sistema. Muitas vezes vem junto com a taxa de pagamento (modelo 2).

### Exemplos

| Produto | Preço | O que inclui | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- | --- |
| **Playtomic Manager** | Standard US$ 119/mês; Professional US$ 179; Champion US$ 249; Master US$ 349 (sem imposto). Mensal ou anual | Standard: agenda, clientes, pagamentos, partidas, torneios, relatórios. Professional: POS, carteira, categorias de usuário. Champion: ligas, professores, cursos, aulas privadas, API, campanhas. "6.700 clubes" | [playtomic.com/pricing](https://playtomic.com/pricing) (cache de 23/09/2026) | **Lida** | Forte |
| Playtomic Manager (antes) | O DISCOVERY.md registrou €59–119/mês. Agregadores citam "a partir de US$ 38". A tabela lida acima é mais cara. Pode ser mudança de preço ou diferença de região | — | Resumo | Fraca |
| **Rankedin** (organizador) | Torneio básico grátis. *Premium Tournament*: €14,90 (até 24 jogadores), €29,90 (até 48), €59,90 (ilimitado). *Pro Federation*: US$ 5/mês (até 1.000 membros), US$ 49 (até 10 mil), US$ 99 (até 50 mil). Suporte premium US$ 200/ano | Premium: sem anúncio, e-mail a participantes, notificação em tempo real, placar ao vivo com e-árbitro, **vídeo ao vivo SportCam**. Federação: licença de filiado validada na inscrição | [rankedin.com/en/pricing](https://www.rankedin.com/en/pricing) | **Lida** | Forte |
| **CourtReserve** | Plano Start US$ 99/mês após a mudança de preço. Antes: US$ 25/mês base + US$ 5 por quadra e por professor | Reserva, sócios, professores ilimitados | [CourtReserve — Pricing update](https://courtreserve.com/pricing-update/); [Capterra](https://www.capterra.com/p/152562/CourtReserve/pricing/) | Resumo | Média |
| **MATCHi** | Não encontrado. Modelo descrito como assinatura do local + taxa por reserva | Reserva e comunidade | [Tracxn](https://tracxn.com/d/companies/matchi/__mw-LGH9DUPomI519LP2DCN0AfjacHyaTES9dVbD4O3M) | Resumo | Fraca |
| **LetzPlay** (perfil de gestão) | Não público. Contratação por "Solicitar perfil de gestão" | Clientes, agenda, aulas e professores, locação online, day use, rankings e barragens, torneios, financeiro, loja e lanchonete, automações, relatórios | [letzplay.me/home](https://letzplay.me/home) | **Lida** | Forte (escopo); preço ausente |
| **BT Match** | Preço não encontrado. Dois planos: "Torneios" e "Arena Completa". Mensal, sem fidelidade, 15 dias grátis. Diz ter 500+ arenas. O site devolveu 404 em 25/09/2026 | Quadras, reservas, aulas, clientes, POS, financeiro, torneios com página pública e pagamento integrado | [btmatch.com.br](https://btmatch.com.br/) | Resumo | Média |
| **Arena Online** | R$ 147/mês (lançamento; cheio R$ 197) no plano até 3 quadras | Reserva, financeiro, alunos, torneios e "rachões", dashboard | [arenaonline.app.br](https://arenaonline.app.br/) | Resumo | Média |
| **Tênis Integrado** (federação) | Plano para federação não encontrado. A receita visível é a taxa por inscrição (modelo 2) | Torneios, rankings, filiação, cursos | [tenisintegrado.com.br](https://www.tenisintegrado.com.br/) | Resumo | Fraca |
| **Matchpoint (TPC)** | Não encontrado. Vende app white-label por arena (ex.: "Arena Santista BT", "Arena FSA Beach Tennis" publicados com o pacote `es.tpc.matchpoint`) | Gestão + app do jogador com a marca da arena | [Google Play — Arena Santista BT](https://play.google.com/store/apps/details?id=es.tpc.matchpoint.appclient.arenasantistabt&hl=pt_BR); [tpcmatchpoint.com](https://tpcmatchpoint.com/pt-br/index.html) | Resumo | Média |

### Números financeiros de referência

| Empresa | Número | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- |
| Playtomic | Rodada de US$ 70 mi (€65 mi) em mar/2025: €55 mi de equity + €10 mi de dívida (Santander) | [SGI Europe](https://www.sgieurope.com/corporate/playtomic-raises-70m-in-funding-round/113807.article); [Xataka](https://www.xataka.com/empresas-y-economia/raquetazo-playtomic-startup-espanola-levanta-65-millones-euros-se-prepara-para-conquistar-eeuu) | Resumo | Forte (várias fontes) |
| Playtomic | Rodada comunitária no Crowdcube: €5,1 mi, 4.600 novos acionistas (dez/2025) | [Interempresas](https://www.interempresas.net/Material-deportivo/617904-Playtomic-cierra-su-ronda-comunitaria-captando-5-1-millones-4600-nuevos-accionistas.html); [Emprendimiento, 12/2025](https://emprendimiento.com.es/2025/12/playtomic-asegura-mas-de-51-millones-de-euros-en-nueva-ronda-de-financiacion/) | Resumo | Forte |
| Playtomic | Até 25/09/2025: €29 mi de receita líquida (+38% a/a); €346 mi transacionados (+51% a/a). Projeção de €31 mi líquidos no ano. 4,7 mi de jogadores, 6.000 clubes, 66 países | [Pitch no Crowdcube, 11/2025](https://www.crowdcube.com/companies/playtomic/pitches/qrMYkb); [2Playbook](https://www.2playbook.com/mas-deporte/playtomic-llama-puerta-pequeno-inversor-abre-ronda-10-millones-en-crowdcube_20469_102.html) | Resumo | Média |
| Playtomic | Receita líquida ÷ volume transacionado ≈ 8,4% (**cálculo**; a receita líquida inclui SaaS, então não é take rate puro) | idem | Cálculo | Fraca |
| Playtomic | 1 mi de usuários ativos por mês (case do Stripe, sem data clara) | [Stripe](https://stripe.com/customers/playtomic) | Resumo | Média |
| CourtReserve | US$ 54 mi de investimento de crescimento (Mainsail Partners), out/2025. 2.000+ clubes | [Business Wire, 21/10/2025](https://www.businesswire.com/news/home/20251021345748/en/CourtReserve-Secures-a-$54-Million-Growth-Investment-from-Mainsail-Partners-to-Accelerate-Innovation-in-Racquet-Paddle-Club-Software) | Resumo | Forte |
| MATCHi | Série B de US$ 24 mi (jun/2021). Adquirida pela Eversports em 25/03/2026 | [Tracxn](https://tracxn.com/d/companies/matchi/__mw-LGH9DUPomI519LP2DCN0AfjacHyaTES9dVbD4O3M/funding-and-investors); [PitchBook](https://pitchbook.com/profiles/company/92060-65) | Resumo | Média |
| LetzPlay | Home: +9 mil locais e gestores; +2,08 mi jogadores; +10,57 mi partidas; +531 mil competições; +55 mi aulas e locações; R$ 3,5 bi gerenciados. Números autodeclarados, sem data de corte | [letzplay.me/home](https://letzplay.me/home), lida em 25/09/2026 | **Lida** | Média (autodeclarado) |

### Quem paga

A arena, o clube, a liga ou a federação.

### O que o modelo exige do produto

| Exigência | Detalhe |
| --- | --- |
| **Entidades** | Organização (arena, clube, liga, federação, circuito) como dona de dados. Membros e papéis (gestor, recepção, professor). Quadras, horários, aulas, pacotes, planos de sócio. Competições pertencentes à organização. Na federação: filiação com validade |
| **Features** | Painel de gestão (web). Reserva, agenda, financeiro, POS, relatórios. Motor de torneio e ranking configurável. Página pública da organização. Validação de filiado na inscrição (Rankedin Pro Federation) |
| **Operação** | Venda consultiva ("solicitar perfil", demo), onboarding, suporte com SLA (Playtomic vende tempo de resposta de 48 h a 4 h por plano). Migração de dados de outro sistema |
| **Volume** | Receita por conta, não por jogador. Preço sobe com quadras, membros ou módulos (CourtReserve, Rankedin, Arena Online) |

### Riscos e sinais de tração

| Tipo | Sinal | Fonte |
| --- | --- | --- |
| Risco | Mercado brasileiro fragmentado: BT Match, Arena Online, Partiu Play, Arena Manager, Effect Sports, Atacante, ArenaTech, Sistema de Agenda, EsmeClub, Matchpoint. Muitos com preço de entrada abaixo de R$ 200/mês | Resumos de busca (links na seção) |
| Risco | Consolidação: MATCHi comprada pela Eversports (2026); UTR + PicklePlay (2024) | Tracxn, PitchBook |
| Tração | Capital privado entrando em SaaS de raquete: CourtReserve US$ 54 mi (2025); Playtomic US$ 70 mi (2025) | Acima |
| Tração | LetzPlay declara 9 mil+ locais e gestores | Home (lida) |

---

## 4. Taxa de federação ou filiação para pontuar

O atleta paga uma anuidade à entidade. Sem ela, os pontos não contam para o ranking oficial. É uma "assinatura" cobrada pela federação, não pelo app.

### Exemplos

| Entidade | Valor | Regra | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- | --- |
| **CBT** (nacional, BT) | R$ 300 (01/01 a 30/06/2026) ou R$ 200 (01/07 a 31/12/2026). Válida até 31/12/2026 | Pontos de torneio disputado sem a taxa paga não contam. Sem pontuação retroativa. Inscrição mais cara sem a taxa (R$ 247 × R$ 157) | [Regulamento CBT BT 2026](https://tenis-integrado-prod.s3.amazonaws.com/sync-prod/id22798/anexos/anexo_1768245583.pdf) | **Lida** | Forte |
| **FET** (Espírito Santo) | R$ 109 até 31/12/2025; R$ 89 para filiação de 01/08 a 31/12/2025 | Só filiado em dia pontua no ranking estadual. Pagamento após o início do torneio não tem efeito. Boleto emitido pelo Tênis Integrado. Filiado tem prioridade na chave | [Regulamento FET 2025/26](https://tenis-integrado-prod.s3.amazonaws.com/sync-prod/id48142/anexos/anexo_1756267934.pdf) | **Lida** | Forte |
| **FCTBT** (SC) | R$ 160/ano | — | DISCOVERY.md (lido na época) | — | Forte |
| **FPT** (São Paulo) | Anuidade 2026 de R$ 110 a R$ 250 por categoria. Não ficou claro quais valores são de BT | — | [FPT — Anuidade 2026](https://www.tenispaulista.com.br/anuidade-fpt/) | Resumo | Fraca |
| **CBBT** | Valor não encontrado. Site tem nota oficial sobre desfiliação e posicionamento institucional, não lida | — | [cbbtennis.com.br](https://cbbtennis.com.br/nota-oficialdesfiliacao-e-posicionamento-institucional/) | Resumo | — |
| **ITF IPIN** (Beach Tennis World Tour) | US$ 40 | Registro obrigatório para jogar o circuito ITF | [ITF — IPIN FAQ, jun/2026](https://www.itftennis.com/media/16702/ipin-guide-faq-june-2026.pdf) | Resumo | Média |

### Quem paga

O atleta, à federação. A plataforma (Tênis Integrado) processa e cobra a taxa de boleto.

### O que o modelo exige do produto

| Exigência | Detalhe |
| --- | --- |
| **Entidades** | Filiação: atleta × entidade × período de validade × status de pagamento. Preço por janela de data (1º e 2º semestre). Isenções (campeões, professores, estudantes na FET) |
| **Features** | Checagem de filiação na inscrição. Preço diferente para filiado e avulso. Pontuação condicionada à filiação **no momento** do torneio (sem retroativo) |
| **Operação** | Integração com a entidade dona do ranking oficial. Regulamento muda todo ano |
| **Volume** | Pequeno em número de entidades (1 nacional + ~27 estaduais), grande em atletas por entidade |

### Riscos e sinais de tração

| Tipo | Sinal | Fonte |
| --- | --- | --- |
| Risco | Duas entidades nacionais (CBT e CBBT) disputam o BT. Cada uma tem ranking e regulamento | DISCOVERY.md; site CBBT |
| Risco | A receita é da federação. A plataforma ganha só pela intermediação | Regulamento FET (lido) |
| Tração | O modelo existe e é aceito: federações cobram anuidade há anos e amarram o ranking a ela | Regulamentos CBT e FET (lidos) |

---

## 5. Patrocínio e mídia

Marca paga por exposição: naming de circuito, placa em evento, atleta patrocinado, anúncio no app ou na transmissão.

### Exemplos

| Caso | O que se sabe | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- |
| **Copa do Mundo de BT (ITF, Brasil)** | 11 patrocinadores: Vivo, Eztec, Stanley, Superbock, Itaquadra, Probiótica, Mormaii, RAM, Sorvetes Jundiá, Corote, Guaraviton. Investimento de ~R$ 3 mi no evento. Premiação de US$ 35 mil | [Exame](https://exame.com/marketing/stanley-vivo-e-corote-copa-do-mundo-de-beach-tennis-fecha-com-11-patrocinadores/); [Máquina do Esporte](https://maquinadoesporte.com.br/beach-tennis/copa-do-mundo-de-beach-tennis-atrai-marcas-e-ja-tem-11-patrocinadores-fechados/) | Resumo | Forte (duas fontes) |
| Copa do Mundo de BT 2026 | GWM Brasil anunciada como patrocinadora oficial | [GWM, 2026](https://www.gwmmotors.com.br/pt/media-center/news/2026/gwm-brasil-e-patrocinadora-oficial-da-copa-do-mundo-de-beach-tennis) | Resumo | Média |
| Vivo | Patrocinadora da Copa do Mundo, renovada em nov/2024 | [MKT Esportivo, 11/2024](https://www.mktesportivo.com/2024/11/vivo-seguira-como-patrocinadora-da-copa-do-mundo-de-beach-tennis/); [Meio & Mensagem](https://www.meioemensagem.com.br/marketing/vivo-patrocina-beach-tennis-world-cup-no-brasil) | Resumo | Forte |
| **Circuito Mormaii de BT** | Naming de circuito com patrocínio master da Mormaii. Roda no Torneio Já e também tem etapas no LetzPlay | [Prefeitura de Bombinhas](https://bombinhas.sc.gov.br/noticia-478596/); [LetzPlay — Mormaii Open](https://letzplay.me/praialab/tourneys/23583) | Resumo | Média |
| Atleta patrocinado | Prudential do Brasil patrocina Sophia Chow | [Prudential](https://www.prudential.com.br/imprensa/releases/prudential-do-brasil-patrocina-sophia-chow-uma-das-melhores-atletas-no-ranking-mundial-de-beach-tennis) | Resumo | Média |
| Marcas de equipamento | Heroe's (embaixador Mattia Spoto, raquete Heroe's × Senna), Drop Shot, Mormaii, Ama Sports, Shark, Kona. Sexy Brand (EUA) faz a bola S-Ball, homologada ITF. Nenhum valor de contrato encontrado | [Heroe's Brasil](https://www.heroesbrandbrasil.com/o-projeto/); [Sexy Brand](https://www.sexybrand.com.br/); [Mundo do Marketing](https://mundodomarketing.com.br/moda-da-vez-beach-tennis-tem-grande-potencial-de-negocio-para-as-marcas) | Resumo | Média (existência); valores ausentes |
| **Mídia — TV aberta** | RedeTV! com direitos exclusivos em TV aberta dos maiores torneios internacionais de BT; fases preliminares no RedeTV! Go e no YouTube (anúncio de out/2025) | [O Tempo, 27/10/2025](https://www.otempo.com.br/opiniao/fabio-costa/2025/10/27/redetv-anuncia-transmissao-dos-maiores-campeonatos-do-circuito-internacional-de-beach-tennis) | Resumo | Média |
| **Mídia — streaming nicho** | Programa PlayBT: canal oficial das Sand Series e de grandes torneios ITF; recorde de 37 mil dispositivos simultâneos | [programaplaybt.com](https://programaplaybt.com/) | Resumo | Média |
| **Ads no app** | Rankedin: plano PRO remove anúncios; torneio Premium remove anúncio da página; produto "Sponsors" põe logo no topo das páginas por esporte ou país. Clubes e federações exibem "Partners Logo" | [rankedin.com/en/pricing](https://www.rankedin.com/en/pricing) | **Lida** | Forte |
| Strava | Desafios patrocinados por marcas são receita secundária (**estimativa** Sacra) | [Sacra](https://sacra.com/c/strava/) | Resumo | Média |
| Pickleball Inc (referência) | PPA Tour + MLP: US$ 30 mi de receita de patrocínio em 2025, de US$ 60 mi de receita combinada | [CNBC, 01/05/2026](https://www.cnbc.com/2026/05/01/apollo-sports-capital-tom-dundon-pickleball-investment.html); [pickleball.com](https://pickleball.com/industry/apollo-sports-capital-leads-landmark-225-million-investment-in-pickleball-inc) | Resumo | Forte (várias fontes) |
| Mercado de BT | ~US$ 140 mi de mercado no Brasil; patrocínio de eventos acima de R$ 10 mi em 2023 (já no DISCOVERY.md) | [Máquina do Esporte](https://maquinadoesporte.com.br/beach-tennis/beach-tennis-atrai-elite-ao-pais-e-ve-aumento-de-175-no-numero-de-praticantes-em-um-ano/) | Resumo | Fraca (fonte primária não identificada) |

### Quem paga

A marca. Paga ao organizador do evento, ao atleta, à emissora ou à plataforma com audiência.

### O que o modelo exige do produto

| Exigência | Detalhe |
| --- | --- |
| **Entidades** | Patrocinador e peça (logo, banner) ligados a competição, circuito, página, esporte ou país. Circuito como entidade acima do torneio (naming vale para várias etapas). Atleta com vínculo de patrocínio |
| **Features** | Espaços de exibição (topo de página, página de torneio, transmissão). Remoção de anúncio como benefício pago (Rankedin). Relatório de audiência para vender espaço |
| **Operação** | Venda comercial direta. Medição de audiência. Aprovação de peças |
| **Volume** | Precisa de audiência concentrada: eventos grandes (Copa do Mundo) ou base grande de usuários ativos |

### Riscos e sinais de tração

| Tipo | Sinal | Fonte |
| --- | --- | --- |
| Tração | Marcas de fora do esporte (Vivo, Stanley, GWM, Prudential, Corote) já compram BT | Acima |
| Tração | Transmissão chegou à TV aberta (RedeTV!, 2025) | O Tempo |
| Risco | O dinheiro de patrocínio vai para o evento de elite. Não há evidência de patrocínio relevante em ranking amador de arena. **Inferência** (Fraca) | — |
| Risco | Nenhum valor de contrato de marca de equipamento é público | — |

---

## 6. Marketplace

A plataforma intermedeia a venda de algo de terceiros e fica com uma parte: quadra, aula, equipamento ou vídeo.

### Exemplos

| Tipo | Caso | O que se sabe | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- | --- |
| Reserva de quadra | Playtomic | Taxa de serviço ao jogador (varia por país) + mensalidade do clube. €346 mi transacionados até set/2025 | Seções 2 e 3 | Resumo | Média |
| Reserva de quadra | MATCHi | 4% de taxa ao jogador | Seção 2 | Resumo | Média |
| Reserva de quadra | LetzPlay | "Locações online" e "Clubinho e Day Use" na gestão; taxa de meio de pagamento na cobrança online | [letzplay.me/home](https://letzplay.me/home); ajuda LetzPlay | **Lida** | Forte (existência) |
| Aulas e professores | Bora Pro Play | Marketplace de arenas e professores (BT, vôlei de praia, futevôlei): inscrição em aula, gestão de alunos, financeiro do professor | [App Store — Bora Pro Play](https://apps.apple.com/us/app/bora-pro-play/id6470311831) | Resumo | Média |
| Aulas e professores | Arena Easy; Matchpoint (app do professor); BT Match (módulo professores) | Ferramenta para professor, sem marketplace aberto | [App Store — Arena Easy](https://apps.apple.com/br/app/arena-easy/id6743369382); [Matchpoint](https://tpcmatchpoint.com/pt-br/index.html) | Resumo | Média |
| Aulas | Playtomic Manager | Aulas privadas, cursos e professores no plano Champion; taxa de serviço também incide em aula e curso | Pricing (lido); Service Fee (resumo) | Lida + Resumo | Forte |
| Vídeo e replay | PlaySight SmartCourt | Jogador escaneia QR, grava e compra os melhores momentos no app. Preço "abaixo de €5", varia por clube e país | [Broadcast](https://www.broadcastnow.co.uk/tech-innovation/playsight-brings-ai-highlights-to-racquet-sports/5199271.article); [PlaySight — Padel](https://playsight.com/our-sports/padel/) | Resumo | Média |
| Vídeo ao vivo | Rankedin SportCam | Vídeo ao vivo incluído no torneio Premium (€14,90–59,90 por torneio) | [rankedin.com/en/pricing](https://www.rankedin.com/en/pricing) | **Lida** | Forte |
| Vídeo | Playtomic | Nenhuma oferta própria de vídeo encontrada nesta pesquisa | — | — | — |
| Equipamento | Pickleball Inc | Dona do varejista Pickleball Central, junto com torneio, rating (participação no DUPR) e mídia | [pickleball.com, 05/2026](https://pickleball.com/industry/apollo-sports-capital-leads-landmark-225-million-investment-in-pickleball-inc) | Resumo | Média |
| Equipamento | LetzPlay | Módulo "Loja e Lanchonete" para a arena vender. Não é marketplace do jogador | [letzplay.me/home](https://letzplay.me/home) | **Lida** | Forte |
| Equipamento | Marcas de BT | Vendem por e-commerce próprio (Heroe's) e por varejistas (Pró Spin, Dalfer). O DISCOVERY.md citou o marketplace SO Raquetes | [Heroe's](https://heroesbrandsport.com.br/shop/); [Pró Spin](https://www.prospin.com.br/raquetes/raquete-de-beach-tenis) | Resumo | Média |
| Afiliado | UTR Power | Parceria de viagem (Global Privileges Plus, US$ 100 em créditos) e Fabletics (até 50% de desconto, EUA) como benefício da assinatura | GlobeNewswire, 05/2026 | Resumo | Média |

### Quem paga

O jogador compra. O vendedor (arena, professor, marca) paga a comissão, ou o jogador paga uma taxa de serviço por cima.

### O que o modelo exige do produto

| Exigência | Detalhe |
| --- | --- |
| **Entidades** | Oferta (quadra × horário, aula, pacote, produto, vídeo) com preço e vendedor. Pedido, pagamento, cancelamento com regra. Professor como perfil com agenda. Para vídeo: gravação ligada a partida, quadra e jogadores |
| **Features** | Busca e descoberta por local e horário. Checkout. Divisão de pagamento entre jogadores (Playtomic e MATCHi têm *split payment*). Avaliação de vendedor |
| **Operação** | Integração com a agenda real da arena (depende de a arena usar o sistema). Hardware para vídeo (câmeras na quadra). Estoque e logística para equipamento |
| **Volume** | Exige liquidez dos dois lados: muitas arenas com agenda online e muitos jogadores reservando. Playtomic tem 6.000+ clubes e 4,7 mi de jogadores |

### Riscos e sinais de tração

| Tipo | Sinal | Fonte |
| --- | --- | --- |
| Risco | No BT brasileiro, a marcação de jogo acontece no WhatsApp (CLAUDE.md, DISCOVERY.md). Reserva de quadra de jogo de ranking pode não passar pelo app | DISCOVERY.md |
| Risco | Reserva de quadra depende da arena usar o mesmo sistema. O mercado de SaaS de arena é fragmentado (seção 3) | — |
| Tração | Playtomic cresce volume transacionado a +51% a/a (set/2025) | Crowdcube, resumo |
| Tração | LetzPlay declara 55 mi+ de aulas e locações | Home (lida) |

---

## 7. Outros achados

| Modelo | Caso | O que se sabe | Fonte e data | Leitura | Força |
| --- | --- | --- | --- | --- | --- |
| **API de rating** | UTR Engage API | Parceiros aprovados sincronizam perfis e puxam rating em tempo real. Taxa de inscrição de US$ 250 (não reembolsável) para parceiros sem pré-requisito | [UTR Engage API](https://www.utrsports.net/pages/engage-api) | Resumo | Média |
| **Troca de dado com federação** | UTR × USTA Connect | Desde fev/2025, resultados de torneios e ligas da UTR vão para a USTA, e os da USTA seguem no rating UTR. WTN (ITF) e NTRP continuam exclusivos no jogo da USTA | [Tennis Industry, 02/2025](https://tennisindustrymag.com/news/2025/02/usta-adds-four-new-partner-organizations-to-usta-connect-platform/); [ZooTennis, 02/2025](http://tenniskalamazoo.blogspot.com/2025/02/itf-junior-rule-changes-for-2025-utr.html) | Resumo | Forte |
| Rating como padrão oficial | UTR foi rating oficial da ITA (universitário) até 2023; parceria com Tennis Channel desde 2018 | [Wikipedia — UTR](https://en.wikipedia.org/wiki/Universal_Tennis_Rating) | Resumo | Média |
| Rating grátis + ecossistema pago | DUPR | Clubes DUPR são grátis. Receita vem do DUPR+ e da taxa quando se usa o software próprio de torneio | Seções 1 e 2 | Resumo | Média |
| **Venda de dado agregado** | Strava (Metro) | Dado agregado vendido a cidades e planejadores urbanos (**estimativa** Sacra de composição de receita) | [Sacra](https://sacra.com/c/strava/) | Resumo | Média |
| **White-label** | Matchpoint (TPC); Arena Manager | App com a marca da arena publicado nas lojas. Arena Manager se apresenta como "white-label" | [Google Play](https://play.google.com/store/apps/details?id=es.tpc.matchpoint.appclient.arenasantistabt&hl=pt_BR); [arenamanager.com.br](https://arenamanager.com.br/) | Resumo | Média |
| White-label parcial | Rankedin Clubs/Federações | "Embed on your company website" | [rankedin.com/en/pricing](https://www.rankedin.com/en/pricing) | **Lida** | Forte |
| **Streaming de torneio** | Pickleball TV (Pickleball Inc); PlayBT; RedeTV!; Rankedin SportCam | Mídia própria acoplada ao circuito | Seção 5 | Resumo / Lida | Média |
| **Integração vertical** | Pickleball Inc | Circuito pro (PPA, MLP) + software de torneio (PickleballBrackets/Tournaments) + rating (participação no DUPR) + varejo + mídia + quadras. US$ 225 mi da Apollo e Dundon em mai/2026; avaliação de US$ 750 mi; US$ 315 mi captados no total; US$ 140 mi+ de receita combinada em 2025 | [CNBC, 01/05/2026](https://www.cnbc.com/2026/05/01/apollo-sports-capital-tom-dundon-pickleball-investment.html); [pickleball.com](https://pickleball.com/industry/apollo-sports-capital-leads-landmark-225-million-investment-in-pickleball-inc) | Resumo | Forte (várias fontes) |
| **Taxa de licença de membro** | Rankedin Pro Federation | Federação paga por faixa de membros para validar filiação na inscrição | [rankedin.com/en/pricing](https://www.rankedin.com/en/pricing) | **Lida** | Forte |

---

## 8. Tabela-resumo

| Modelo | Exigências no produto | Exemplos | Força da evidência |
| --- | --- | --- | --- |
| **1. Assinatura do jogador** | Estado de assinatura e *entitlements*; camada paga separada (estatística, comparação, relatórios, alertas); histórico longo; compra via loja | UTR Power (~US$ 10/mês), DUPR+ (US$ 29,99/ano), Rankedin PRO (€15,99/ano), Playtomic Premium (preço n/d), Strava (R$ 149,90/ano) | **Média** a **Forte** para existência e preço. **Fraca** para receita em raquete: nenhuma empresa de raquete publica quanto vem de assinatura |
| **2. Taxa sobre inscrição/conveniência** | Organizador com conta de recebimento; split; inscrição com status de pagamento por atleta; estorno; conciliação | LetzPlay (Pix 1,5% mín. R$ 3), Tênis Integrado (R$ 9/inscrição), Rankedin (+1% sobre Stripe), PickleballBrackets (US$ 5/evento), Sympla (10%), DUPR (10%) | **Forte** para LetzPlay, Tênis Integrado e Rankedin (fonte primária lida). **Média** para o resto |
| **3. SaaS para organizador/arena** | Organização como dona dos dados; papéis; quadras, aulas, financeiro; motor de competição configurável; venda consultiva e suporte | Playtomic Manager (US$ 119–349/mês), Rankedin (€14,90–59,90/torneio), CourtReserve (US$ 99/mês), Arena Online (R$ 147–197/mês), LetzPlay e BT Match (preço n/d) | **Forte** (várias fontes; capital privado entrando; preços lidos) |
| **4. Filiação para pontuar** | Filiação atleta × entidade × validade; checagem na inscrição; preço filiado × avulso; pontuação sem retroativo; integração com ranking oficial | CBT (R$ 300/ano), FET (R$ 109), FCTBT (R$ 160), ITF IPIN (US$ 40) | **Forte** (regulamentos lidos). A receita é da federação, não da plataforma |
| **5. Patrocínio e mídia** | Circuito acima do torneio; espaços de logo por página/competição; remoção de anúncio como benefício; medição de audiência | Copa do Mundo de BT (11 marcas, ~R$ 3 mi), Circuito Mormaii, Rankedin Sponsors, RedeTV!, PlayBT, PPA/MLP (US$ 30 mi em 2025) | **Forte** para eventos de elite. **Fraca** para ranking amador e ads em app de BT |
| **6. Marketplace** | Oferta com vendedor; checkout; split entre jogadores; integração com agenda da arena; hardware (vídeo) | Playtomic e MATCHi (reserva), Bora Pro Play (aulas), PlaySight (replay < €5), Rankedin SportCam, Pickleball Central (varejo) | **Média**. Tração forte em padel (Playtomic); pouca evidência de marketplace aberto no BT |
| **7. Outros** (API, dado, white-label, streaming, vertical) | API pública e contrato de parceiro; dado agregado; app com marca do cliente; embed; mídia própria | UTR Engage API (US$ 250 de adesão), UTR × USTA, Strava Metro, Matchpoint white-label, Pickleball Inc | **Média**. Casos isolados, fora do BT |

---

## 9. O que isso implica para a modelagem de dados

Descrição do que cada modelo pressupõe no esquema. Não é recomendação.

### Entidades que aparecem em vários modelos

| Entidade | Aparece em | O que os exemplos mostram |
| --- | --- | --- |
| **Organização** (arena, clube, liga, circuito, federação) | 2, 3, 4, 5, 6 | É quem recebe o dinheiro da inscrição, paga o SaaS, emite filiação e vende patrocínio. Nos exemplos, competição, quadra, aula e filiação pertencem a uma organização |
| **Circuito** (agrupador de etapas) | 3, 4, 5 | Naming (Circuito Mormaii), ranking anual e regulamento anual ficam acima do torneio. FET, CBT e Circuito Carioca operam assim |
| **Competição / etapa com preço** | 2, 3, 4 | Preço por categoria, por quantidade de categorias (desconto na 2ª e 3ª), e por status do atleta (filiado × avulso: R$ 157 × R$ 247 na CBT) |
| **Inscrição** com estado de pagamento | 2, 4 | Status (pendente, paga, estornada). Em duplas, o pagamento é por atleta e a inscrição só confirma com os dois pagos (Tênis Integrado) |
| **Filiação** (atleta × entidade × período) | 4, 7 | Validade por ano, preço por janela de data, isenções. A pontuação depende da filiação **na data do torneio**, sem retroativo (CBT, FET). Rankedin valida filiação na inscrição |
| **Pagamento / transação** | 1, 2, 6 | Meio (boleto, Pix, cartão, recorrência), taxa, prazo de repasse, destinatário. LetzPlay mostra custos diferentes por meio. Split entre plataforma e organizador (Rankedin, PickleballBrackets) e entre jogadores (Playtomic, MATCHi) |
| **Assinatura do jogador** | 1 | Plano, período, origem (loja), *entitlements*. Em UTR, a assinatura também zera uma taxa de outro modelo (Verified Fee). Em Playtomic, zera a taxa de serviço. Os dois modelos se tocam |
| **Patrocinador / peça** | 5 | Logo ligado a competição, circuito, página, esporte ou país (Rankedin) |
| **Oferta de marketplace** | 6 | Quadra × horário, aula, pacote, vídeo. Tem vendedor e preço próprios |
| **Gravação de vídeo** | 6, 7 | Ligada a partida, quadra e jogadores (PlaySight, SportCam) |

### Propriedades que os modelos pressupõem

| Propriedade | Modelos | Observação |
| --- | --- | --- |
| **Regras de pontuação e preço como dado da organização** | 3, 4 | Cada federação tem regulamento anual próprio (CBT, FET, FCTBT diferem em anuidade, preço e regra). Já registrado no DISCOVERY.md 4.2 |
| **Separar o jogador da identidade de pagamento** | 1, 2, 4 | O mesmo atleta paga anuidade a uma federação, inscrição a um organizador e (talvez) assinatura à plataforma. São recebedores diferentes |
| **Histórico por data efetiva** | 4 | Filiação e ranking dependem de "estava válido em tal data" |
| **Dado visível por nível de acesso** | 1 | UTR e Rankedin cobram para ver dado de **outros** jogadores (rating de todos, perfil completo). Isso pressupõe que a visibilidade de um campo possa variar por quem olha |
| **Rastreabilidade de volume** | 2, 3, 6 | Taxa sobre transação e prova de tração (Playtomic, LetzPlay "R$ 3,5 bi gerenciados") pressupõem registrar valor transacionado por organização |
| **Múltiplas organizações por jogador** | 3, 4, 6 | O jogador compete em arenas, circuitos e federações diferentes. No SaaS de arena isolado, ele tem uma conta por arena (DISCOVERY.md 2.2) |
| **Dado exportável** | 7 | API de rating (UTR Engage), troca com federação (USTA Connect) e embed (Rankedin) pressupõem identificador estável de jogador e de partida |

---

## Fontes lidas na íntegra

- [Ajuda LetzPlay — Características dos tipos de cobrança: Boleto, Cartão e PIX](https://help.letzplay.me/hc/pt-br/articles/360060415491-Caracter%C3%ADsticas-dos-tipos-de-cobran%C3%A7a-Boleto-Cart%C3%A3o-e-PIX)
- [letzplay.me/home](https://letzplay.me/home) (25/09/2026)
- [Regulamento Beach Tennis CBT 2026](https://tenis-integrado-prod.s3.amazonaws.com/sync-prod/id22798/anexos/anexo_1768245583.pdf)
- [Regulamento Beach Tennis FET 2025/26](https://tenis-integrado-prod.s3.amazonaws.com/sync-prod/id48142/anexos/anexo_1756267934.pdf)
- [Tutorial de inscrições no Tênis Integrado](https://tenis-integrado-prod.s3.amazonaws.com/sync-prod/id22798/anexos/anexo_1708519830.pdf) (pagamento por boleto, dupla só confirma com os dois pagos)
- [Playtomic Manager — Pricing](https://playtomic.com/pricing) (cache de 23/09/2026)
- [Rankedin — Pricing](https://www.rankedin.com/en/pricing) (cache de 23/09/2026)

As demais fontes foram vistas só por resumo de busca e estão marcadas assim em cada tabela.
