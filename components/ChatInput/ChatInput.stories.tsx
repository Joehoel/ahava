import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Stack } from "tamagui";

import { ChatInput } from "#app/components";

const ChatInputMeta: ComponentMeta<typeof ChatInput> = {
	title: "ChatInput",
	component: ChatInput,
	args: {},
	decorators: [
		(Story) => (
			<Stack backgroundColor={"$background"} p="$1" f={1}>
				<Story />
			</Stack>
		),
	],
};

export default ChatInputMeta;

type ChatInputStory = ComponentStory<typeof ChatInput>;

export const SingleLine: ChatInputStory = (args) => (
	<ChatInput multiline={false} {...args}></ChatInput>
);
export const Multiline: ChatInputStory = (args) => (
	<ChatInput multiline {...args}></ChatInput>
);
