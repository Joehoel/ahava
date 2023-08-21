import { createAnimations } from "@tamagui/animations-moti";
import { createInterFont } from "@tamagui/font-inter";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { tokens as defaultTokens } from "@tamagui/themes";
import { createFont, createTamagui, createTheme, createTokens } from "tamagui";

const media = createMedia({
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
});

const tokens = createTokens({
	...defaultTokens,
	color: {
		white: "#FFFFFF",
		black: "#000000",
		cranberry: "#9B1B30",
		manhattan: "#F7BB97",
		fantasy: "#FAF0F0",
		zircon: "#F3F7FF",
		cod: "#1C1C1C",
		cinder: "#151515",
		dusty: "#949494",
		dawn: "#a5a5a5",
		transparent: "#00000000",
	},
});

const light = createTheme({
	primary: tokens.color.cranberry,
	secondary: tokens.color.manhattan,
	background: tokens.color.fantasy,
	backgroundStrong: tokens.color.white,
	borderColor: tokens.color.zircon,
	borderColorFocus: tokens.color.cranberry,
	muted: tokens.color.dusty,
	color: tokens.color.cod,
	colorPress: tokens.color.cranberry,
	transparent: tokens.color.transparent,
});

type BaseTheme = typeof light;

const dark = createTheme<BaseTheme>({
	primary: tokens.color.cranberry,
	secondary: tokens.color.manhattan,
	background: tokens.color.cinder,
	backgroundStrong: tokens.color.black,
	borderColor: tokens.color.zircon,
	borderColorFocus: tokens.color.cranberry,
	color: tokens.color.white,
	colorPress: tokens.color.cranberry,
	muted: tokens.color.dawn,
	transparent: tokens.color.transparent,
});

const allThemes = { light, dark };

type ThemeName = keyof typeof allThemes;

type Themes = {
	[key in ThemeName]: BaseTheme;
};

export const themes: Themes = allThemes;

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
	defaultTheme: "light",
	excludeReactNativeWebExports: false,
	shouldAddPrefersColorThemes: false,
	themeClassNameOnRoot: false,
	shorthands,
	fonts: {
		heading: headingFont,
		body: bodyFont,
	},
	themes,
	tokens,
	media,
});

// const config = createTamagui({
// 	animations,
// 	defaultTheme: "dark",
// 	excludeReactNativeWebExports: false,
// 	shouldAddPrefersColorThemes: false,
// 	themeClassNameOnRoot: false,
// 	shorthands,
// 	fonts: {
// 		heading: headingFont,
// 		body: bodyFont,
// 	},
// 	themes: {
// 		...defaultThemes,
// 		light: {
// 			...defaultThemes.light,
// 			background: "#FAF0F0",
// 		},
// 	},
// 	tokens,
// 	media,
// });

export type AppConfig = typeof config;

declare module "tamagui" {
	// overrides TamaguiCustomConfig so your custom types
	// work everywhere you import `tamagui`
	interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
