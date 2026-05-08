import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { TextLink } from "./TextLink";

const meta = {
  title: "UI/TextLink",
  component: TextLink,
  parameters: {
    docs: {
      description: {
        component:
          "Link textual com semântica adaptativa: vira <a> com next/link quando recebe href, vira <button> quando recebe onClick. Variante block ocupa largura total.",
      },
    },
  },
  argTypes: {
    block: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsLink: Story = {
  args: {
    href: "/",
    children: "Voltar para o início",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Com href, renderiza <Link> do next/link. Use pra navegação interna do app.",
      },
    },
  },
};

export const AsButton: Story = {
  args: {
    onClick: fn(),
    children: "Reenviar código",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Com onClick, renderiza <button>. Use pra ações que disparam efeito sem navegar.",
      },
    },
  },
};

export const Block: Story = {
  args: {
    onClick: fn(),
    block: true,
    children: "Texto centralizado em bloco",
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "block=true aplica display block + alinhamento centralizado. Útil em telas de auth onde o link aparece sozinho abaixo de um formulário.",
      },
    },
  },
};

export const InlineInProse: Story = {
  args: { href: "/", children: "Entre aqui" },
  render: () => (
    <p className="sb-prose">
      Já tem uma conta? <TextLink href="/entrar">Entre aqui</TextLink> para
      acessar seu perfil e ver seu ranking atual.
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Embedado dentro de prose. Texto continua o ritmo da linha e o link mantém o sublinhado por default.",
      },
    },
  },
};
