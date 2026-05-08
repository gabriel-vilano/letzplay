import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonLink } from "./ButtonLink";

const meta = {
  title: "UI/ButtonLink",
  component: ButtonLink,
  parameters: {
    docs: {
      description: {
        component:
          "Mesmo visual do Button, mas semântica de link (<a> via next/link). Use quando a ação é navegar pra outra rota — preserva acessibilidade nativa de links (cmd+click, abrir em nova aba).",
      },
    },
  },
  args: {
    href: "/feed",
    variant: "primary",
    children: "Ir para o feed",
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost"],
    },
    fullWidth: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: "padded" },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="sb-row">
      <ButtonLink {...args} variant="primary">
        Primary
      </ButtonLink>
      <ButtonLink {...args} variant="secondary">
        Secondary
      </ButtonLink>
      <ButtonLink {...args} variant="ghost">
        Ghost
      </ButtonLink>
    </div>
  ),
};
