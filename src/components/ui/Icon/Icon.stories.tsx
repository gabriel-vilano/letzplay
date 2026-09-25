import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  TrophyIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@phosphor-icons/react";
import { Icon } from "./Icon";

const meta = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          "Wrapper sobre @phosphor-icons/react. Tamanho via prop semântica (xs/sm/md/lg/xl), cor via currentColor (controlada pelo parent). Icons decorativos ficam aria-hidden por default; com aria-label viram semânticos.",
      },
    },
  },
  args: {
    icon: TrophyIcon,
    size: "md",
    weight: "regular",
  },
  argTypes: {
    icon: { control: false },
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    weight: {
      control: "inline-radio",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
    "aria-label": { control: "text" },
    "aria-hidden": { control: "boolean" },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllSizes: Story = {
  args: { "aria-label": "Trophy" },
  render: (args) => (
    <div className="sb-row">
      <Icon {...args} size="xs" />
      <Icon {...args} size="sm" />
      <Icon {...args} size="md" />
      <Icon {...args} size="lg" />
      <Icon {...args} size="xl" />
    </div>
  ),
};

export const AllWeights: Story = {
  args: { "aria-label": "Trophy" },
  render: (args) => (
    <div className="sb-row">
      <Icon {...args} weight="thin" />
      <Icon {...args} weight="light" />
      <Icon {...args} weight="regular" />
      <Icon {...args} weight="bold" />
      <Icon {...args} weight="fill" />
      <Icon {...args} weight="duotone" />
    </div>
  ),
};

export const Decorative: Story = {
  args: {
    icon: HeartIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sem aria-label, vira aria-hidden=true por default. Use quando o ícone for puramente decorativo e o significado já estiver no texto adjacente.",
      },
    },
  },
};

export const Labeled: Story = {
  args: {
    icon: MagnifyingGlassIcon,
    "aria-label": "Buscar",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Com aria-label, o ícone carrega significado semântico — leitores de tela anunciam o rótulo. Use quando o ícone substitui texto.",
      },
    },
  },
};

export const InheritsCurrentColor: Story = {
  args: {
    icon: BellIcon,
    "aria-label": "Notificações",
  },
  decorators: [
    (StoryFn) => (
      <div className="sb-color-accent">
        <StoryFn />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Icon usa currentColor — herda a cor do parent. Aqui um wrapper aplica color: foreground-accent e o ícone segue.",
      },
    },
  },
};
