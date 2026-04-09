# DESIGN_SYSTEM.md — LetzPlay

Documento vivo do design system. Registra decisões de arquitetura, tokens, tipografia e componentes.
Atualizar sempre que uma decisão de design for tomada ou um componente for adicionado ao sistema.

---

## Arquitetura CSS

### Abordagem

CSS customizado com **CSS Modules** para escopo de componente e **CSS Custom Properties** para design tokens.
Sem Tailwind. Sem CSS-in-JS.

### Estrutura de arquivos

```
styles/
  tokens/
    primitives.css     ← valores brutos (paleta, escala, motion)
    semantic.css       ← intenções de design (background, foreground, border, state)
  reset.css            ← normalização do browser
  globals.css          ← importa tudo, define base do documento
components/
  NomeComponente/
    NomeComponente.tsx
    NomeComponente.module.css
```

### Regras fundamentais

- **Primitivos nunca são usados diretamente em componentes.** Componentes sempre referenciam tokens semânticos.
- **Tokens semânticos apontam para primitivos.** Nunca para valores brutos.
- **CSS Modules para tudo que é componente.** Nenhum estilo de componente em arquivos globais.
- **BEM dentro dos `.module.css`.** Nomenclatura: `.card__header`, `.btn--primary`.
- **State layers via `::after`.** Hover, press e focus são camadas semitransparentes sobrepostas — não variações de cor calculadas por componente.
- **`:focus-visible` obrigatório.** Nunca remover outline sem substituir com `:focus-visible`.

---

## Tokens primitivos

Arquivo: `styles/tokens/primitives.css`

Valores brutos sem semântica. Nunca usar diretamente em componentes.

### Família tipográfica

| Token | Valor |
|---|---|
| `--font-sans` | `"Arimo", system-ui, sans-serif` |

Fonte: Arimo (Google Fonts), variável 400–700. Carregada via `next/font` no `layout.tsx`.
Variável CSS injetada pelo Next.js: `--font-arimo`.

### Tamanhos de fonte

| Token | rem | px |
|---|---|---|
| `--font-size-xs` | 0.625rem | 10px |
| `--font-size-sm` | 0.75rem | 12px |
| `--font-size-body` | 0.875rem | 14px — base do corpo |
| `--font-size-md` | 1rem | 16px |
| `--font-size-lg` | 1.25rem | 20px |
| `--font-size-xl` | 1.5rem | 24px |
| `--font-size-2xl` | 1.875rem | 30px |
| `--font-size-3xl` | 2.25rem | 36px |
| `--font-size-4xl` | 2.875rem | 46px |

### Pesos

| Token | Valor |
|---|---|
| `--font-weight-regular` | 400 |
| `--font-weight-bold` | 600 |

### Line-heights

Valores absolutos (não relativos) para ritmo vertical consistente independente do font-size.

| Token | rem | px |
|---|---|---|
| `--line-height-xs` | 1rem | 16px |
| `--line-height-sm` | 1.25rem | 20px |
| `--line-height-md` | 1.5rem | 24px |
| `--line-height-lg` | 1.75rem | 28px |
| `--line-height-xl` | 2rem | 32px |
| `--line-height-2xl` | 2.5rem | 40px |
| `--line-height-3xl` | 2.875rem | 46px |
| `--line-height-4xl` | 3.5rem | 56px |

### Letter-spacing

| Token | Valor | Uso |
|---|---|---|
| `--font-letter-spacing-none` | 0px | padrão |
| `--font-letter-spacing-display` | -0.6px | títulos grandes |
| `--font-letter-spacing-signal` | 0.5px | badges, labels |

### Espaçamento — escala base-8

| Token | Valor |
|---|---|
| `--spacing-0` | 0px |
| `--spacing-25` | 2px |
| `--spacing-50` | 4px |
| `--spacing-75` | 6px |
| `--spacing-100` | 8px |
| `--spacing-125` | 10px |
| `--spacing-150` | 12px |
| `--spacing-200` | 16px |
| `--spacing-250` | 20px |
| `--spacing-300` | 24px |
| `--spacing-400` | 32px |
| `--spacing-450` | 36px |
| `--spacing-500` | 40px |
| `--spacing-600` | 48px |
| `--spacing-700` | 56px |
| `--spacing-800` | 64px |
| `--spacing-page-margin` | 16px |
| `--spacing-page-gutter` | 8px |

### Dimensões fixas

| Token | Valor | Uso |
|---|---|---|
| `--dimension-tap-target-minimum` | 48px | WCAG — área mínima tocável |
| `--dimension-action-height-sm` | 32px | botão pequeno |
| `--dimension-action-height-md` | 40px | botão médio (padrão) |
| `--dimension-action-height-lg` | 48px | botão grande |
| `--dimension-icon-xs` | 12px | |
| `--dimension-icon-sm` | 16px | |
| `--dimension-icon-md` | 24px | padrão |
| `--dimension-icon-lg` | 32px | |
| `--dimension-icon-xl` | 64px | |

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | 0px | |
| `--radius-sm` | 4px | chips, tags |
| `--radius-md` | 8px | inputs, botões pequenos |
| `--radius-lg` | 16px | cards |
| `--radius-xl` | 24px | modais, bottom sheets |
| `--radius-full` | 9999px | pill, avatar |
| `--radius-form-input` | `var(--radius-md)` | inputs de formulário |
| `--radius-card` | `var(--radius-lg)` | cards |
| `--radius-popover` | `var(--radius-lg)` | popovers |

### Border width

| Token | Valor |
|---|---|
| `--border-width-thin` | 0.5px |
| `--border-width-medium` | 1px |
| `--border-width-thick` | 2px |

### Sombras

| Token | Uso |
|---|---|
| `--shadow-subtle` | cards, elementos elevados levemente |
| `--shadow-strong` | modais, popovers, bottom sheets |

### Opacidade — para state layers

| Token | Valor |
|---|---|
| `--opacity-50` | 0.04 |
| `--opacity-100` | 0.08 |
| `--opacity-150` | 0.12 |
| `--opacity-200` | 0.16 |

### Motion — durações

| Token | Valor | Uso |
|---|---|---|
| `--motion-duration-instant` | 17ms | sem percepção |
| `--motion-duration-short-1` | 50ms | micro-interações |
| `--motion-duration-short-2` | 83ms | |
| `--motion-duration-short-3` | 167ms | transições rápidas |
| `--motion-duration-medium-1` | 250ms | padrão de UI |
| `--motion-duration-medium-2` | 333ms | |
| `--motion-duration-medium-3` | 500ms | transições longas |
| `--motion-duration-long-1` | 667ms | animações elaboradas |
| `--motion-duration-long-2` | 833ms | |
| `--motion-duration-long-3` | 1000ms | |

### Motion — easings

| Token | Valor | Uso |
|---|---|---|
| `--motion-easing-linear` | `cubic-bezier(0, 0, 1, 1)` | progresso, loads |
| `--motion-easing-standard` | `cubic-bezier(0.3, 0, 0, 1)` | maioria das transições |
| `--motion-easing-continuous` | `cubic-bezier(0.3, 0, 0.7, 1)` | loops |
| `--motion-easing-quick-enter` | `cubic-bezier(0, 0, 0, 1)` | elementos entrando |
| `--motion-easing-quick-exit` | `cubic-bezier(1, 0, 1, 1)` | elementos saindo |
| `--motion-easing-soft-enter` | `cubic-bezier(0, 0, 0.7, 1)` | entrada suave |
| `--motion-easing-soft-exit` | `cubic-bezier(0.3, 0, 1, 1)` | saída suave |
| `--motion-easing-bounce` | `cubic-bezier(0.3, 0, 0, 1.25)` | feedback de ação |

### Breakpoints

| Token | Valor |
|---|---|
| `--breakpoint-sm` | 512px |
| `--breakpoint-md` | 600px |
| `--breakpoint-lg` | 800px |
| `--breakpoint-xl` | 1100px |

### Paleta de cores

Escala de 8 stops por família. 100 = mais claro, 800 = mais escuro.

**Neutral**

| Token | Valor |
|---|---|
| `--color-neutral-100` | #ffffff |
| `--color-neutral-200` | #f7f7f7 |
| `--color-neutral-300` | #e5e5e5 |
| `--color-neutral-400` | #c7c7c7 |
| `--color-neutral-500` | #8f8f8f |
| `--color-neutral-600` | #707070 |
| `--color-neutral-700` | #363636 |
| `--color-neutral-800` | #191919 |

**Coral — cor de marca**

| Token | Valor |
|---|---|
| `--color-coral-100` | #fff7f5 |
| `--color-coral-200` | #ffe1d7 |
| `--color-coral-300` | #ffa78a |
| `--color-coral-400` | #ff6a38 |
| `--color-coral-500` | #f3511b ← brand primary |
| `--color-coral-600` | #d03706 |
| `--color-coral-700` | #5e1d08 |
| `--color-coral-800` | #2f0e04 |

**Kiwi — success**

| Token | Valor |
|---|---|
| `--color-kiwi-100` | #f6fef6 |
| `--color-kiwi-200` | #e0fae0 |
| `--color-kiwi-300` | #a6f0a5 |
| `--color-kiwi-400` | #4ce160 |
| `--color-kiwi-500` | #3cc14e |
| `--color-kiwi-600` | #288034 |
| `--color-kiwi-700` | #1b561a |
| `--color-kiwi-800` | #0c310d |

**Red — attention / error**

| Token | Valor |
|---|---|
| `--color-red-100` | #fff5f5 |
| `--color-red-200` | #ffdede |
| `--color-red-300` | #ffa0a0 |
| `--color-red-400` | #ff5c5c |
| `--color-red-500` | #f02d2d |
| `--color-red-600` | #d50b0b |
| `--color-red-700` | #570303 |
| `--color-red-800` | #2a0303 |

**Blue — informação, links**

| Token | Valor |
|---|---|
| `--color-blue-100` | #f5f9ff |
| `--color-blue-200` | #d4e5fe |
| `--color-blue-300` | #84b4fb |
| `--color-blue-400` | #4d93fc |
| `--color-blue-500` | #0968f6 |
| `--color-blue-600` | #0049b8 |
| `--color-blue-650` | #003aa5 |
| `--color-blue-700` | #002a69 |
| `--color-blue-800` | #19133a |

**Yellow — warning**

| Token | Valor |
|---|---|
| `--color-yellow-100` | #fffcf5 |
| `--color-yellow-200` | #fff8d5 |
| `--color-yellow-300` | #ffe58a |
| `--color-yellow-400` | #ffbd14 |
| `--color-yellow-500` | #eebb04 |
| `--color-yellow-600` | #855f00 |
| `--color-yellow-700` | #553b06 |
| `--color-yellow-800` | #312102 |

---

## Tokens semânticos

Arquivo: `styles/tokens/semantic.css`

Intenções de design. Sempre apontam para primitivos. Usados diretamente nos componentes.

### Escala tipográfica semântica

Os tokens de tipografia são definidos por propriedade individual (size, weight, line-height).
Nos componentes, usar as propriedades separadas — nunca o shorthand `font:`.

**Por que não usar o shorthand `font:` nos componentes:**
O shorthand redefine todas as sub-propriedades da fonte (incluindo `font-variant`, `font-stretch`),
dificultando sobrescritas pontuais. Os tokens individuais mantêm a composabilidade.

| Escala | Size | Weight | Line-height | Tracking | Uso no produto |
|---|---|---|---|---|---|
| `display-1` | `--font-size-4xl` | bold | `--line-height-4xl` | display | números de ranking, scores |
| `display-2` | `--font-size-3xl` | bold | `--line-height-3xl` | display | |
| `display-3` | `--font-size-2xl` | bold | `--line-height-2xl` | display | |
| `title-1` | `--font-size-xl` | bold | `--line-height-xl` | — | nome do jogador no perfil |
| `title-2` | `--font-size-lg` | bold | `--line-height-lg` | — | cabeçalho de seção |
| `title-3` | `--font-size-md` | bold | `--line-height-md` | — | subtítulo |
| `body-lg` | `--font-size-md` | regular | `--line-height-md` | — | corpo grande |
| `body` | `--font-size-body` | regular | `--line-height-sm` | — | conteúdo, feed |
| `body-bold` | `--font-size-body` | bold | `--line-height-sm` | — | nome do torneio |
| `caption` | `--font-size-sm` | regular | `--line-height-xs` | — | datas, metadata |
| `caption-bold` | `--font-size-sm` | bold | `--line-height-xs` | — | labels secundários |
| `signal` | `--font-size-xs` | bold | `--line-height-xs` | signal | badges, status, pills |

Exemplo de uso num componente:

```css
/* RankingCard.module.css */
.position {
  font-size: var(--text-display-1-size);
  font-weight: var(--text-display-1-weight);
  line-height: var(--text-display-1-line-height);
  letter-spacing: var(--text-display-1-tracking);
}

.playerName {
  font-size: var(--text-title-1-size);
  font-weight: var(--text-title-1-weight);
  line-height: var(--text-title-1-line-height);
}
```

### Cores — background

| Token | Primitivo | Uso |
|---|---|---|
| `--color-background-primary` | `--color-neutral-100` | superfície principal (branco) |
| `--color-background-secondary` | `--color-neutral-200` | superfície secundária |
| `--color-background-tertiary` | `--color-neutral-300` | divisores, skeleton |
| `--color-background-elevated` | `--color-neutral-100` | modais, cards elevados |
| `--color-background-inverse` | `--color-neutral-700` | fundo escuro |
| `--color-background-strong` | `--color-neutral-800` | fundo muito escuro |
| `--color-background-accent` | `--color-coral-500` | coral — ação principal |
| `--color-background-attention` | `--color-red-600` | erro, destructive |
| `--color-background-success` | `--color-kiwi-600` | confirmação |
| `--color-background-disabled` | `--color-neutral-400` | desabilitado |
| `--color-background-accent-subtle` | `--color-coral-100` | coral claro — highlight sutil |
| `--color-background-attention-subtle` | `--color-red-100` | erro sutil |
| `--color-background-success-subtle` | `--color-kiwi-100` | sucesso sutil |

### Cores — foreground

| Token | Primitivo | Uso |
|---|---|---|
| `--color-foreground-primary` | `--color-neutral-800` | texto principal |
| `--color-foreground-secondary` | `--color-neutral-600` | texto secundário, metadata |
| `--color-foreground-disabled` | `--color-neutral-400` | texto desabilitado |
| `--color-foreground-accent` | `--color-coral-500` | destaques, links de ação |
| `--color-foreground-attention` | `--color-red-600` | erros, alertas |
| `--color-foreground-success` | `--color-kiwi-600` | confirmações |
| `--color-foreground-on-accent` | `--color-neutral-100` | texto branco sobre coral |
| `--color-foreground-on-attention` | `--color-neutral-100` | texto branco sobre vermelho |
| `--color-foreground-on-success` | `--color-neutral-100` | texto branco sobre verde |
| `--color-foreground-on-inverse` | `--color-neutral-100` | texto branco sobre fundo escuro |
| `--color-foreground-on-strong` | `--color-neutral-100` | |
| `--color-foreground-on-disabled` | `--color-neutral-100` | |
| `--color-foreground-link` | `--color-blue-500` | links padrão |

### Cores — border

| Token | Primitivo | Uso |
|---|---|---|
| `--color-border-subtle` | `--color-neutral-300` | separadores leves |
| `--color-border-medium` | `--color-neutral-500` | bordas padrão de inputs |
| `--color-border-strong` | `--color-neutral-700` | bordas com ênfase |
| `--color-border-inverse` | `--color-neutral-100` | borda sobre fundo escuro |
| `--color-border-accent` | `--color-coral-500` | input em foco |
| `--color-border-attention` | `--color-red-600` | input inválido |
| `--color-border-success` | `--color-kiwi-600` | input válido |
| `--color-border-disabled` | `--color-neutral-400` | input desabilitado |
| `--color-border-on-accent` | `--color-neutral-100` | |
| `--color-border-on-attention` | `--color-neutral-100` | |
| `--color-border-on-success` | `--color-neutral-100` | |
| `--color-border-on-disabled` | `--color-neutral-100` | |
| `--color-border-on-inverse` | `--color-neutral-100` | |

### State layers

Camadas de interação aplicadas via `::after` como overlay semitransparente.
Funcionam em qualquer cor de fundo sem calcular variações por componente.

| Token | Valor | Uso |
|---|---|---|
| `--color-state-layer-neutral` | `rgba(0,0,0,0)` | repouso — transparente |
| `--color-state-layer-hover` | `rgba(0,0,0,0.04)` | hover |
| `--color-state-layer-focus` | `rgba(0,0,0,0.04)` | foco de teclado |
| `--color-state-layer-pressed` | `rgba(0,0,0,0.08)` | press / active |
| `--color-state-layer-selected` | `rgba(0,0,0,0.12)` | item selecionado |
| `--color-state-layer-hover-on-strong` | `rgba(255,255,255,0.12)` | hover sobre fundo escuro |
| `--color-state-layer-focus-on-strong` | `rgba(255,255,255,0.12)` | foco sobre fundo escuro |
| `--color-state-layer-pressed-on-strong` | `rgba(255,255,255,0.16)` | press sobre fundo escuro |
| `--color-state-layer-selected-on-strong` | `rgba(255,255,255,0.20)` | selecionado sobre fundo escuro |
| `--color-state-focus-ring` | `#005fcc` | outline de foco por teclado |

Padrão de implementação nos componentes:

```css
.btn {
  overflow: hidden;
  position: relative;
}

.btn::after {
  background-color: var(--color-state-layer-neutral);
  content: "";
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.btn:hover::after    { background-color: var(--color-state-layer-hover); }
.btn:active::after   { background-color: var(--color-state-layer-pressed); }

.btn:focus-visible {
  outline: var(--border-width-thick) solid var(--color-state-focus-ring);
  outline-offset: var(--spacing-25);
}

.btn:focus:not(:focus-visible) {
  outline: none;
}
```

### Outros tokens semânticos

| Token | Primitivo | Uso |
|---|---|---|
| `--color-brand` | `--color-coral-500` | cor de marca |
| `--color-scrim` | `rgba(0,0,0,0.3)` | overlay de modais e bottom sheets |
| `--color-loading-fill` | `#ededed` | skeleton loader |
| `--color-loading-first` | `--color-neutral-200` | |
| `--color-loading-second` | `--color-neutral-300` | |

---

## Padrões de implementação

### Override tokens por componente

Para componentes que precisam de customização contextual, use double-fallback:

```css
.textbox {
  background-color: var(
    --textbox-background-color,        /* override local — definido pelo consumidor */
    var(--color-background-secondary)  /* semântico — fallback padrão */
  );
}
```

O consumidor pode customizar sem reescrever o componente:

```css
.search-context .textbox {
  --textbox-background-color: var(--color-background-primary);
}
```

### Acessibilidade — tap target

Todo elemento interativo deve ter área mínima tocável de `var(--dimension-tap-target-minimum)` (48px).
Se o elemento for visualmente menor, usar `min-height` ou `padding` para expandir a área de toque.
