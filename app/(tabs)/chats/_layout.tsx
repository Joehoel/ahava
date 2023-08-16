import { Stack } from "expo-router";
import { useTheme } from "tamagui";

export default function Layout() {
	const theme = useTheme();

	return (
		<Stack
			screenOptions={{
				title: "Chats",
				headerStyle: {
					backgroundColor: theme.background.val,
				},
				headerTintColor: "#DD5E89",
				headerBackTitleVisible: false,
				headerBlurEffect: "prominent",
				headerTransparent: true,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="[id]"
				options={{
					headerBackVisible: true,
				}}
			/>
		</Stack>
	);
}
