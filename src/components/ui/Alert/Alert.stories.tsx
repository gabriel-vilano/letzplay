import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert } from "./Alert";

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "Mensagem de status inline. Três status: information (azul), success (verde), attention (vermelho). Sempre tem título; descrição é opcional.",
      },
    },
  },
  args: {
    status: "information",
    title: "Mensagem informativa",
    description: "Texto adicional explicando o contexto.",
  },
  argTypes: {
    status: {
      control: "inline-radio",
      options: ["information", "success", "attention"],
    },
    title: { control: "text" },
    description: { control: "text" },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Information: Story = {};

export const Success: Story = {
  args: {
    status: "success",
    title: "Conta criada com sucesso",
    description: "Você já pode fazer login com seu email e senha.",
  },
};

export const Attention: Story = {
  args: {
    status: "attention",
    title: "Não foi possível concluir",
    description: "Verifique sua conexão e tente novamente.",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Mensagem curta sem descrição adicional",
    description: undefined,
  },
};

export const AllStatuses: Story = {
  render: (args) => (
    <div className="sb-stack">
      <Alert
        {...args}
        status="information"
        title="Information"
        description="Texto informativo neutro."
      />
      <Alert
        {...args}
        status="success"
        title="Success"
        description="Operação concluída com sucesso."
      />
      <Alert
        {...args}
        status="attention"
        title="Attention"
        description="Algo precisa da atenção do usuário."
      />
    </div>
  ),
};
