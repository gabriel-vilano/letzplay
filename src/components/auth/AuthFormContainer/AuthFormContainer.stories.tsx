import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { AuthFormContainer } from "./AuthFormContainer";
import { AuthFormHeader } from "@/src/components/auth/AuthFormHeader/AuthFormHeader";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";

const meta = {
  title: "Auth/AuthFormContainer",
  component: AuthFormContainer,
  parameters: {
    docs: {
      description: {
        component:
          "Wrapper das telas de auth — main com largura/espaçamento padronizados. Contém AuthFormHeader, FormInputs e botões.",
      },
    },
    layout: "fullscreen",
  },
} satisfies Meta<typeof AuthFormContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="sb-stack">
        <AuthFormHeader
          title="Entrar"
          subtitle="Use seu email e senha cadastrados."
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value=""
          placeholder="voce@exemplo.com"
          onChange={fn()}
        />
        <FormInput
          label="Senha"
          name="password"
          type="password"
          value=""
          placeholder="Digite sua senha"
          onChange={fn()}
        />
        <Button variant="primary" fullWidth>
          Entrar
        </Button>
      </div>
    ),
  },
};
