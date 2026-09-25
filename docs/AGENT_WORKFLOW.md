# AGENT_WORKFLOW.md — LetzPlay

Como vários agentes trabalham ao mesmo tempo em issues diferentes sem se atropelar, e como se comunicam entre si e com o Gabriel.

> Convenções de branch e PR estão no `docs/GIT_WORKFLOW.md`. Aqui ficam só as regras de coordenação.

---

## Princípios

- **1 issue = 1 agente = 1 branch = 1 PR.** Cada agente trabalha isolado, na própria sessão na nuvem, com o próprio clone do repo.
- **O Linear é o quadro compartilhado.** Agentes não conversam direto. Tudo que outro agente ou o Gabriel precisa saber vira status, relação ou comentário no Linear. Isso é o padrão *blackboard*: ninguém fala com ninguém, todos leem e escrevem no mesmo quadro. Resultado: o estado de todo o trabalho é auditável num lugar só.
- **O Gabriel decide produto e domínio.** Pesquisa, implementação e testes são autônomos. Quando a decisão é de produto, de UX ou de Beach Tennis, o agente para e pergunta.
- **A CI é o portão.** Nenhum agente mexe no `master` direto nem faz merge. O Gabriel mergeia.

---

## Estrutura do Linear

Dois times, divididos por **etapa do fluxo**, não por disciplina:

| Time | Chave | Workflow | O que entra |
| --- | --- | --- | --- |
| Product | `PRD` | Backlog → Todo → Exploring → **Needs Decision** → Ready | Specs, pesquisa, design, recuperação de contexto |
| Engineering | `ENG` | Backlog → Todo → In Progress → **Needs Decision** → In Review → Done | Código, testes, docs técnicos |

- **Projetos** atravessam os dois times (ex.: Feed tem issues de PRD e de ENG). **Initiative** `MVP` agrupa os projetos.
- **Labels:** grupo `Tipo`, uma por issue: Feature, Bug, Refactor, Chore, Docs, Design.
- **Specs geram as issues de ENG.** Uma issue de PRD em Ready é o gatilho para criar as issues de ENG correspondentes, ligadas ao mesmo projeto e com `relatedTo` apontando para a spec. Não se criam issues de ENG especulativas antes disso.
- **Dependências** usam a relação `blocked by`. Issue com bloqueio aberto não pode ser pega.

---

## Ciclo de vida de uma issue

O passo a passo executável está na skill `/pegar-issue` (`.claude/skills/pegar-issue/SKILL.md`). Resumo:

1. **Pegar.** Só issues em **Todo** e sem `blocked by` aberto. O agente move a issue para **In Progress** (ENG) ou **Exploring** (PRD) e comenta que começou, com o nome da branch. Se a issue já estiver em andamento, não pega: outro agente está nela.
2. **Branch.** `<tipo>/<id>-<descricao-curta>`, ex.: `fix/eng-6-placar-wo`. O ID na branch liga o PR à issue pela integração GitHub ↔ Linear. Base: `master`, salvo quando a issue diz outra base.
3. **Trabalhar só no escopo.** O que aparecer fora do escopo vira comentário na issue afetada ou issue nova em Backlog. O PR não cresce.
4. **Parar para decidir.** Ver "Needs Decision" abaixo.
5. **Entregar.** PR seguindo o template, com `Closes ENG-6` na descrição. A integração move a issue para In Review ao abrir o PR e para Done no merge. O agente acompanha a CI até ficar verde.
6. **Fechar o ciclo.** Último comentário na issue: o que foi feito, link do PR, e qualquer descoberta que afete outra issue (também comentada lá).

Issues de PRD terminam de outro jeito: o resultado é um diagnóstico ou uma spec. Decisões estáveis vão para `docs/` via PR (o repo é a fonte da verdade do que é durável). A issue vai para **Ready** só com aprovação do Gabriel.

---

## Needs Decision

O ponto onde o agente para e chama o Gabriel. Usar quando a decisão:

- afeta produto, UX ou regra de domínio (Beach Tennis);
- tem alternativas com trade-off real e nenhuma é claramente melhor;
- muda o escopo da issue.

**Formato do comentário:**

```
**Decisão necessária:** <pergunta em uma linha>

**Contexto:** <o que motivou a pergunta>

**Opções:**
1. <opção> — <trade-off>
2. <opção> — <trade-off>

**Recomendação:** <opção e por quê>
```

Depois de comentar, mover a issue para **Needs Decision** e encerrar a sessão com um resumo. O agente não fica esperando: a resposta chega como comentário, e a issue volta para Todo para ser retomada (pela mesma sessão ou por uma nova).

Não usar Needs Decision para dúvida técnica que o próprio agente consegue resolver lendo o código, a doc ou testando.

---

## Comunicação

| Situação | Onde registrar |
| --- | --- |
| Peguei a issue | status In Progress / Exploring + comentário com a branch |
| Estou bloqueado por outra issue | relação `blocked by` + comentário explicando |
| Preciso de decisão do Gabriel | status Needs Decision + comentário no formato acima |
| Descobri algo que afeta outra issue | comentário **na outra issue** |
| Achei trabalho novo fora do escopo | issue nova em Backlog, com label `Tipo` e projeto |
| Terminei | PR aberto com `Closes <ID>` + comentário final |

**Regras:**

- Nunca fazer push em branch de outro agente.
- Antes de mexer num arquivo que outra issue em andamento também toca, comentar na outra issue.
- Comentário começa pelo contexto e termina pelo que se pede. Quem lê pode ser um agente sem nenhuma memória da conversa.

---

## Orquestração

O Gabriel escolhe o lote; uma sessão orquestradora abre uma sessão na nuvem por issue, com o prompt `/pegar-issue <ID>`.

- **Máximo de 3 agentes simultâneos.** O gargalo é a revisão de PRs e as respostas a Needs Decision, não a quantidade de agentes.
- **Só issues independentes no mesmo lote:** sem `blocked by` entre si e, de preferência, sem arquivos em comum.
- **Issues que compartilham uma branch de feature** (ex.: correções de uma branch ainda não mergeada) vão para **um agente só**, em sequência. Coordenar vários agentes na mesma branch custa mais do que o ganho de paralelismo.
