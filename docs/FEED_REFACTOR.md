# FEED_REFACTOR.md
**Escopo:** Refatoração de `src/types/feed.ts` e `src/mocks/feed.ts`  
**Versão:** 1.0  
**Status:** Aprovado para implementação  
**Gerado em:** Abril 2026  

> Este documento consolida todas as decisões de produto, schema e arquitetura que impactam os arquivos de tipos e mocks do feed. É a fonte de verdade para a refatoração — nenhum outro documento precisa ser consultado.

---

## Contexto

Os arquivos `src/types/feed.ts` e `src/mocks/feed.ts` foram gerados pelo Claude Code com boa estrutura geral. Este documento lista os ajustes necessários para alinhá-los com as decisões de produto e arquitetura validadas, garantindo que quando o Supabase for integrado no futuro, os componentes não precisem de reescrita.

O projeto trabalha com dados mockados durante o desenvolvimento dos componentes. O schema do banco está documentado e guardado para implementação futura — as mudanças aqui refletem esse schema para manter consistência.

---

## Arquivos a modificar

- `src/types/feed.ts`
- `src/mocks/feed.ts`
- `src/components/Feed/CardHeader.tsx` — um bloco condicional precisa ser removido (ver Ajuste 2)

Nenhum outro arquivo deve ser alterado.

---

## Ajuste 1 — `total_matches` em `PlayerInfo` / remover `games` de `MatchSide`

### Por quê
No schema do banco, `total_matches` é uma coluna em `profiles` — não um dado da partida. Quando o Supabase for integrado, esse valor virá dentro do objeto do jogador, não acoplado ao lado da partida. O campo `games` em `MatchSide` está no lugar errado arquiteturalmente.

### Mudanças em `src/types/feed.ts`

**`PlayerInfo` — adicionar `total_matches`:**
```typescript
// antes
export interface PlayerInfo {
  id: string;
  name: string;
  username: string;
  avatar_url: string | null;
}

// depois
export interface PlayerInfo {
  id: string;
  name: string;
  username: string;
  avatar_url: string | null;
  total_matches: number;
  // vem de profiles.total_matches no banco
}
```

**`SinglesMatchSide` e `DoublesMatchSide` — remover `games`:**
```typescript
// antes
export interface SinglesMatchSide {
  format: 'singles';
  player: PlayerInfo;
  games: number;
}

export interface DoublesMatchSide {
  format: 'doubles';
  players: [PlayerInfo, PlayerInfo];
  games: [number, number];
}

// depois
export interface SinglesMatchSide {
  format: 'singles';
  player: PlayerInfo;
}

export interface DoublesMatchSide {
  format: 'doubles';
  players: [PlayerInfo, PlayerInfo];
}
```

### Mudanças em `src/mocks/feed.ts`

**Quatro objetos de jogador — adicionar `total_matches` e corrigir `username`:**
```typescript
const lucas: PlayerInfo = {
  id: 'player-lucas',
  name: 'Lucas Silva',
  username: 'lucas',        // corrigido: sem ponto
  avatar_url: null,
  total_matches: 274,
};

const pedro: PlayerInfo = {
  id: 'player-pedro',
  name: 'Pedro Henrique',
  username: 'pedro',        // corrigido: sem hífen
  avatar_url: null,
  total_matches: 188,
};

const rafael: PlayerInfo = {
  id: 'player-rafael',
  name: 'Rafael Costa',
  username: 'rafael',       // corrigido: sem concatenação
  avatar_url: null,
  total_matches: 310,
};

const thiago: PlayerInfo = {
  id: 'player-thiago',
  name: 'Thiago Mendes',
  username: 'thiago',       // corrigido: sem concatenação
  avatar_url: null,
  total_matches: 220,
};
```

**Cards 6 e 7 (confronto) — remover `games`:**
```typescript
// card 6 — confronto simples
// antes
side_a: { format: 'singles', player: lucas, games: 274 },
side_b: { format: 'singles', player: pedro, games: 188 },
// depois
side_a: { format: 'singles', player: lucas },
side_b: { format: 'singles', player: pedro },

// card 7 — confronto duplas
// antes
side_a: { format: 'doubles', players: [lucas, rafael], games: [274, 310] },
side_b: { format: 'doubles', players: [pedro, thiago], games: [188, 220] },
// depois
side_a: { format: 'doubles', players: [lucas, rafael] },
side_b: { format: 'doubles', players: [pedro, thiago] },
```

---

## Ajuste 2 — Remover `is_following` de `OrgCardHeader`

### Por quê
A feature de seguir organizações está fora do escopo do MVP — não existe tabela correspondente no banco. Manter `is_following` nos tipos cria uma referência a uma feature inexistente. O botão "Seguir" deve ser removido da UI até a feature ser implementada.

### Mudanças em `src/types/feed.ts`

```typescript
// antes
export interface OrgCardHeader {
  header_type: 'org';
  org: OrgInfo;
  phase: string;
  competition_name: string;
  category: string;
  is_following: boolean;
}

// depois
export interface OrgCardHeader {
  header_type: 'org';
  org: OrgInfo;
  phase: string;
  competition_name: string;
  category: string;
  // is_following removido — seguir organização é pós-MVP
}
```

### Mudanças em `src/mocks/feed.ts`

Remover o campo `is_following` de todos os headers `org`. Aparece nos cards 1 a 7 — todos os cards com `header_type: 'org'`.

### Mudanças em `src/components/Feed/CardHeader.tsx`

Remover o bloco condicional que renderiza o botão "Seguir". O botão não deve ficar visível por padrão — a feature não existe ainda.

```tsx
// remover este bloco inteiro do CardHeader.tsx
{!data.is_following && (
  <>
    <span className={styles.header__dot}>·</span>
    <button className={styles.header__follow}>Seguir</button>
  </>
)}
```

---

## Ajuste 3 — Corrigir convenção de `username` nos mocks

### Por quê
Os mocks usam formatos inconsistentes (`lucas.silva`, `pedro-henrique`, `rafaelcosta`). O padrão do produto é username simples, sem separadores — consistente com o `@lucas` exibido nos wireframes.

Este ajuste já está incorporado no Ajuste 1 (os quatro objetos de jogador foram reescritos com os valores corretos). Não há mudança adicional necessária.

| Antes | Depois |
|---|---|
| `username: 'lucas.silva'` | `username: 'lucas'` |
| `username: 'pedro-henrique'` | `username: 'pedro'` |
| `username: 'rafaelcosta'` | `username: 'rafael'` |
| `username: 'thiagomendes'` | `username: 'thiago'` |

---

## Ajuste 4 — Contagem de inscritos representa jogadores

### Por quê
`enrollment_count` nos cards de inscrição representa sempre jogadores individuais, não duplas. Para categorias de duplas, o valor já deve refletir o total de jogadores (não de inscrições). Isso garante consistência na exibição: "14 jogadores inscritos" funciona para simples e duplas.

### Mudanças em `src/mocks/feed.ts`

Os cards 8 e 9 já têm `enrollment_count: 14` representando jogadores — sem mudança necessária nos valores. O ajuste é apenas documentar a semântica:

```typescript
// card 8 — inscrição simples
competition: {
  enrollment_count: 14, // 14 jogadores individuais
}

// card 9 — inscrição duplas
competition: {
  enrollment_count: 14, // 14 jogadores = 7 duplas × 2
  // quando vier do banco: COUNT(enrollments) × 2 para categorias doubles
}
```

Nenhuma mudança de valor — apenas confirma que a semântica está correta.

---

## O que não mudar

Estas estruturas estão corretas e não devem ser alteradas:

- Union type `FeedCard` e todos os seus membros
- Separação `Side` vs `MatchSide` — continua correta conceitualmente mesmo após mover `total_matches`
- Modelagem de `Score` com `NormalScore | WoScore | RetiredScore`
- Separação `RankingUpCard | RankingDownCard | RankingMilestoneCard`
- Campos `cheer_a`, `cheer_b`, `user_cheer` em `MatchCard` — corretos, correspondem à tabela `match_cheers` planejada no banco
- Estrutura de `CompetitionInfo` e `EnrollmentCard`
- Estrutura de `FriendshipCard`

---

## Resumo das mudanças

| Arquivo | Mudança | Impacto |
|---|---|---|
| `src/types/feed.ts` | Adicionar `total_matches` em `PlayerInfo` | Remove `games` de `MatchSide` |
| `src/types/feed.ts` | Remover `is_following` de `OrgCardHeader` | Remove campo |
| `src/mocks/feed.ts` | Adicionar `total_matches` nos 4 jogadores | Atualiza 4 objetos |
| `src/mocks/feed.ts` | Corrigir `username` dos 4 jogadores | Renomeia strings |
| `src/mocks/feed.ts` | Remover `games` dos cards 6 e 7 | Atualiza 2 cards |
| `src/mocks/feed.ts` | Remover `is_following` dos cards 1 a 7 | Remove campo de 7 cards |
| `src/components/Feed/CardHeader.tsx` | Remover bloco do botão "Seguir" | Remove bloco condicional |

---

## Referência de arquitetura — decisões que motivam os ajustes

Esta seção documenta o raciocínio de produto e banco por trás de cada ajuste, para consulta futura.

### `total_matches` em `profiles`
Campo desnormalizado no banco — atualizado por trigger a cada partida confirmada. Aparece nos cards de confronto ("274 jogos"), na lista de amigos e no perfil do jogador. Centralizar em `PlayerInfo` evita que cada contexto precise buscar o dado separadamente.

### `is_following` e tabela `follows`
A feature de seguir organizações requer uma tabela `follows (follower_id → profiles, followee_id → organizations)`. Essa tabela está fora do MVP — quando implementada, o campo `is_following` volta para `OrgCardHeader` e o botão "Seguir" é reintroduzido no `CardHeader.tsx`.

### `cheer_a`, `cheer_b`, `user_cheer` em `MatchCard`
Correspondem à tabela `match_cheers (match_id, player_id, side, created_at)` planejada no banco. A `PRIMARY KEY (match_id, player_id)` garante um voto por usuário por partida. Torcida é reversível — o usuário pode trocar de lado (UPDATE) ou desfazer (DELETE). Contagem calculada via `COUNT GROUP BY side` no MVP; migração para colunas desnormalizadas com triggers é o caminho de escala quando necessário.

### `enrollment_count` como jogadores
Garante consistência de exibição entre categorias simples (1 jogador por inscrição) e duplas (2 jogadores por inscrição). Cálculo: `COUNT(enrollments)` para simples, `COUNT(enrollments) × 2` para duplas. Aplicado no momento de geração do `metadata` da activity — não armazenado como contador em `categories`.

### Categorias multi-nível (`level_min` / `level_max`)
Substitui o campo `level` único. Permite representar categorias como "Feminina A/B" com `level_min = 'A'` e `level_max = 'B'`. Nível técnico e faixa etária (`age_group`) são mutuamente exclusivos — uma categoria é definida por um ou pelo outro. Mista implica sempre duplas — constraint no banco bloqueia `gender = 'mixed' AND modality = 'singles'`.
