import {
	Crown,
	Filter,
	Heart,
	Home,
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
				tabBarActiveTintColor: theme.primary.val,
				tabBarShowLabel: false,
				headerTitleStyle: {
					fontFamily: "Poppins-Medium",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerTitleAlign: "center",
					headerTitle: () => (
						<Heading fontSize={"$8"} fontWeight={"400"}>
							ahava
						</Heading>
					),
					headerLeft: () => (
						<Stack p="$3" ml="$3" bg="$backgroundStrong" borderRadius={"$12"}>
							<Crown color={theme.color.val} />
						</Stack>
					),
					headerRight: () => (
						<Stack p="$3" mr="$3" bg="$backgroundStrong" borderRadius={"$12"}>
							<Filter color={theme.color.val} />
						</Stack>
					),
					headerStyle: {
						backgroundColor: theme.background.val,
					},
					headerShadowVisible: false,
					tabBarIcon(props) {
						return <Home {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="likes"
				options={{
					headerShown: true,
					title: "People have liked you",
					headerTitleAlign: "left",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: theme.background.val,
					},
					tabBarIcon(props) {
						return <Heart {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="chats"
				options={{
					headerShown: false,
					tabBarIcon(props) {
						return <MessageCircle {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					tabBarIcon(props) {
						return <User {...props} />;
					},
				}}
			/>
		</Tabs>
	);
}
