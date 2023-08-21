import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Hand, Instagram, User, Wine } from "@tamagui/lucide-icons";
import { Avatar, H3, ScrollView, Text, XStack, YStack } from "tamagui";

import { ProfileCard } from "#app/components";

export default function Profile() {
	const insets = useSafeAreaInsets();

	return (
		<ScrollView bg="$background" space="$6" pt={insets.top}>
			<YStack ai="center" gap={"$2"}>
				<Avatar circular size={"$10"} borderColor={"$backgroundStrong"} borderWidth={"$1.5"}>
					<Avatar.Image resizeMode="cover" source={require("../../assets/hannah.jpg")} />
				</Avatar>

				<H3 fontWeight={"600"}>Hannah Kuijper, 23</H3>
				<Text color="$muted" fontSize={"$5"}>
					Believe in God
				</Text>
				<XStack ai="center" gap={"$1"}>
					<Instagram size="$1" />
					<Text textDecorationLine="underline">@hannahkuijper</Text>
				</XStack>
			</YStack>
			<YStack px="$4" gap="$4">
				<ProfileCard
					title="Personal Information"
					description="Edit your information like birthday, age, height, weight etc."
					icon={<User />}
					onPress={() => {
						console.log("Personal information");
					}}
				/>
				<ProfileCard
					title="Faith & Lifestyle"
					description="Add your work, education, favorite sport or exercise etc."
					icon={<Wine />}
					onPress={() => {
						console.log("Faith & Lifestyle");
					}}
				/>
				<ProfileCard
					title="Values & Expectations"
					description="What are you looking for in your partner? Core values etc."
					icon={<Hand />}
					onPress={() => {
						console.log("Values & Expectations");
					}}
				/>
				<XStack p="$4" borderRadius={"$5"} bg="$backgroundStrong">
					<Text fontWeight={"600"} color="$primary" fontSize={"$6"}>
						Logout
					</Text>
				</XStack>
			</YStack>
		</ScrollView>
	);
}
