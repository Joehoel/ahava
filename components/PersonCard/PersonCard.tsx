import { LinearGradient } from "@tamagui/linear-gradient";
import { MapPin, MessageCircle, MoreVertical } from "@tamagui/lucide-icons";
import { BlurView } from "expo-blur";
import { H3, Image, Paragraph, ScrollView, Stack, Theme, useStyle, XStack, YStack } from "tamagui";
import { useWindowDimensions } from "tamagui";

import { Person } from "#app/constants/people";

export type PersonCardProps = {
	person: Person;
};

export function PersonCard({ person }: PersonCardProps) {
	const dimensions = useWindowDimensions();

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
		<ScrollView
			horizontal
			bounces={false}
			showsHorizontalScrollIndicator={false}
			snapToInterval={dimensions.width}
			position="relative"
			f={1}
			borderRadius={"$9"}
			overflow="hidden"
		>
			<YStack bg="$backgroundStrong" width={dimensions.width}>
				<XStack position="absolute" top={0} width={"100%"} p="$3" jc="space-between" zIndex={99}>
					<Stack p="$2.5" borderRadius={"$12"} overflow="hidden">
						<LinearGradient
							fullscreen
							colors={["$cranberry", "$manhattan"]}
							start={[0, 0]}
							end={[1, 1]}
						/>
						<MessageCircle color="white" />
					</Stack>
					<Stack p="$2.5" borderRadius={"$12"} overflow="hidden">
						<LinearGradient
							fullscreen
							colors={["$cranberry", "$manhattan"]}
							start={[0, 0]}
							end={[1, 1]}
						/>
						<MoreVertical color="white" />
					</Stack>
				</XStack>
				<Image source={{ uri: person.image }} f={1} resizeMode="cover" />
				<BlurView intensity={40} tint="dark" style={style}>
					<XStack ai="center" gap="$4">
						<Stack borderRadius={75} borderWidth={2} borderColor={"white"} overflow="hidden">
							<Image
								source={{
									uri: person.avatar,
									width: 75,
									height: 75,
								}}
								resizeMode="cover"
							/>
						</Stack>
						<Theme name="dark">
							<YStack>
								<H3 fontWeight={"600"} numberOfLines={1} ellipsizeMode="tail">
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
			<YStack bg="$backgroundStrong" p="$3" width={dimensions.width}>
				<XStack ai="center" gap="$4">
					<Stack borderRadius={75} borderWidth={2} borderColor={"white"} overflow="hidden">
						<Image
							source={{
								uri: person.avatar,
								width: 75,
								height: 75,
							}}
							resizeMode="cover"
						/>
					</Stack>
					<YStack>
						<H3 fontWeight={"600"} numberOfLines={1} ellipsizeMode="tail">
							{person.name}, {person.age}
						</H3>
						<Paragraph>{person.hobbies.join(", ")}</Paragraph>
					</YStack>
				</XStack>
				<Paragraph>Hier komt alle info over een persoon</Paragraph>
			</YStack>
		</ScrollView>
	);
}
