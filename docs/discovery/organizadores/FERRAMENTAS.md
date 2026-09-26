# FERRAMENTAS.md — O que o organizador usa, quanto paga e por que troca

Pergunta 3 da issue. Pesquisa feita em 25/09/2026. Códigos de fonte em [`FONTES.md`](FONTES.md).

> **Sem decisões de produto.** Preços envelhecem: confira a data antes de usar. Os preços de fornecedor vêm da pesquisa de mercado (`NEGOCIO.md` e `CONCORRENTES.md`, lidos em 25/09/2026) e são marcados como tal.

---

## Resumo

- **Muitas vezes quem escolhe a ferramenta não é o organizador.** O organizador de etapa federada usa o sistema da federação (Tênis Integrado na FET e na FCTBT; LetzPlay na CBBT). O circuito grande usa app próprio. Só o dono de arena e o organizador independente escolhem de fato.
- **A ferramenta oficial nunca está sozinha.** Em volta dela há sempre WhatsApp, formulário, e-mail, PIX na chave do organizador e, às vezes, planilha. Ver as gambiarras em [`DORES.md`](DORES.md).
- **Dois modelos de cobrança convivem:** taxa por inscrição (a plataforma tira um valor de cada atleta) e mensalidade de SaaS (a arena paga por mês). O organizador de torneio sente mais a primeira; o dono de arena, a segunda.
- **Sobre "por que troca", a evidência é fraca.** Não se achou nenhum relato de organizador explicando uma troca. O que existe são pistas: elogio a simplicidade e suporte (AS1), pedido de planilha para um formato que a ferramenta não cobria (FL1), fornecedor que sumiu (BT Match, página 404), e alguém que desistiu de procurar e escreveu o próprio sistema (GH).

---

## 1. O que se usa, por tipo de organizador

| Organizador | Ferramenta principal | Em volta | Quem escolheu | Fonte |
| --- | --- | --- | --- | --- |
| Etapa federada (estadual) | Tênis Integrado: inscrição, boleto, súmula lançada pelo árbitro, ranking | E-mail para troca e reembolso; PIX na hora para *alternate*; sistema de som | A federação | REG1, REG4 |
| Confederação (CBBT) | LetzPlay (páginas de torneio e ranking); inscrição no site da CBBT | — | A confederação | LP2; `CONCORRENTES.md` |
| Circuito nacional privado (TF Sports) | App próprio de inscrição e pagamento | Grupo de WhatsApp, formulário de denúncia, **consulta ao LetzPlay** para checar ranking, protocolo de atendimento | O circuito | RA3, RA4 |
| Torneio independente em arena | LetzPlay ou similar; às vezes inscrição a R$ 0 na plataforma e pagamento por fora | WhatsApp; PIX | O organizador | LP1, RA1, RA5 |
| Ranking de desafio (clube ou arena) | Página no site + formulário; ou app de ranking (Meu Ranking, LetzPlay) | Grupo de WhatsApp com *template* | O clube | REG2, REG3, AS1 |
| Arena (operação inteira) | App de reserva e gestão; Instagram e WhatsApp com chatbot para reserva | Catraca com biometria em algumas | O dono | ACAD2 |
| Academia que escreveu o próprio sistema | ArenaHub (aulas, day use, torneios, pagamento por atleta, Mercado Pago) | WhatsApp obrigatório no cadastro | O dono | GH |
| Organizador pequeno sem sistema | Planilha encomendada ou comprada | — | O organizador | FL1, FL2 |

Nas 10 arenas visitadas por uma pesquisa acadêmica em 2024, a reserva era feita "principalmente" por Instagram e WhatsApp, com aplicativo de reserva em uso "amplamente", e só uma tinha app próprio. Um dono disse que o WhatsApp "é mais ágil devido à possibilidade de automação para direcionar o cliente com mensagens prontas" (ACAD2).

---

## 2. Quanto custa

### 2.1 Taxa por inscrição (sai do atleta ou do organizador)

| Ferramenta | Custo | Quem paga | Fonte | Tipo |
| --- | --- | --- | --- | --- |
| Tênis Integrado | R$ 9,00 por inscrição (intermediação + boleto), descontado antes do rateio | Sai do valor da inscrição; o organizador recebe 80% do que sobra | REG1 | REG, lido |
| LetzPlay (cobrança online) | PIX 1,5% (mín. R$ 3); boleto R$ 3; cartão R$ 1,70 + 2,51% | Organizador | `NEGOCIO.md` | Fornecedor, lido |
| Sympla | 10% de serviço + 2–2,5% de processamento | Comprador ou organizador | `NEGOCIO.md` | Fornecedor, resumo |
| Ranketes (competição organizada) | Cobrança "por participação", sem mensalidade (valor não informado) | Organizador | `CONCORRENTES.md` | Fornecedor, lido |
| Rankedin (padel, Europa) | Stripe + 1%; torneio *premium* € 14,90–59,90 | Organizador | `NEGOCIO.md` | Fornecedor, lido |

### 2.2 Mensalidade (SaaS de arena ou de professor)

| Ferramenta | Custo | Fonte | Tipo |
| --- | --- | --- | --- |
| Arena Online | R$ 147–197/mês (até 3 quadras) | `NEGOCIO.md` | Fornecedor, resumo |
| Ranketes | Professor: grátis até 10 alunos, depois R$ 159/mês. Arena: a partir de R$ 280/mês | `CONCORRENTES.md` | Fornecedor, lido |
| Playtomic Manager | US$ 119–349/mês | `NEGOCIO.md` | Fornecedor, lido |
| LetzPlay (gestão) | Sem preço público ("Solicitar perfil de gestão") | `CONCORRENTES.md` | Fornecedor, lido |
| Meu Ranking - Organizador | Assinatura do administrador, preço não público | `CONCORRENTES.md` | Fornecedor |

### 2.3 Custo sem ferramenta

| Alternativa | Custo observado | Fonte | Tipo |
| --- | --- | --- | --- |
| Planilha sob encomenda (grupos, saldo de games, desempate) | Orçamento aberto, valor mínimo de R$ 30; 65 propostas | FL1 | DEM, lido |
| Planilha pronta à venda | Não visto | FL2 | DEM, resumo |
| App genérico de campeonato | "coisas básicas são pagas"; premium de 1 mês; anúncios | AS2 | 1P (outro esporte) |
| Escrever o próprio sistema | 1.088 commits; integrações com Mercado Pago e PIX manual | GH | PC |

### 2.4 O que a conta do organizador de etapa federada mostra

Um exemplo com os números da FET (REG1), só para ler a estrutura, não para estimar receita:

| Linha | Valor |
| --- | --- |
| Inscrição (filiado) | R$ 119 a 199 |
| Menos plataforma | − R$ 9,00 |
| Menos federação | − 20% do líquido |
| Organizador recebe | 80% do líquido, em até 5 dias úteis **depois de finalizar no sistema e enviar nota fiscal** |
| Risco | Multa de até 20% se não divulgar os patrocinadores da federação |
| Com esse valor, paga | Quadras (mín. 6 com luz ou 8 sem), árbitro geral + auxiliares + *staffs*, água, bolas, banheiro |

---

## 3. O que o organizador valoriza e o que faz trocar

### 3.1 Sinais do que valoriza

| Sinal | Evidência | Fonte | Tipo |
| --- | --- | --- | --- |
| Simplicidade para ele e para o jogador | "simples e objetivo, fácil de entender ... todos os clientes elogiam a praticidade"; "muito fácil de usar" | AS1 | 1P |
| Suporte rápido | "suporte estão sempre disponíveis para ajudar"; "suporte rápido" | AS1 | 1P |
| Regra explicada no próprio app | "Bem explicado as regras" (duas reviews) | AS1 | 1P |
| Cobrir o formato do evento | Grupos de 3, saldo de games, desempate próprio | FL1 | DEM |
| Refazer sem perder trabalho | "sortear novamente os grupos, sem precisar excluir" | AS2 | 1P (outro esporte) |
| Cobrar os dois da dupla | O sistema original só cobrava quem inscrevia | GH #50 | PC |
| Falar com o atleta onde ele está | WhatsApp obrigatório no cadastro para avisar horário e cobrar | GH #72 | PC |

### 3.2 Pistas do que faz trocar ou desistir

| Pista | Evidência | Fonte | Força |
| --- | --- | --- | --- |
| A ferramenta não cobre o formato | Pedido de planilha; construtor que escreveu o próprio sistema | FL1, GH | Média |
| Fornecedor some | BT Match, que dizia ter 500+ arenas, com o domínio em página 404 em 25/09/2026 | `CONCORRENTES.md` | Média (um caso) |
| Erro de pagamento | Torneio pago que virava grátis; parceiro que entrava sem pagar; "Fiz o pagamento pelo App e a Arena não recebeu!" | GH #50, #69; RA-L1 | Média |
| Brecha de identidade | Perfis duplicados; validação por CPF só como opção do gestor | RA2 | Média |
| Exigência da federação | O organizador de etapa não escolhe; o jogador também não ("não sei por que a federação insiste nesse app") | REG1, REG4; `VOZ_DO_USUARIO.md` | Forte (para "não escolhe") |
| Preço | Nenhum relato de BT; só "coisas básicas são pagas" em app genérico | AS2 | Fraca |

**Não se encontrou nenhum organizador de BT contando por que trocou de sistema.** É uma pergunta central do roteiro de entrevista.

---

## 4. Leitura descritiva

- **A plataforma é o elo mais fraco da cadeia de responsabilidade.** Quando algo dá errado, o jogador reclama com ela, e ela devolve ao organizador (RA1). Para o organizador, a plataforma é uma de várias ferramentas; para o jogador, é o rosto da competição.
- **O WhatsApp não é concorrente da ferramenta: é a camada de comunicação que nenhuma ferramenta substituiu.** Até quem escreveu o próprio sistema tornou o WhatsApp obrigatório no cadastro (GH #72).
- **O custo invisível é o tempo.** Nenhuma fonte mede horas de organizador. O custo em dinheiro das ferramentas é baixo comparado ao preço da inscrição (R$ 9 sobre R$ 119–199 na FET); o custo em trabalho não foi medido.
