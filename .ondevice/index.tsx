import React from "react";
import { getStorybookUI } from "@storybook/react-native";
import "./doctools";
import "./storybook.requires";
import { TamaguiProvider } from "tamagui";

import config from "../tamagui.config";

const StorybookUIRoot = getStorybookUI({});

export default () => (
  <TamaguiProvider config={config}>
    <StorybookUIRoot />
  </TamaguiProvider>
);
