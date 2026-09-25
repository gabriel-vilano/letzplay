# Personas sintéticas — ensaio dos instrumentos de pesquisa

Personas sintéticas são o modelo de linguagem interpretando perfis de jogador e de organizador. Aqui elas servem **só para preparar a pesquisa com pessoas reais**: achar pergunta ambígua, opção faltando, indução, lógica quebrada e tempo acima do anunciado **antes** de gastar a atenção de gente de verdade.

> **Nada nesta pasta é evidência.** Toda resposta de persona leva o rótulo **[sintético]**. Nenhum achado daqui entra no mapa de suposições, na árvore de oportunidades ou em qualquer ranking de oportunidade como dado. No máximo, vira uma **pergunta a fazer** para gente real.

> **Sem decisões de produto.** As sugestões de ajuste no Tally e no roteiro são propostas para o Gabriel aprovar. O formulário do Tally (`q46Jk8`) foi lido pelo conector (`load_form`) e **não foi editado**.

---

## Por onde começar

| # | Arquivo | O que tem |
| --- | --- | --- |
| 1 | [`01-personas.md`](01-personas.md) | 6 personas de jogador e 3 de organizador, com contexto concreto tirado do discovery e a lista do que é inferido |
| 2 | [`02-piloto-tally.md`](02-piloto-tally.md) | O piloto do formulário, na versão atual e na proposta da síntese: o caminho de cada persona, onde travou, tempo, e a lista de problemas com sugestão de ajuste |
| 3 | [`03-ensaio-roteiro.md`](03-ensaio-roteiro.md) | O ensaio da entrevista com as 3 personas de organizador: trechos, perguntas que geraram resposta vaga, fechada ou induzida |
| 4 | [`04-roteiro-revisado.md`](04-roteiro-revisado.md) | O roteiro de entrevista com organizadores, revisado a partir do ensaio, com a lista de mudanças |
| 5 | [`05-hipoteses.md`](05-hipoteses.md) | Hipóteses geradas pelas respostas, todas [sintéticas], ligadas às suposições do mapa e com o teste que cada uma pede com gente real |

---

## O que é uma persona sintética, e o que ela não é

**Técnica:** *synthetic users* ou *LLM-simulated respondents*. É o equivalente, em pesquisa, a um **teste de mesa** (*desk check*) em programação: você "executa" o instrumento na cabeça antes de rodá-lo de verdade. Acha erro de lógica e de redação. Não acha o que a pessoa real pensa.

**Analogia com design:** é o protótipo navegado pelo próprio designer antes do teste de usabilidade. Revela o botão que não leva a lugar nenhum; não revela se o usuário queria aquele botão.

**Serve para:**

- Achar pergunta com duas leituras, opção que falta, opção que não exclui outra
- Conferir a lógica condicional (quem vê o quê)
- Estimar tempo por caminho
- Achar pergunta que já traz a resposta (indução) ou que só aceita "sim" e "não"
- Treinar o entrevistador nas sondas antes da primeira conversa

**Não serve para:**

- Dizer quanto uma dor importa, ou para quantas pessoas
- Dizer se uma feature seria obrigatória, de desempenho ou de encantamento
- Substituir uma única entrevista real

**Por quê:** o modelo reproduz a média do que leu, tende a concordar com quem pergunta e a ser otimista, e não tem memória de um sábado real num torneio. Pesquisas sobre respondentes simulados por LLM relatam respostas mais homogêneas e mais "razoáveis" que as humanas. Por isso as salvaguardas abaixo.

---

## Salvaguardas usadas

1. **Instrução contra a concordância.** Cada persona foi interpretada com a instrução de papel abaixo, e cada uma tem gatilhos explícitos de irritação e de desistência no [`01-personas.md`](01-personas.md).
2. **Desistência é resultado.** Quando uma persona abandona o formulário ou encerra a entrevista, isso fica registrado como achado, no ponto em que aconteceu.
3. **Duas colunas sempre separadas:** "o que a persona disse" **[sintético]** e "o que isso sugere testar com gente real".
4. **Dois rótulos diferentes para dois tipos de achado:**
   - **[sintético]**: saiu da interpretação de uma persona. Vale como pista.
   - **[revisão]**: saiu da leitura direta do instrumento (ex.: a regra de lógica X esconde a pergunta Y de quem marcou Z). É verificável no próprio formulário e não depende de persona. Ainda assim não é evidência sobre o público.
5. **Contexto das personas vem do discovery.** O que foi inventado para completar a persona está listado como *inferido*.

### A instrução de papel

Usada, com o perfil de cada persona, antes de cada rodada:

> Você é [persona]. Responda como essa pessoa responderia no celular, no meio da rotina descrita, e não como um pesquisador. Você **não** tem obrigação de ajudar a pesquisa. Se uma pergunta for confusa, diga que é confusa e escolha o que escolheria sem pensar muito, mesmo que seja a opção errada. Se uma opção não te representa, diga qual faltou. Se a pergunta te irritar, te cansar ou parecer que querem te vender algo, diga, e **desista** se o seu perfil desistiria. Não suavize. Não elogie o formulário. Não conclua com otimismo. Quando não souber, diga "não sei" em vez de inventar um número.

---

## Personas × instrumentos

| Persona | Tally atual | Tally proposto | Roteiro de organizador |
| --- | --- | --- | --- |
| J1 · Escalador federado | Completa | Completa | — |
| J2 · Fiel do ranking da arena | Completa | Completa | — |
| J3 · Recém-chegada | Completa | **Desiste** no Kano | — |
| J4 · Cumpre tabela | Completa, com pressa | **Desiste** na matriz | — |
| J5 · Professor-organizador | Completa, confuso | Completa | — |
| J6 · Joga por diversão | Completa (caminho curto) | Completa (caminho curto) | — |
| O1 · Comissão de ranking de clube | — | — | Completa |
| O2 · Professora que organiza torneio | — | — | Completa |
| O3 · Dono de arena pequena | — | — | **Encerra** no bloco 6 |

---

## Limites

- **O piloto não vê a tela.** A matriz de 8 × 5 no celular (393px) só pode ser conferida no *preview* do Tally. O piloto aponta o risco; não confirma nem descarta.
- **O modelo conhece o próprio discovery.** As personas foram montadas a partir dele, então tendem a "lembrar" das dores que ele já mapeou. O ensaio do roteiro compensa isso marcando as respostas que ecoam o discovery quase palavra por palavra.
- **9 personas não são amostra.** Nenhuma contagem daqui ("3 de 6 personas travaram") diz algo sobre o público. Diz só que a pergunta tem pelo menos uma leitura problemática.
- **Uma rodada por persona.** Rodar de novo daria respostas diferentes. Os achados que valem são os de redação e de lógica, que não dependem da sorte da rodada.

---

## Nota de método

- **Insumo:** proto-personas e proposta do Tally da síntese do discovery (branch `docs/prd-17-sintese-discovery`, PR #31); jornada, dores e roteiro de organizadores (branch `docs/prd-16-dores-organizadores`, PR #30); perfil do público da pesquisa de mercado (branch `docs/prd-13-discovery-mercado`, PR #26). Os links relativos para essas pastas só resolvem depois do merge desses PRs.
- **Formulário:** lido por `load_form` em 25/09/2026, na íntegra (150 blocos, 7 regras de lógica, configurações e estilo). Rascunho, 0 respostas. Nada foi salvo.
- **Ferramentas:** nenhuma chamada ao Firecrawl nem ao Mobbin. Nenhuma pesquisa nova: todo o contexto vem do discovery já coletado.
