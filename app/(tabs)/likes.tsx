import { MessageCircle } from "@tamagui/lucide-icons";
import { Avatar, ScrollView, Text, XStack, YStack } from "tamagui";

type LikedCardProps = {
	name: string;
};

function LikedCard({ name }: LikedCardProps) {
	return (
		<XStack
			p="$4"
			bg="$backgroundStrong"
			borderRadius={"$6"}
			gap={"$4"}
			ai="center"
		>
			<Avatar circular>
				<Avatar.Image source={require("../../assets/hannah.jpg")} />
			</Avatar>
			{/* Info */}
			<YStack gap="$1" f={1}>
				<Text fontWeight={"600"} fontSize={"$4"} f={1}>
					{name}
				</Text>
				<Text
					color={"$muted"}
					fontSize={"$3"}
					lineBreakMode="tail"
					lineBreakStrategyIOS="standard"
					numberOfLines={2}
					ellipsizeMode="tail"
					f={1}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
					quisquam nobis delectus a facere minima id praesentium molestias
					corrupti sequi!
				</Text>
			</YStack>
			{/* Chat button */}
			<XStack
				ai="center"
				gap="$1"
				alignSelf="center"
				px="$3"
				py="$2"
				borderWidth="$0.75"
				borderColor="$primary"
				marginLeft="auto"
				borderRadius={"$5"}
			>
				<MessageCircle size="$1" />
				<Text>Chat</Text>
			</XStack>
		</XStack>
	);
}

export default function Likes() {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			f={1}
			bg="$background"
			px="$4"
			space="$4"
		>
			<LikedCard name="Frank Visser" />
			<LikedCard name="Frank Visser" />
			<LikedCard name="Frank Visser" />
			<LikedCard name="Frank Visser" />
			<LikedCard name="Frank Visser" />
		</ScrollView>
	);
}
