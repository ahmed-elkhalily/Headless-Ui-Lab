import type { Meta, StoryObj } from "@storybook/react-vite";

import { New } from "./New";

const meta = {
  title: "Example/New",
  component: New,
  tags: ["autodocs"],
  parameters: {
    variant: "primary",
  },
} satisfies Meta<typeof New>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "New",
  },
};
