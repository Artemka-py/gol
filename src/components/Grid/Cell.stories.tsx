import React from "react";
import { Story, Meta } from "@storybook/react";

import { Cell, CellProps } from "./Cell";

export default {
  title: "Grid/Cell",
  component: Cell,
  argTypes: {
    color: { defaultValue: "green" },
  },
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const CellIsEmpty = Template.bind({});
CellIsEmpty.args = {
  color: "white",
};

export const CellIsFull = Template.bind({});
CellIsFull.args = {
  color: "black",
};
