const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.resolverMainFields = [
	"sbmodern",
	...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.resolver.sourceExts.push("mjs");

module.exports = defaultConfig;
