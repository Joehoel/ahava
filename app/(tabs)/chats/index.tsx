import { Link } from "expo-router";
import { H1, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export default function Chats() {
	return (
		<YStack flex={1} bg="$background">
			<H1>Chats</H1>

			<LinearGradient
				width="$6"
				height="$6"
				borderRadius="$4"
				start={[0, 0]}
				end={[1, 1]}
				zIndex={99}
				colors={["$background", "$cranberry"]}
			/>
			<Link href={"/chats/1"}>Hello World</Link>
		</YStack>
	);
}
