import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createFont, createTamagui } from "tamagui";

const animations = createAnimations({
	bouncy: {
		type: "spring",
		damping: 10,
		mass: 0.9,
		stiffness: 100,
	},
	lazy: {
		type: "spring",
		damping: 20,
		stiffness: 60,
	},
	quick: {
		type: "spring",
		damping: 20,
		mass: 1.2,
		stiffness: 250,
	},
});

const bodyFont = createInterFont();

const headingFont = createFont({
	family: "Poppins",
	lineHeight: bodyFont.lineHeight,
	size: bodyFont.size,
	weight: bodyFont.weight,
	letterSpacing: bodyFont.letterSpacing,
	face: {
		100: { normal: "Poppins-Thin", italic: "Poppins-ThinItalic" },
		200: { normal: "Poppins-ExtraLight", italic: "Poppins-ExtraLightItalic" },
		300: { normal: "Poppins-Light", italic: "Poppins-LightItalic" },
		400: { normal: "Poppins-Regular", italic: "Poppins-Italic" },
		500: { normal: "Poppins-Medium", italic: "Poppins-MediumItalic" },
		600: { normal: "Poppins-SemiBold", italic: "Poppins-SemiBoldItalic" },
		700: { normal: "Poppins-Bold", italic: "Poppins-BoldItalic" },
		800: { normal: "Poppins-ExtraBold", italic: "Poppins-ExtraBoldItalic" },
		900: { normal: "Poppins-Black", italic: "Poppins-BlackItalic" },
	},
});

const config = createTamagui({
	animations,
	defaultTheme: "dark",
	shouldAddPrefersColorThemes: false,
	themeClassNameOnRoot: false,
	shorthands,
	fonts: {
		heading: headingFont,
		body: bodyFont,
	},
	themes: {
		...themes,
		light: {
			...themes.light,
			background: "#F3F7FF",
		},
	},
	tokens,
	media: createMedia({
		xs: { maxWidth: 660 },
		sm: { maxWidth: 800 },
		md: { maxWidth: 1020 },
		lg: { maxWidth: 1280 },
		xl: { maxWidth: 1420 },
		xxl: { maxWidth: 1600 },
		gtXs: { minWidth: 660 + 1 },
		gtSm: { minWidth: 800 + 1 },
		gtMd: { minWidth: 1020 + 1 },
		gtLg: { minWidth: 1280 + 1 },
		short: { maxHeight: 820 },
		tall: { minHeight: 820 },
		hoverNone: { hover: "none" },
		pointerCoarse: { pointer: "coarse" },
	}),
});

export type AppConfig = typeof config;

declare module "tamagui" {
	// overrides TamaguiCustomConfig so your custom types
	// work everywhere you import `tamagui`
	interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
