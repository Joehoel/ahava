import { Pill } from "@components";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Ruler, TextCursor } from "@tamagui/lucide-icons";
import { Stack, XStack } from "tamagui";

const PillMeta: ComponentMeta<typeof Pill> = {
	title: "Pill",
	component: Pill,
	args: {
		theme: "light",
	},
	decorators: [
		(Story) => (
			<Stack p="$6">
				<Story />
			</Stack>
		),
	],
};

export default PillMeta;

type PillStory = ComponentStory<typeof Pill>;

export const Basic: PillStory = (args) => (
	<Pill {...args}>
		<Pill.Icon>
			<Ruler />
		</Pill.Icon>
		<Pill.Text>206 cm</Pill.Text>
	</Pill>
);

export const Orange: PillStory = (args) => (
	<Pill {...args} theme="orange_active">
		<Pill.Icon>
			<Ruler />
		</Pill.Icon>
		<Pill.Text>206 cm</Pill.Text>
	</Pill>
);

export const LongText: PillStory = (args) => (
	<Pill {...args}>
		<Pill.Icon>
			<TextCursor />
		</Pill.Icon>
		<Pill.Text>amet culpa velit ipsum laboris</Pill.Text>
	</Pill>
);

export const List: PillStory = (args) => (
	<XStack gap="$1" flexWrap="wrap">
		{Array.from({ length: 5 }).map((_, i) => (
			<Pill {...args} key={i}>
				<Pill.Icon>
					<Ruler />
				</Pill.Icon>
				<Pill.Text>206 cm</Pill.Text>
			</Pill>
		))}
	</XStack>
);
