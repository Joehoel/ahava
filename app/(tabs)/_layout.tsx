import {
	AlignVerticalSpaceAround,
	Heart,
	MessageCircle,
	User,
} from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
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
