# 05 — Hipóteses geradas pelas personas sintéticas

O que as respostas do piloto do Tally ([`02`](02-piloto-tally.md)) e do ensaio do roteiro ([`03`](03-ensaio-roteiro.md)) **sugerem testar** com gente real. Cada hipótese liga-se a uma suposição do mapa da síntese (`docs/discovery/sintese/01-mapa-suposicoes.md`, PR #31) ou propõe uma nova.

> **[sintético] em todas.** Nenhuma hipótese daqui muda a força de uma suposição do mapa. O mapa continua com a força que a evidência dá. O que este arquivo acrescenta é **uma pergunta a mais** para o cartão de teste de cada suposição, e três candidatas a suposição nova, todas com força **Nenhuma**.

---

## Como ler

Cada hipótese tem quatro partes, sempre separadas:

- **O que a persona disse** **[sintético]**: a fala ou o comportamento no ensaio.
- **Hipótese** **[sintético]**: o que isso *poderia* significar sobre o público.
- **Suposição do mapa**: o ID da suposição que a hipótese toca (ou "nova").
- **O que testar com gente real**: o método do plano de validação (`08-plano-validacao.md` da síntese) e o sinal que confirmaria ou derrubaria.

As hipóteses estão em dois grupos: sobre o **público** (vão para o mapa como pergunta) e sobre os **instrumentos** (ficam aqui; dizem como a pesquisa pode errar).

---

## Sobre o público

### H1 · Para o jogador federado, "ranking" é o da federação

| | |
| --- | --- |
| **O que a persona disse** | J1: "O circuito da federação **é** um ranking. Eu jogo torneio que conta ponto no ranking." |
| **Hipótese** | Quem joga circuito federado não separa torneio de ranking. Para ele, "o ranking" é a soma das etapas, e ranking de arena é outra coisa, que ele talvez nem jogue |
| **Suposição do mapa** | `S1` (o ranking é o motivo de abrir o app); `S11` (ranking individual representa o público) |
| **O que testar** | Pré-teste do Tally em voz alta e entrevista de troca: *"Quais rankings você tem hoje? Me mostra onde você vê cada um."* Confirma se o federado lista só o da federação; derruba se lista os dois sem hesitar |

### H2 · No fim de semana de torneio, o horário pesa mais que a posição

| | |
| --- | --- |
| **O que a persona disse** | J1: "Fui ver a chave e o meu horário." "O que me irrita é o horário mudar." |
| **Hipótese** | No torneio, o motivo de abrir o app é a chave e o horário, não a posição no ranking. A posição é consultada depois da etapa |
| **Suposição do mapa** | `S8` (horário confiável é dor de alto custo); `S1` |
| **O que testar** | Entrevista de troca: *"Da última vez que você abriu o app num fim de semana de torneio, o que foi fazer?"* E a opção nova na pergunta "Da última vez que você abriu um app" do Tally (T3 do piloto) |

### H3 · No ranking de arena, o adversário já é conhecido

| | |
| --- | --- |
| **O que a persona disse** | J2: "No ranking eu conheço todo mundo." Marcou "Nunca" em "procura informação sobre o adversário" |
| **Hipótese** | O JTBD 3 (preparar-se para um confronto) é de torneio e circuito, com adversário desconhecido. No ranking de arena, a pesquisa sobre o adversário quase não existe, porque todos se conhecem |
| **Suposição do mapa** | `S7` (o jogador consulta o adversário antes do jogo) |
| **O que testar** | Recortar `S7` por formato. Entrevista: *"Antes do seu último jogo de ranking, o que você sabia do adversário? E antes do último jogo de torneio?"* Confirma se as duas respostas diferem de forma sistemática |

### H4 · O jogador de ranking de arena não sente o atraso que o organizador cobra

| | |
| --- | --- |
| **O que a persona disse** | J2: "O resto está bom." O1, o organizador do mesmo tipo de ranking: "dois eu tive que cobrar" |
| **Hipótese** | No ranking de desafio, o atraso do resultado dói em quem cobra, não em quem joga. O jogador vê a tabela "de vez em quando" e não percebe a defasagem |
| **Suposição do mapa** | `S3` (alguém lança o resultado a tempo); `S2` (o jogador registra no app o que combinou no WhatsApp) |
| **O que testar** | Na entrevista com jogador de arena: *"Do seu último jogo, quando ele apareceu na tabela?"* Na entrevista com organizador, a pergunta 19 revisada. Confirma se o jogador não sabe dizer e o organizador sabe |

### H5 · No circuito privado, a dor mais viva é o dinheiro

| | |
| --- | --- |
| **O que a persona disse** | J4: "Não devolvem o dinheiro quando cancela." Usou "Outro" porque não havia opção |
| **Hipótese** | Para quem joga circuito privado por obrigação, a dor que mais marca é cancelamento e reembolso, não ranking nem navegação |
| **Suposição do mapa** | Nova (candidata `N1`, abaixo). Toca `S13` (o jogador escolhe o app) |
| **O que testar** | Entrevista de troca com quem joga circuito privado: *"Me conta a última vez que você não pôde jogar uma etapa em que estava inscrito."* O discovery já tem casos (reclamações de reembolso de circuito); falta saber se é frequente |

### H6 · Confirmar pelo adversário depende do que acontece quando ele não confirma

| | |
| --- | --- |
| **O que a persona disse** | J2, no Kano K4: "Eu gostaria… mas se o adversário nunca confirmar, aí não." |
| **Hipótese** | A aceitação da confirmação pelo adversário não é uma preferência fixa. Depende de haver prazo e alguém que decida quando ele some ou recusa |
| **Suposição do mapa** | `S4` (confirmação com prazo basta), que já tem evidência Forte **contra** |
| **O que testar** | Não cabe no Kano (V6 do piloto). Entrevista de troca: *"Me conta o último placar seu que ficou pendente. O que aconteceu?"* |

### H7 · O professor-organizador vê o registro de resultado pelo lado de quem cobra

| | |
| --- | --- |
| **O que a persona disse** | J5: "o aluno lança o placar e eu só aprovo". O2: "o aluno lança, eu aprovo, sai no Instagram" |
| **Hipótese** | Para quem ensina e organiza, o resultado lançado pelo jogador é desejável **com aprovação**. O professor quer controle e vitrine, não só automação |
| **Suposição do mapa** | `S2`; `S3`; proto-persona P5 |
| **O que testar** | Entrevista com o perfil E (roteiro revisado, bloco 3). Olhar se a aprovação aparece espontaneamente ao descrever o último resultado lançado. As duas falas vieram de personas montadas com a mesma fonte (YT1), então a coincidência não vale nada sozinha |

### H8 · Parte de quem se diz "não competidor" joga formato competitivo informal

| | |
| --- | --- |
| **O que a persona disse** | J6: "O rei da quadra de sexta tem placar e tabela na lousa. É ranking? Acho que não." |
| **Hipótese** | Há competição informal na arena (rei da quadra, liga da turma) que o jogador não chama de "ranking" nem de "torneio". Esse público cai fora do filtro do Tally |
| **Suposição do mapa** | Nova (candidata `N2`). Toca `S17` (tamanho do público) |
| **O que testar** | Pré-teste do Tally com quem marcar "Nenhum dos dois": *"Você joga algum jogo com placar anotado na arena?"* E observação num fim de semana de arena, se houver |

### H9 · No ranking de desafio, o atraso vem de quem perdeu e sumiu

| | |
| --- | --- |
| **O que a persona disse** | O1: "Um tinha perdido e sumiu." |
| **Hipótese** | A causa do resultado atrasado no ranking de desafio é o jogador que perdeu e não informa, não o gestor que não atualiza |
| **Suposição do mapa** | `S3` (causa Fraca); cruza com `S4` |
| **O que testar** | Entrevista com o perfil A, perguntas 18 e 19 revisadas, e pedir para ver o grupo: quem mandou cada placar, e quanto tempo depois. Confirma se quem demora é sistematicamente o lado perdedor |

### H10 · No torneio independente, o atraso vem do papel lançado à noite

| | |
| --- | --- |
| **O que a persona disse** | O2: "O fiscal da quadra me passa num papel e eu lanço à noite." |
| **Hipótese** | No torneio sem árbitro dedicado, o resultado passa por papel e é lançado de uma vez, fora do horário do evento. O atraso é do lote, não do jogo |
| **Suposição do mapa** | `S3`; dor D6 de organizadores |
| **O que testar** | Observação num torneio (plano de validação): seguir três placares do fim do jogo até o sistema |

### H11 · O dono de arena pequena não decide a ferramenta da competição

| | |
| --- | --- |
| **O que a persona disse** | O3: "Quem faz torneio é o professor." "Para a arena aparecer." |
| **Hipótese** | Na arena pequena, a competição é marketing e o professor ou o organizador de fora escolhem a ferramenta. O dono escolhe só o app de reserva |
| **Suposição do mapa** | `S13` (o jogador escolhe o app), que já tem evidência Forte contra; proto-persona P5 |
| **O que testar** | Roteiro curto do perfil D (bloco 6 e pergunta 27). Confirma se o dono não sabe dizer qual sistema o torneio usou |

---

## Sobre os instrumentos

Estas não vão para o mapa. Dizem onde a própria pesquisa pode enganar.

| # | Hipótese **[sintético]** | De onde veio | O que fazer |
| --- | --- | --- | --- |
| I1 | Quem nunca viveu a situação dá nota média em "como está hoje", e isso reduz a pontuação de oportunidade | J1, J2, J3 na matriz | Coluna "nunca aconteceu comigo" (V1 do piloto) |
| I2 | As features de encantamento saem "indiferentes" porque a resposta disfuncional se ancora no app de hoje | J1, J2, J3 no Kano | Exemplo antes do bloco e rótulos revistos (V4). No pré-teste, ouvir as justificativas |
| I3 | Recém-chegados e quem cumpre tabela recusam a conversa no fim do Tally | J3, J4, J6 | Recrutar P3 e P4 também fora do formulário (T16) |
| I4 | Os blocos novos do Tally aumentam o abandono justamente de P3 e P4 | J3, J4 | Uma das três opções de encaixe (decisão 1 do piloto) |
| I5 | O voluntário de comissão não se reconhece como "organizador" e recusa um convite com essa palavra | O1 | Recrutar com "quem cuida do ranking" |
| I6 | O entrevistado desconfiado encerra a conversa se não souber, no começo, quem faz a pesquisa | O3 | Decisão 1 do ensaio |
| I7 | Perguntas que listam dores produzem "sempre tem" em vez de caso | O2 | Roteiro revisado (7, 8, 12) |

---

## Para o mapa de suposições

Resumo para quem for atualizar o `01-mapa-suposicoes.md` da síntese. **Nenhuma linha muda a força.** Cada hipótese só acrescenta uma pergunta ao cartão de teste da suposição.

| Suposição | Hipóteses [sintéticas] | Pergunta a acrescentar ao teste |
| --- | --- | --- |
| `S1` | H1, H2 | Recortar por formato: federado × arena. "Quais rankings você tem?" |
| `S2` | H4, H7 | O jogador sabe dizer quando o último jogo apareceu na tabela? |
| `S3` | H4, H9, H10 | Causa do atraso por formato: perdedor que some (desafio) × papel em lote (torneio) |
| `S4` | H6 | O que aconteceu com o último placar pendente? |
| `S7` | H3 | Recortar por formato: adversário conhecido na arena × desconhecido no torneio |
| `S8` | H2 | O que o jogador foi fazer no app no último fim de semana de torneio? |
| `S13` | H5, H11 | Quem escolhe o sistema na arena pequena: o dono ou o professor? |
| `S17` | H8 | Quantos "não competidores" jogam formato informal com placar? |

### Candidatas a suposição nova

Força **Nenhuma**: só vieram de persona sintética. Entram no mapa apenas se o Gabriel quiser testá-las.

| ID | Suposição candidata | Hipótese de origem |
| --- | --- | --- |
| `N1` | Para quem joga circuito privado, cancelamento e reembolso pesam mais que ranking | H5 |
| `N2` | Existe competição informal na arena (rei da quadra, liga da turma) fora do que o jogador chama de ranking ou torneio | H8 |
| `N3` | A causa do atraso de resultado muda com o formato: o jogador no desafio, o lote de papel no torneio | H9, H10 |

`N3` refina `S3` em vez de criar uma suposição à parte. A escolha entre refinar e separar é de quem mantém o mapa.
