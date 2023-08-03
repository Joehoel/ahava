import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

const queryClient = new QueryClient();

import config from "../tamagui.config";

void SplashScreen.preventAutoHideAsync();

function Layout() {
	const colorScheme = useColorScheme();

	const [loaded] = useFonts({
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
		"Poppins-BoldItalic": require("../assets/fonts/Poppins-BoldItalic.otf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.otf"),
		"Poppins-MediumItalic": require("../assets/fonts/Poppins-MediumItalic.otf"),
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
		"Poppins-Italic": require("../assets/fonts/Poppins-Italic.otf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
		"Poppins-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.otf"),
		"Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.otf"),
		"Poppins-ExtraBoldItalic": require("../assets/fonts/Poppins-ExtraBoldItalic.otf"),
		"Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.otf"),
		"Poppins-ExtraLightItalic": require("../assets/fonts/Poppins-ExtraLightItalic.otf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
		"Poppins-LightItalic": require("../assets/fonts/Poppins-LightItalic.otf"),
		"Poppins-Thin": require("../assets/fonts/Poppins-Thin.otf"),
		"Poppins-ThinItalic": require("../assets/fonts/Poppins-ThinItalic.otf"),
		"Poppins-Black": require("../assets/fonts/Poppins-Black.otf"),
		"Poppins-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.otf"),

		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<TamaguiProvider config={config}>
				<Suspense fallback={<Text>Loading...</Text>}>
					<Theme name={colorScheme}>
						<ThemeProvider
							value={colorScheme === "light" ? DefaultTheme : DarkTheme}
						>
							<Slot />
						</ThemeProvider>
					</Theme>
				</Suspense>
			</TamaguiProvider>
		</QueryClientProvider>
	);
}

let AppEntryPoint = Layout;

if (Constants?.expoConfig?.extra?.storybookEnabled === "true") {
	AppEntryPoint = require("../.ondevice").default;
}

export default AppEntryPoint;
