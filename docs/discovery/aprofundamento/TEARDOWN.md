# TEARDOWN.md — LetzPlay

Teardown do Ranketes e do LetzPlay atual (v10 e v11), fluxo por fluxo: onboarding, ranking, registro de resultado, confirmação, H2H e Finals, mais preço, público e posicionamento.

**Pesquisa feita em 25/09/2026.** Todas as páginas foram lidas na íntegra nessa data, salvo quando marcado "Resumo".

> **Sem decisões de produto.** Descreve o que os dois produtos declaram e mostram em público. Não diz o que o redesign deve copiar ou evitar.

---

## Limite do método

Não houve uso dos apps com conta. Tudo vem do que é **público**: site, lojas, help center, histórico de versões e páginas públicas de ranking e torneio (o LetzPlay deixa rankings e chaves abertos sem login). Por isso, este teardown mostra **o que cada produto promete e a regra que ele expõe**, não a experiência de tela dentro do app. Telas e fluxos visuais são tema da frente de referências visuais (outra issue), não desta.

---

## Resumo

- **O Ranketes é muito pequeno.** App iOS com **1 avaliação**, Android com **50+ downloads**, desenvolvedor pessoa física, só para iPhone, primeira versão com assinatura em 16/06/2026. O discurso cobre quase todas as lacunas do jogador competitivo, mas **não há evidência de uso**. Isso rebaixa o risco RS2 do `SINTESE.md` de "entrante ocupa o discurso" para "discurso sem base".
- **O próprio Ranketes se contradiz em preço e pontuação.** A home e a página de planos dizem que a conta de atleta é grátis "para sempre" e que competir é grátis. A página de atletas e a App Store vendem um **Atleta Full a R$ 49/ano** que libera H2H da temporada, estatística avançada e **participação em torneios**. A home diz "vitória vale 100, derrota 50"; o FAQ diz vitória de 80 a 250 e derrota de ~20%. São sinais de produto em ajuste, não necessariamente de má-fé.
- **O LetzPlay já tem, por configuração, a confirmação pelo adversário.** Num ranking de arena público, a regra diz: qualquer participante lança, o adversário é notificado para aprovar e, "caso não haja aprovação ou contestação", o sistema aprova sozinho em 24 horas. **O que acontece na contestação não está escrito**: cai em "casos omissos", resolvidos pela organização.
- **No LetzPlay, a conta dos pontos é pública mas não é explicada.** A aba "Sobre" mostra a tabela de pontos do organizador (vitória 100, derrota 60, W.O. −100, set +5). A aba "Classificação" mostra só o total. O total confere com a tabela (ex.: 7 vitórias, 2 derrotas e 7 sets = 855), mas **o jogador precisa fazer a conta sozinho**.
- **O LetzPlay atualiza devagar e está numa virada.** Entre 2021 e 2025 saíram 5 versões maiores; em agosto de 2026 saíram duas (v10 e v11), com "nova identidade" e "nova fase". O Ranketes lançou 15 versões entre junho e setembro de 2026.

---

## 1. Ranketes

### 1.1 Quem é e quanto usa

| Campo | Achado | Força | Fonte |
| --- | --- | --- | --- |
| Desenvolvedor | Pessoa física (mesmo nome nas duas lojas). Suporte por Gmail no Android | Forte (Lido) | [App Store](https://apps.apple.com/br/app/ranketes/id6770686808), [Google Play](https://play.google.com/store/apps/details?id=com.ranketes.app&hl=pt_BR&gl=BR) |
| App Store | **1 avaliação (5,0)**. Só iPhone. Idioma declarado: inglês. Compras no app: "Ranketes Atleta R$ 49,00" e "Ranketes Professor R$ 159,00" | Forte (Lido) | App Store |
| Google Play | **50+ downloads.** Sem nota. Atualizado em 29/07/2026. Classificação 18 anos | Forte (Lido) | Google Play |
| Ritmo | 15 versões de 16/06 a 25/09/2026 (1.1 a 1.7.8), quase todas "novas telas" e "correção de bugs". A 1.1 introduz a assinatura: "jogadores acessam ranking e estatísticas completas". A 1.2 traz "visitas guiadas para contas de atletas" | Forte (Lido) | Histórico de versões, App Store |
| Estágio | "Acesso antecipado · grátis para começar". Programa Fundador com setup grátis para arenas | Forte (Lido) | [Home](https://www.ranketes.com.br/) |
| Web | Funciona no navegador e pode ser adicionado à tela de início | Forte (Lido) | [Atletas](https://www.ranketes.com.br/atletas.html) |

### 1.2 Público e posicionamento

- **Quatro públicos:** atleta, professor, promoter (quem organiza torneio sem ter quadra) e clube/arena. Tênis e BT com **rankings separados**, em simples e duplas. (Lido, home.)
- **Mensagem central:** "O jogo acabou. Agora ele vale ranking." e "É isso que separa o Ranketes de um grupo de WhatsApp com print de placar." O concorrente declarado é o **WhatsApp**, não outro app. (Lido, atletas.)
- **Para o promoter**, a página descreve as dores do organizador em primeira pessoa: chave no papel, inscrição no direct, "Quando eu jogo?" "trinta vezes no sábado de manhã", placar perdido, nada para divulgar, torneio que "acaba e some". (Lido, [promoters](https://www.ranketes.com.br/promoters.html).) É marketing, mas é a descrição mais detalhada de dor de organizador de BT encontrada em fonte pública. Ver `ORGANIZADOR.md`.

### 1.3 Fluxo por fluxo

| Fluxo | O que o Ranketes declara | Força |
| --- | --- | --- |
| **Onboarding** | Conta grátis, sem cartão. Ficha por modalidade: **categoria autodeclarada** (Iniciante, C, B, A, PRO), mão dominante, backhand, tempo de prática. Localização opcional. "Visitas guiadas" desde a v1.2 | Forte (Lido) |
| **Ranking** | "Pontos do Circuito" por temporada (1º/jan a 31/dez), dentro da categoria que o jogador declarou. Mostra posição, retrospecto, pontos e **seta de subida ou queda desde a última atualização**. W.O. aparece. Os pontos **não mudam a categoria**: "Você diz o seu nível. O ranking diz a sua posição." | Forte (Lido) |
| **Pontuação** | Vitória por formato: partida comum ou desafio 80, Match Club 50, H2H 150, torneio 130 (grupos) e 180 (eliminatória), ranking 250. Derrota ~20% da vitória. **Vencer alguém bem acima no ranking multiplica o ganho em até 1,6×.** Ninguém perde pontos; a pontuação da temporada só cresce. Torneio vale ×2. A home, porém, diz "vitória 100, derrota 50" | Forte (Lido); inconsistente entre páginas |
| **Registro de resultado** | "Escolhe o adversário, digita os sets, envia. Menos de um minuto, ainda na quadra." | Forte (Lido) |
| **Confirmação** | O adversário valida; só então pontua. Se o adversário não tem conta, é convidado, e a partida "fica aguardando validação". **Não há regra publicada para recusa, contestação ou prazo** | Forte (Lido); a ausência é Forte |
| **Desafio** | Só dentro da própria categoria. Propõe dia e hora, o outro aceita, os dois recebem lembrete, o placar "já fica esperando" | Forte (Lido) |
| **H2H** | "Head to Head da temporada": vitórias de cada lado, sets, games e "a data em que o confronto virou". No plano Free, só o **último confronto**; a temporada inteira é do plano pago | Forte (Lido) |
| **Torneio** | Chave de 8, 16 ou 32; eliminatória simples ou dupla; grupos + mata-mata; cabeças de chave pelo ranking; categorias por gênero, idade (até 70+) e nível. No dia: agenda com **limite de jogos por atleta**, cada um vê a própria hora, **check-in**, **W.O. automático** para quem não aparece, resultado "confirmado pelos dois lados", pódio automático | Forte (Lido), [promoters](https://www.ranketes.com.br/promoters.html) |
| **Finals** | Citado como formato ("finais entre os melhores da temporada"). Sem regra de corte, data ou critério | Média (Lido, só a menção) |
| **Match Club** | Rachão: sorteio sem repetir dupla, "Reis da Quadra" ou escalação manual. 50 pontos por vitória, 10 por participação | Forte (Lido) |
| **Encerramento da temporada** | Top 10 da categoria ganha **selo permanente**; campeões entram no "Memorial do Ano". Histórico não se apaga | Forte (Lido) |
| **Social** | Feed, conquistas, medalhas, perfil público, atletas por distância. Feed e "medalhas exclusivas" aparecem no plano pago na página de atletas | Forte (Lido) |

### 1.4 Preço (lido em 25/09/2026)

| Plano | Preço | O que diz | Fonte |
| --- | --- | --- | --- |
| Atleta Free | Grátis | Ranking, registro, desafios, H2H do último confronto, estatísticas básicas, perfil | [Atletas](https://www.ranketes.com.br/atletas.html) |
| Atleta Full | **R$ 49/ano** (de R$ 79) | H2H da temporada, estatística avançada, **participação em torneios**, criação de torneios e rankings, feed e medalhas | [Atletas](https://www.ranketes.com.br/atletas.html); App Store (R$ 49,00) |
| Ranketes PRO | Sem preço | "Plano de quem organiza sem dar aula e sem ter quadra". "Fale com a gente" | [Planos](https://www.ranketes.com.br/planos.html) |
| Competições | Por participação | "A cobrança acompanha quantos atletas realmente participaram". Valor não publicado | [Planos](https://www.ranketes.com.br/planos.html) |
| Professor | R$ 159/mês (de R$ 179); grátis até 10 alunos | Agenda, presença, cobrança mensal, contas | [Planos](https://www.ranketes.com.br/planos.html) |
| Clube / Arena | A partir de R$ 280/mês, escala por quadra | Reservas, torneios, ranking interno, mini-site | [Planos](https://www.ranketes.com.br/planos.html) |
| Pagamento de inscrição | O Ranketes **não processa** a inscrição do torneio: "o pagamento acontece do jeito que você já combina hoje, seja PIX ou dinheiro" | [Promoters](https://www.ranketes.com.br/promoters.html) |

**Contradição registrada:** a página de planos diz que o Free inclui "Head to Head completo" e que "a conta de atleta não vira cobrança depois". A página de atletas limita o H2H do Free ao último confronto e põe "participação em torneios" no plano pago. A App Store vende o plano de atleta. **Força: Forte** (três páginas lidas, mesma data).

---

## 2. LetzPlay atual (v10 e v11)

O `CONCORRENTES.md` da pesquisa anterior já descreve proposta, números declarados, features e queixas. Aqui entram **as regras que o jogador vê** e a linha do tempo de versões.

### 2.1 Linha do tempo de versões (App Store)

| Versão | Data | Nota da versão (trecho) |
| --- | --- | --- |
| 2.0 | 02/06/2020 | "pequenas correções de bugs" |
| 3.0 | 06/02/2021 | "A Lptennis agora é LetzPlay! Em comemoração aos 5 anos da empresa … nova plataforma para os jogadores e gestores" |
| 4.0 a 6.0 | 06/2021 a 01/2022 | Layout; "retornar ao aplicativo depois de um tempo em segundo plano" (duas versões seguidas) |
| 7.0 | 07/05/2024 | "Correção no envio de notificações" |
| 9.0.3 | 24/11/2025 | "change base engine · bugfix · improve performance" |
| 10.0 | 19/08/2026 | "Nova identidade visual … corrigimos problemas de autenticação, notificações, navegação … prepara a infraestrutura para uma nova fase" |
| 11.0 | 24/08/2026 | "sua sessão passa a ser preservada após atualizações … corrigimos fluxos de autenticação" |

**Leitura descritiva:** notificação e sessão aparecem como correção em 2022, 2024, 2025 e duas vezes em 2026. São os mesmos temas das queixas das lojas. A ficha da App Store continua com idioma "Inglês". **Força: Forte** (Lido, [App Store](https://apps.apple.com/br/app/letzplay/id1262006308)).

### 2.2 Fluxo por fluxo (regras públicas)

A base é um ranking de arena de BT público (formato Super 4 por sorteio, 2021) e o help center. O LetzPlay é **configurável**: cada organizador escolhe formato, pontuação e quem lança o placar. O exemplo mostra o que o jogador vê, não o único jeito possível.

| Fluxo | O que o LetzPlay mostra | Força | Fonte |
| --- | --- | --- | --- |
| **Tipos de ranking** | Três: de torneio, de jogos por pontos, de jogos por posição (desafio, sorteio, todos contra todos). O organizador cria em "Novo" e preenche um formulário | Forte (Lido) | [Help: Entendendo a área de Rankings](https://help.letzplay.me/hc/pt-br/articles/360059528971-Entendendo-a-%C3%A1rea-de-Rankings) |
| **Pontuação** | O **padrão da plataforma é vitória 100, derrota 25**. O help sugere proporção de 4 para 1, e cita locais que usam 3 para 1 | Forte (Lido) | [Help: Qual a melhor escolha para a pontuação?](https://help.letzplay.me/hc/pt-br/articles/360059605891-Qual-a-melhor-escolha-para-a-pontua%C3%A7%C3%A3o) |
| **Regra visível ao jogador** | Aba "Sobre" do ranking: período, tipo, formato dos jogos, público, "Quem pode informar o placar? Jogadores e administradores", tabela de pontos (vitória 100, derrota 60, vitória por W.O. 100, **derrota por W.O. −100**, set vencido 5) e regulamento em texto | Forte (Lido) | [Ranking de arena, aba Sobre](https://letzplay.me/recanto/rankings/6497/about) |
| **Registro e confirmação** | "Qualquer um dos participantes poderá lançar o resultado. Assim que lançado, o adversário recebe a notificação para aprovar. **Caso não haja aprovação ou contestação**, o sistema aprovará automaticamente 24 horas após" | Forte (Lido) | idem |
| **Contestação** | A palavra aparece, mas o regulamento não diz o que acontece depois. "Casos omissos … serão resolvidos pela organização" | Forte (Lido); a ausência é Forte | idem |
| **Classificação** | Colunas: pontos, jogos, saldo, sets, games, tiebreaks, aproveitamento (%). Link "Critérios de desempate". **Só o total de pontos**; não há quebra por partida na tabela | Forte (Lido) | [Aba Classificação](https://letzplay.me/recanto/rankings/6497/table) |
| **Explicação da posição** | O total confere com a tabela da aba "Sobre" (ex.: 7 vitórias × 100 + 2 derrotas × 60 + 7 sets × 5 = 855). O jogador precisa cruzar as duas abas e fazer a conta | Forte (Lido, conta refeita) | idem |
| **Torneio** | Abas: Sobre, Grupos/Chaves, **Horários**, Jogos, Inscritos, imprimir. Cada jogo mostra dia, hora e local (ex.: "Dom, 20/Set às 11:00hs"). Links para critério de desempate e regra de classificação dos grupos | Forte (Lido) | [Torneio da CBBT, Dupla Mista D](https://letzplay.me/CBBT/tournaments/452525) |
| **Tamanho de categoria** | Na categoria vista (CBBT 250, Dupla Mista D), **5 duplas** em 2 grupos. Na CBBT, várias categorias de etapas abertas mostram de 0 a 6 inscritos perto do prazo | Forte (Lido); amostra pequena | idem; [CBBT](https://letzplay.me/CBBT) |
| **Dupla chancela** | Torneios pontuam em duas tabelas ao mesmo tempo: "CBBT 250 / FGBT500", "CBBT100 / FPEBT400" | Forte (Lido) | [CBBT](https://letzplay.me/CBBT) |
| **H2H e Finals** | H2H é declarado na loja e na home ("H2H, painel de desempenho e histórico"). Finals não aparece como formato nomeado nas páginas lidas | Média (Lido, só declaração) | Loja, home |
| **Social** | A página da CBBT funciona como feed: "abriu inscrições", "publicou as chaves", "encerrou o torneio", com contador de comentários. Organizador também publica avisos (ex.: filiado joga grátis numa arena parceira) | Forte (Lido) | [CBBT](https://letzplay.me/CBBT) |

### 2.3 Preço

Sem mudança em relação à pesquisa anterior: SaaS para o gestor sem preço público; taxas de pagamento (Pix 1,5% com mínimo de R$ 3, boleto R$ 3, cartão R$ 1,70 + 2,51%) cobradas do organizador. Jogador não paga assinatura. (Ver `NEGOCIO.md` da pesquisa anterior.)

---

## 3. Lado a lado

| Tema | Ranketes | LetzPlay atual |
| --- | --- | --- |
| Base de uso | 1 avaliação iOS, 50+ downloads Android | 217 avaliações iOS, 100 mil+ downloads Android, 25.894 jogadores só na CBBT |
| Quem decide a regra | A plataforma (tabela única de pontos) | O organizador (pontuação configurável, padrão 100/25) |
| Categoria | Autodeclarada pelo jogador | Definida pelo organizador ou pela federação (fora do app nas páginas lidas) |
| Confirmação | Obrigatória, sem prazo nem regra de disputa publicada | Configurável; no exemplo, aprovação com auto-aprovação em 24h e contestação sem regra escrita |
| Derrota | Soma ~20% (nunca desconta) | Soma o que o organizador definir; W.O. pode descontar (−100 no exemplo) |
| Explicar a posição | Seta de subida e queda; tabela única publicada | Tabela do organizador na aba "Sobre"; total na "Classificação"; sem seta nem quebra |
| Horário no dia do torneio | Agenda por atleta, limite de jogos por dia, check-in, W.O. automático (declarado) | Aba "Horários" e hora por jogo (visto) |
| H2H | Temporada inteira no plano pago | Declarado, sem detalhe público |
| Finals | Formato citado, sem regra | Não visto |
| Quem paga | Jogador (Atleta Full), professor, arena, competição por participação | Organizador (SaaS + taxas) |
| Ritmo de versões | Semanal | Irregular; duas versões grandes em agosto de 2026 |

---

## O que muda em relação à pesquisa anterior

| Tema | Antes (`CONCORRENTES.md`, `SINTESE.md`) | Agora |
| --- | --- | --- |
| Ranketes nas lojas | "App iOS id 6770686808 … sem nota encontrada" | **1 avaliação iOS e 50+ downloads Android.** Só iPhone. Desenvolvedor pessoa física |
| Preço do Ranketes | "Atleta grátis para sempre" | **Contraditório:** Atleta Full a R$ 49/ano libera participação em torneio e H2H da temporada |
| Regra de pontos do Ranketes | "Vitória 80 a 250; derrota ~20%" | Igual, mais **bônus de até 1,6× por vencer quem está acima**. A home ainda mostra "100/50" |
| RS2 (entrante ocupa o discurso) | Forte (discurso); sem evidência de uso | Discurso forte, **uso quase nulo** |
| Confirmação no LetzPlay | "Só em rankings configurados" | Confirmado, com **auto-aprovação em 24h** e "contestação" sem regra escrita. Padrão de pontos 100/25 |
| CBBT no LetzPlay | 24.005 jogadores, 48 rankings, 183 torneios (resumo) | **25.894, 50, 208** (lido). Categorias pequenas: 0 a 6 inscritos em várias |

---

## Perguntas abertas

Só o Gabriel responde.

1. **O redesign parte da regra do organizador (como o LetzPlay) ou de uma regra única da plataforma (como o Ranketes)?** A evidência mostra que o LetzPlay deixa a pontuação com o organizador e que isso gera tabelas diferentes por arena. Ver também a pergunta 4 do `SINTESE.md`.
2. **O que acontece quando o adversário contesta?** Nenhum dos dois publica a regra. No LetzPlay, "casos omissos" vão para a organização.
3. **O Ranketes ainda é referência relevante**, sabendo que tem uso quase nulo? Refina a pergunta 6 do `SINTESE.md`.

---

## Nota de método: uso de ferramentas nesta frente

- **Firecrawl: 13 chamadas**, todas `firecrawl_scrape` em markdown: Ranketes (App Store, Google Play, home, atletas, promoters, planos), LetzPlay (App Store, help center ×3, ranking de arena ×2, torneio da CBBT). A página da CBBT foi lida na frente de rating e reaproveitada aqui.
- **Busca nativa: 1** (help center do LetzPlay).
- Nenhum nome de jogador das páginas públicas de ranking e torneio foi copiado para este doc.
