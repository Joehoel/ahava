import {
	AlignVerticalSpaceAround,
	Crown,
	Filter,
	Heart,
	MessageCircle,
	User,
} from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { Heading, Stack, useTheme } from "tamagui";

export default function Layout() {
	const theme = useTheme();

	return (
		<Tabs
			screenOptions={{
				headerTitle: () => (
					<Heading fontSize={"$8"} fontWeight={"400"}>
						ahava
					</Heading>
				),
				headerLeft: () => (
					<Stack p="$3" ml="$3" bg="$backgroundStrong" borderRadius={"$12"}>
						<Crown color={theme.yellow9.val} />
					</Stack>
				),
				headerRight: () => (
					<Stack p="$3" mr="$3" bg="$backgroundStrong" borderRadius={"$12"}>
						<Filter color={theme.color9.val} />
					</Stack>
				),
				headerStyle: {
					backgroundColor: theme.background.val,
				},
				headerShadowVisible: false,
				tabBarActiveTintColor: theme.purple8.val,
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon(props) {
						return <AlignVerticalSpaceAround {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="matches"
				options={{
					tabBarIcon(props) {
						return <Heart {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="messages"
				options={{
					tabBarIcon(props) {
						return <MessageCircle {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon(props) {
						return <User {...props} />;
					},
				}}
			/>
		</Tabs>
	);
}
