import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { AvatarUpload } from "./AvatarUpload";

const meta = {
  title: "Auth/AvatarUpload",
  component: AvatarUpload,
  parameters: {
    docs: {
      description: {
        component:
          "Upload de avatar com preview inline. Estado (preview/erro) é interno via useState — interaja clicando pra abrir o file picker. Para forçar estados visuais específicos sem refactor, ver nota em 'Design rationale' no MDX.",
      },
    },
    layout: "centered",
  },
  args: {
    onFileSelect: fn(),
  },
} satisfies Meta<typeof AvatarUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Estado inicial — sem avatar. Mostra ícone `+` e label 'Adicionar foto'. Clique abre o file picker do browser.",
      },
    },
  },
};
