import { MapPin, MessageCircle, MoreVertical } from "@tamagui/lucide-icons";
import { BlurView } from "expo-blur";
import {
	H3,
	Image,
	Paragraph,
	Stack,
	Theme,
	useStyle,
	XStack,
	YStack,
} from "tamagui";

type Person = {
	name: string;
	age: number;
	location: string;
	image: string;
	hobbies: string[];
};

export type PersonCardProps = {
	person: Person;
};

export function PersonCard({ person }: PersonCardProps) {
	const { style } = useStyle(Stack, {
		position: "absolute",
		alignSelf: "stretch",
		padding: "$4",
		bottom: "$5",
		left: "$5",
		right: "$5",
		borderRadius: "$6",
		overflow: "hidden",
	});

	return (
		<YStack
			position="relative"
			f={1}
			mx="$3"
			borderRadius={"$9"}
			overflow="hidden"
		>
			<XStack
				position="absolute"
				top={0}
				width={"100%"}
				p="$3"
				jc="space-between"
				zIndex={99}
			>
				<Stack p="$2" borderRadius={"$12"} bg="$blue10Dark">
					<MessageCircle color="white" />
				</Stack>
				<Stack
					p="$2"
					borderRadius={"$12"}
					animation={"quick"}
					pressStyle={{
						backgroundColor: "rgba(255, 255, 255, 0.1)",
					}}
				>
					<MoreVertical color="white" />
				</Stack>
			</XStack>
			<Image
				source={require("../../assets/hannah.jpg")}
				f={1}
				resizeMode="cover"
			/>
			<BlurView intensity={40} tint="dark" style={style}>
				<XStack ai="center" gap="$4">
					<Stack
						borderRadius={75}
						borderWidth={2}
						borderColor={"white"}
						overflow="hidden"
					>
						<Image
							source={{
								uri: person.image,
								width: 75,
								height: 75,
							}}
							resizeMode="cover"
						/>
					</Stack>
					<Theme name="dark">
						<YStack>
							<H3 lineHeight={"$5"} fontWeight={"600"}>
								{person.name}, {person.age}
							</H3>
							<Paragraph>{person.hobbies.join(", ")}</Paragraph>
							<XStack gap="$1.5">
								<MapPin />
								<Paragraph>{person.location}</Paragraph>
							</XStack>
						</YStack>
					</Theme>
				</XStack>
			</BlurView>
		</YStack>
	);
}
