import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScoreBlock } from "./ScoreBlock";
import { feedFrame } from "../storyFixtures";

const meta = {
  title: "Feed/ScoreBlock",
  component: ScoreBlock,
  decorators: [feedFrame],
  args: {
    score: { type: "normal", sets: [{ a: 6, b: 4 }] },
  },
} satisfies Meta<typeof ScoreBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneSet: Story = {};

export const TwoSets: Story = {
  args: {
    score: { type: "normal", sets: [{ a: 6, b: 4 }, { a: 6, b: 3 }] },
  },
};

export const ThreeSetsWithTiebreak: Story = {
  args: {
    score: {
      type: "normal",
      sets: [{ a: 6, b: 4 }, { a: 4, b: 6 }, { a: 10, b: 7 }],
    },
  },
};

// W.O. como está hoje: placar placeholder 0 × 0 (em discussão em outra issue).
export const WalkOver: Story = {
  args: { score: { type: "wo" } },
};

export const RetiredAfterOneSet: Story = {
  args: { score: { type: "retired", completed_sets: [{ a: 6, b: 2 }] } },
};

export const RetiredBeforeFirstSet: Story = {
  args: { score: { type: "retired", completed_sets: [] } },
};
