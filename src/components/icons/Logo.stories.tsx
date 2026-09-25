import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const meta = {
  title: "Brand/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          "Logo da marca LetzPlay. Carregado via next/image com priority. Tamanho fixo (208×56). Para variantes de tamanho, escalar via className do consumidor — o componente não expõe size por design.",
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnDarkBackground: Story = {
  decorators: [
    (StoryFn) => (
      <div className="sb-bg-strong sb-pad">
        <StoryFn />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Validação de contraste sobre fundo escuro. Se o logo for monocromático coral, deve continuar legível.",
      },
    },
  },
};
