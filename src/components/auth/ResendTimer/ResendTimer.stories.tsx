import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { ResendTimer } from "./ResendTimer";

const meta = {
  title: "Auth/ResendTimer",
  component: ResendTimer,
  parameters: {
    docs: {
      description: {
        component:
          "Countdown de 60s antes de permitir reenvio. Inicia rodando (não tem prop pra controlar countdown externamente). Após zerar, vira botão clicável; em loading, fica desabilitado.",
      },
    },
    layout: "padded",
  },
  args: {
    onResend: fn(),
    loading: false,
  },
  argTypes: {
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof ResendTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountingDown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Estado inicial — timer começa em 60s e decresce. Espere 60s pra ver virar botão de reenvio (ou recarregue a story pra resetar).",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Quando `loading=true`, o botão de reenvio fica desabilitado mesmo após o countdown terminar — use durante a chamada async de reenvio.",
      },
    },
  },
};
