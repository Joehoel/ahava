module.exports = {
	branches: ["main"],
	plugins: [
		[
			"@semantic-release/release-notes-generator",
			{
				preset: "conventionalcommits",
				presetConfig: {
					types: [
						{
							type: "feat",
							section: ":sparkles: Features",
							hidden: false,
						},
						{
							type: "fix",
							section: ":bug: Fixes",
							hidden: false,
						},
						{
							type: "docs",
							section: ":memo: Documentation",
							hidden: false,
						},
						{
							type: "ci",
							section: ":repeat: CI",
							hidden: false,
						},
						{
							type: "chore",
							section: ":broom: Chore",
							hidden: false,
						},
					],
				},
			},
		],
		[
			"semantic-release-expo",
			{
				versions: {
					version: "${next.raw}",
					android: "${increment}",
					ios: "${next.raw}",
				},
			},
		],
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		[
			"@semantic-release/git",
			{
				assets: [
					"CHANGELOG.md",
					"package.json",
					"yarn.lock",
					"app.json",
					"android/app/build.gradle",
					"ios/**/Info.plist",
					"ios/**/*.pbxproj",
				],
				message:
					"chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
			},
		],
	],
};
