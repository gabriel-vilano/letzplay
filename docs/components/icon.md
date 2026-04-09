# Icon

**Arquivo:** `src/components/ui/Icon/`  
**Dependência:** `@phosphor-icons/react`  
**Branch de origem:** `chore/icon-setup`

---

## Visão geral

Wrapper sobre o Phosphor Icons que encapsula as convenções do design system: tamanhos semânticos, pesos, cor via `currentColor` e acessibilidade por padrão. Nenhum componente do projeto importa o Phosphor diretamente — todo acesso passa por este componente.

---

## Estrutura de arquivos

```
src/components/ui/Icon/
  Icon.tsx
  Icon.module.css
  types.ts
  index.ts
```

---

## Props

| Prop          | Tipo                | Default     | Descrição                                              |
| ------------- | ------------------- | ----------- | ------------------------------------------------------ |
| `icon`        | `React.ElementType` | —           | Componente Phosphor (ex: `Trophy`, `User`)             |
| `size`        | `IconSize`          | `'md'`      | Tamanho semântico                                      |
| `weight`      | `IconWeight`        | `'regular'` | Peso do ícone                                          |
| `className`   | `string`            | —           | Classe adicional para cor ou posicionamento contextual |
| `aria-label`  | `string`            | —           | Descrição para ícones com significado semântico        |
| `aria-hidden` | `boolean`           | `true`      | Oculta o ícone de leitores de tela por padrão          |

---

## Tipos

```ts
type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
```

---

## Mapeamento de tamanhos

Alinhado com os tokens de dimensão em `docs/TOKENS.md`.

| Token semântico | px  | Token CSS                      |
| --------------- | --- | ------------------------------ |
| `xs`            | 12  | `--dimension-icon-xs`          |
| `sm`            | 16  | `--dimension-icon-sm`          |
| `md`            | 24  | `--dimension-icon-md` — padrão |
| `lg`            | 32  | `--dimension-icon-lg`          |
| `xl`            | 64  | `--dimension-icon-xl`          |

---

## Pesos disponíveis (Phosphor)

| Peso      | Uso típico                                |
| --------- | ----------------------------------------- |
| `thin`    | Decorativo, contextos de muita delicadeza |
| `light`   | Hierarquia secundária                     |
| `regular` | Padrão — uso geral                        |
| `bold`    | Ênfase, contextos compactos               |
| `fill`    | Estado ativo (tab bar, toggle ligado)     |
| `duotone` | Ilustrativo, contextos especiais          |

---

## Exemplos de uso

```tsx
import { Trophy, MagnifyingGlass, ArrowRight } from '@phosphor-icons/react'
import { Icon } from '@/components/ui/Icon'

// Decorativo — padrão, aria-hidden implícito
<Icon icon={Trophy} size="md" weight="regular" />

// Estado ativo — tab bar selecionada
<Icon icon={Trophy} size="md" weight="fill" />

// Com significado semântico — sem texto visível ao redor
<Icon icon={MagnifyingGlass} size="sm" aria-label="Buscar" aria-hidden={false} />

// Dentro de botão — aria-label vai no <button>, não no <Icon>
<button aria-label="Continuar">
  <Icon icon={ArrowRight} size="sm" />
</button>

// Cor contextual — herdada do pai via currentColor
<span className={styles.errorMessage}>
  <Icon icon={WarningCircle} size="sm" />
  Email inválido
</span>
```

---

## Acessibilidade

| Cenário                                              | Configuração                                         |
| ---------------------------------------------------- | ---------------------------------------------------- |
| Ícone puramente decorativo (acompanha texto visível) | `aria-hidden={true}` — default, não precisa declarar |
| Ícone com significado próprio (sem texto visível)    | `aria-label="descrição"` + `aria-hidden={false}`     |
| Botão com apenas ícone, sem texto                    | `aria-label` no `<button>`, não no `<Icon>`          |

---

## Cor

O componente **nunca define cor**. O Phosphor usa `color="currentColor"` internamente, portanto o ícone sempre herda a cor do elemento pai via CSS.

```css
/* Correto — cor definida no consumidor */
.navItem {
  color: var(--color-foreground-secondary);
}
.navItem--active {
  color: var(--color-foreground-accent);
}

/* Errado — nunca fazer isso */
.icon {
  color: var(--color-foreground-accent); /* hardcoded no componente */
}
```

---

## Decisões de design

**Por que Phosphor em vez de Lucide?**  
O Phosphor tem suporte nativo a fill como variante separada (`weight="fill"`), desenhada especificamente para funcionar preenchida — não apenas o mesmo path com `fill` aplicado via CSS. Isso é necessário para o padrão de tab bar ativo/inativo do LetzPlay.

**Por que wrapper em vez de importar o Phosphor direto?**  
Centraliza os tamanhos semânticos, o peso padrão e as props de acessibilidade. Se amanhã o tamanho `md` mudar de 24px para 20px, muda em um lugar só.

**Por que `currentColor` em vez de prop `color`?**  
Composabilidade. O ícone se comporta como texto — herda a cor do contexto onde está inserido. Isso elimina sincronização manual de cor entre ícone e label.

**Ícones customizados de marca**  
Logos e ícones específicos do LetzPlay que não existem no Phosphor ficam em `src/components/icons/` como SVGs próprios, fora deste componente.
