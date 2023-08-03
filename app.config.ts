import { ExpoConfig } from "expo/config";

export default ({ config }: { config: ExpoConfig }) => ({
	...config,
	extra: {
		storybookEnabled: process.env.STORYBOOK_ENABLED,
	},
});
