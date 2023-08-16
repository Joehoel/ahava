import { Link } from "expo-router";
import { H1, ScrollView, YStack } from "tamagui";

export default function Chats() {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			f={1}
			bg="$background"
		>
			<H1>Chats</H1>
			<Link href={"/chats/1"}>Hello World</Link>
		</ScrollView>
	);
}
