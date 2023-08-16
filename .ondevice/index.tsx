import { getStorybookUI } from "@storybook/react-native";
import React from "react";
import "./doctools";
import "./storybook.requires";
import { Providers } from "../components";

const StorybookUIRoot = getStorybookUI({});

export default () => {
  return (
    <Providers>
      <StorybookUIRoot />
    </Providers>
  );
};
