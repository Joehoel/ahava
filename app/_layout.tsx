import { Providers } from "#app/components";
import Constants from "expo-constants";
import { Slot } from "expo-router";

function Layout() {
	return (
		<Providers>
			<Slot />
		</Providers>
	);
}

// Storybook
let AppEntryPoint = Layout;

if (Constants?.expoConfig?.extra?.storybookEnabled === "true") {
	AppEntryPoint = require("../.ondevice").default;
}

export default AppEntryPoint;
