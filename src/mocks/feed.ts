import type {
  FeedCard,
  PlayerInfo,
  OrgInfo,
} from '@/src/types/feed';

// --- Shared entities ---

const lucas: PlayerInfo = {
  id: 'player-lucas',
  name: 'Lucas Silva',
  username: 'lucas',
  avatar_url: null,
};

const pedro: PlayerInfo = {
  id: 'player-pedro',
  name: 'Pedro Henrique',
  username: 'pedro',
  avatar_url: null,
};

const rafael: PlayerInfo = {
  id: 'player-rafael',
  name: 'Rafael Costa',
  username: 'rafael',
  avatar_url: null,
};

const thiago: PlayerInfo = {
  id: 'player-thiago',
  name: 'Thiago Mendes',
  username: 'thiago',
  avatar_url: null,
};

const arenaRM: OrgInfo = {
  id: 'org-arena-rm',
  name: 'Arena RM',
  username: 'arenaRM',
  avatar_url: null,
};

const arenaSunset: OrgInfo = {
  id: 'org-arena-sunset',
  name: 'Arena Sunset',
  username: 'arenasunset',
  avatar_url: null,
};

// --- Mock cards (13 variações) ---

export const mockFeedCards: FeedCard[] = [
  // 1. Resultado — 1 set simples
  {
    id: 'event-result-1set',
    card_type: 'result',
    created_at: '2026-04-28T08:00:00Z',
    header: {
      header_type: 'org',
      org: arenaRM,
      phase: 'Rodada 3',
      competition_name: 'Ranking BH',
      category: 'Simples B',
      is_following: false,
    },
    winner: { format: 'singles', player: lucas },
    loser: { format: 'singles', player: pedro },
    score: { type: 'normal', sets: [{ a: 6, b: 4 }] },
    date: '2026-04-27T19:00:00Z',
    location: 'Arena RM – Beach · Nova Lima/MG',
    h2h_count: 2,
  },

  // 2. Resultado — 2 sets simples
  {
    id: 'event-result-2sets',
    card_type: 'result',
    created_at: '2026-04-26T20:00:00Z',
    header: {
      header_type: 'org',
      org: arenaRM,
      phase: 'Rodada 2',
      competition_name: 'Ranking BH',
      category: 'Simples B',
      is_following: true,
    },
    winner: { format: 'singles', player: lucas },
    loser: { format: 'singles', player: pedro },
    score: { type: 'normal', sets: [{ a: 6, b: 4 }, { a: 6, b: 3 }] },
    date: '2026-04-25T19:00:00Z',
    location: 'Arena RM – Beach · Nova Lima/MG',
    h2h_count: 1,
  },

  // 3. Resultado — 3 sets duplas com STB
  {
    id: 'event-result-3sets-stb',
    card_type: 'result',
    created_at: '2026-04-25T21:00:00Z',
    header: {
      header_type: 'org',
      org: arenaSunset,
      phase: 'Semifinal',
      competition_name: 'Copa BH de Beach Tennis',
      category: 'Duplas Masc. B',
      is_following: false,
    },
    winner: { format: 'doubles', players: [lucas, rafael] },
    loser: { format: 'doubles', players: [pedro, thiago] },
    score: {
      type: 'normal',
      sets: [{ a: 6, b: 4 }, { a: 4, b: 6 }, { a: 10, b: 7 }],
    },
    date: '2026-04-25T15:00:00Z',
    location: 'Arena Sunset · Carandaí/MG',
    h2h_count: 3,
  },

  // 4. Resultado — WO
  {
    id: 'event-result-wo',
    card_type: 'result',
    created_at: '2026-04-24T10:00:00Z',
    header: {
      header_type: 'org',
      org: arenaRM,
      phase: 'Rodada 1',
      competition_name: 'Ranking BH',
      category: 'Simples B',
      is_following: true,
    },
    winner: { format: 'singles', player: lucas },
    loser: { format: 'singles', player: pedro },
    score: { type: 'wo' },
    date: '2026-04-23T19:00:00Z',
    location: 'Arena RM – Beach · Nova Lima/MG',
    h2h_count: 0,
  },

  // 5. Resultado — Desistência (com set parcial jogado)
  {
    id: 'event-result-retired',
    card_type: 'result',
    created_at: '2026-04-23T20:00:00Z',
    header: {
      header_type: 'org',
      org: arenaRM,
      phase: 'Rodada 2',
      competition_name: 'Ranking BH',
      category: 'Simples B',
      is_following: true,
    },
    winner: { format: 'singles', player: lucas },
    loser: { format: 'singles', player: pedro },
    score: { type: 'retired', completed_sets: [{ a: 6, b: 2 }] },
    date: '2026-04-22T19:00:00Z',
    location: 'Arena RM – Beach · Nova Lima/MG',
    h2h_count: 0,
  },

  // 6. Confronto — Simples
  {
    id: 'event-match-singles',
    card_type: 'match',
    created_at: '2026-04-22T15:00:00Z',
    header: {
      header_type: 'org',
      org: arenaSunset,
      phase: 'QF',
      competition_name: 'Torneio Sunset',
      category: 'Simples Masc. B',
      is_following: false,
    },
    side_a: { format: 'singles', player: lucas, games: 274 },
    side_b: { format: 'singles', player: pedro, games: 188 },
    date: '2026-04-26T14:00:00Z',
    location: 'Arena Sunset · Carandaí/MG',
    cheer_a: 12,
    cheer_b: 8,
    user_cheer: null,
    h2h_count: 3,
  },

  // 7. Confronto — Duplas
  {
    id: 'event-match-doubles',
    card_type: 'match',
    created_at: '2026-04-21T16:00:00Z',
    header: {
      header_type: 'org',
      org: arenaSunset,
      phase: 'QF',
      competition_name: 'Torneio Sunset',
      category: 'Duplas Masc. B',
      is_following: false,
    },
    side_a: { format: 'doubles', players: [lucas, rafael], games: [274, 310] },
    side_b: { format: 'doubles', players: [pedro, thiago], games: [188, 220] },
    date: '2026-04-26T16:00:00Z',
    location: 'Arena Sunset · Carandaí/MG',
    cheer_a: 12,
    cheer_b: 8,
    user_cheer: 'a',
    h2h_count: 2,
  },

  // 8. Inscrição — Simples
  {
    id: 'event-enrollment-singles',
    card_type: 'enrollment',
    enrollment_format: 'singles',
    created_at: '2026-04-20T12:00:00Z',
    player: lucas,
    competition: {
      id: 'comp-copa-bh',
      name: 'Copa BH de Beach Tennis',
      category: 'Simples Masc. B',
      date_display: '20 e 21 de maio de 2026',
      location: 'Arena Sunset · Carandaí/MG',
      enrollment_count: 14,
      org_avatar_url: null,
    },
  },

  // 9. Inscrição — Duplas
  {
    id: 'event-enrollment-doubles',
    card_type: 'enrollment',
    enrollment_format: 'doubles',
    created_at: '2026-04-19T14:00:00Z',
    players: [lucas, rafael],
    competition: {
      id: 'comp-copa-bh-duplas',
      name: 'Copa BH de Beach Tennis',
      category: 'Duplas Mistas C',
      date_display: '20 e 21 de maio de 2026',
      location: 'Arena Sunset · Carandaí/MG',
      enrollment_count: 14,
      org_avatar_url: null,
    },
  },

  // 10. Nova Amizade
  {
    id: 'event-friendship',
    card_type: 'friendship',
    created_at: '2026-04-18T09:00:00Z',
    player_a: lucas,    // initiator
    player_b: pedro,
    user_is_friend_of_a: true,
    user_is_friend_of_b: false,
  },

  // 11. Ranking — Subiu
  {
    id: 'event-ranking-up',
    card_type: 'ranking',
    created_at: '2026-04-17T18:00:00Z',
    player: lucas,
    ranking_name: 'Ranking BH — Duplas Masc. B',
    position: 3,
    delta: 2,
    points: 520,
    movement: 'up',
  },

  // 12. Ranking — Desceu
  {
    id: 'event-ranking-down',
    card_type: 'ranking',
    created_at: '2026-04-16T18:00:00Z',
    player: pedro,
    ranking_name: 'Ranking BH — Simples B',
    position: 7,
    delta: 2,
    points: 380,
    movement: 'down',
  },

  // 13. Ranking — Marco (1ª posição)
  {
    id: 'event-ranking-milestone',
    card_type: 'ranking',
    created_at: '2026-04-15T18:00:00Z',
    player: lucas,
    ranking_name: 'Ranking BH — Duplas Masc. B',
    position: 1,
    delta: 1,
    points: 580,
    movement: 'milestone',
    milestone: 'leader',
  },
];
