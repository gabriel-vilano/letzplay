import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AuthFormHeader } from "./AuthFormHeader";
import { TextLink } from "@/src/components/ui/TextLink";

const meta = {
  title: "Auth/AuthFormHeader",
  component: AuthFormHeader,
  parameters: {
    docs: {
      description: {
        component:
          "Header das telas de auth — título h1 + subtítulo opcional. Aceita ReactNode no subtitle pra incluir links inline.",
      },
    },
    layout: "padded",
  },
  args: {
    title: "Entrar",
    subtitle: "Use seu email e senha cadastrados.",
  },
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof AuthFormHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleAndSubtitle: Story = {};

export const TitleOnly: Story = {
  args: {
    subtitle: undefined,
  },
};

export const SubtitleWithLink: Story = {
  args: {
    title: "Crie sua conta",
    subtitle: (
      <>
        Já tem conta? <TextLink href="/entrar">Entre aqui</TextLink>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "subtitle aceita ReactNode — útil pra embedar TextLink ou outras inline actions sem quebrar o ritmo do parágrafo.",
      },
    },
  },
};

export const LongTitle: Story = {
  args: {
    title: "Recuperar acesso à sua conta",
    subtitle:
      "Vamos enviar um código de verificação pro email cadastrado. Esse código tem validade de 10 minutos.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Validação visual de comportamento com title longo (quebra de linha) e subtitle multi-linha.",
      },
    },
  },
};
