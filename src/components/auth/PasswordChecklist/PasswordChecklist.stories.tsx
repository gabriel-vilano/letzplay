import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PasswordChecklist } from "./PasswordChecklist";

const meta = {
  title: "Auth/PasswordChecklist",
  component: PasswordChecklist,
  parameters: {
    docs: {
      description: {
        component:
          "Lista de requisitos de senha com estado por item (atendido / pendente / erro). `submitted=true` muda pendentes pra erro — use após o usuário tentar submeter.",
      },
    },
    layout: "padded",
  },
  args: {
    submitted: false,
    checks: { minLength: false, hasLetter: false, hasNumber: false },
  },
  argTypes: {
    submitted: { control: "boolean" },
  },
} satisfies Meta<typeof PasswordChecklist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPending: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Estado inicial — usuário ainda não digitou nada. Todos pendentes (cinza, círculo vazio).",
      },
    },
  },
};

export const PartiallyMet: Story = {
  args: {
    checks: { minLength: true, hasLetter: true, hasNumber: false },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Usuário digitou 'minhasenha' — atende minLength e hasLetter, mas não hasNumber.",
      },
    },
  },
};

export const AllMet: Story = {
  args: {
    checks: { minLength: true, hasLetter: true, hasNumber: true },
  },
  parameters: {
    docs: {
      description: {
        story: "Senha válida — todos requisitos atendidos.",
      },
    },
  },
};

export const SubmittedWithErrors: Story = {
  args: {
    checks: { minLength: true, hasLetter: false, hasNumber: false },
    submitted: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Após o usuário tentar submeter (`submitted=true`), itens não-atendidos viram erro (vermelho, ícone X) em vez de pendentes neutros.",
      },
    },
  },
};

export const Progression: Story = {
  render: () => (
    <div className="sb-stack">
      <PasswordChecklist
        checks={{ minLength: false, hasLetter: false, hasNumber: false }}
        submitted={false}
      />
      <PasswordChecklist
        checks={{ minLength: true, hasLetter: false, hasNumber: false }}
        submitted={false}
      />
      <PasswordChecklist
        checks={{ minLength: true, hasLetter: true, hasNumber: false }}
        submitted={false}
      />
      <PasswordChecklist
        checks={{ minLength: true, hasLetter: true, hasNumber: true }}
        submitted={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Progressão visual conforme o usuário digita: 0/3 → 1/3 → 2/3 → 3/3.",
      },
    },
  },
};
