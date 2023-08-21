import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Stack } from "tamagui";

import { PersonCard } from "#app/components";

const PersonCardMeta: ComponentMeta<typeof PersonCard> = {
	title: "PersonCard",
	component: PersonCard,
	// args: {
	// 	person: {
	// 		name: "Hannah",
	// 		age: 23,
	// 		image:
	// 			"https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/242060596_450269776420062_925912809023593784_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=dg3g1YVIk0IAX-OnAtD&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjY2MTk1MDE3MDY3MTg5NDA5MQ%3D%3D.2-ccb7-5&oh=00_AfBSNfe5Iz7eWx4UqDef-ZqQ0BSeyq2PzydFltKyoFcdYg&oe=64D431C3&_nc_sid=b41fef",
	// 		location: "Ede, Gelderland",
	// 		hobbies: ["Kerk", "Muziek", "Lezen"],
	// 	},
	// },
	decorators: [
		(Story) => (
			<Stack backgroundColor={"$background"} p="$1" f={1}>
				<Story />
			</Stack>
		),
	],
};

export default PersonCardMeta;

type PersonCardStory = ComponentStory<typeof PersonCard>;

export const Basic: PersonCardStory = (args) => <PersonCard {...args}></PersonCard>;
