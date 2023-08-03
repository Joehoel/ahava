process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
			// NOTE: this is optional, you don't *need* the compiler
			[
				"transform-inline-environment-variables",
				// NOTE: include is optional, you can leave this part out
				{
					include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"],
				},
			],
			[
				"@tamagui/babel-plugin",
				{
					components: ["tamagui"],
					config: "./tamagui.config.ts",
					logTimings: true,
				},
			],
			// NOTE: this is only necessary if you are using reanimated for animations
			"expo-router/babel",
			"react-native-reanimated/plugin",
		],
	};
};
