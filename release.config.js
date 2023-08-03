module.exports = {
	branches: ["main"],
	plugins: [
		"semantic-release-react-native",
		[
			"@google/semantic-release-replace-plugin",
			{
				replacements: [
					{
						files: ["app.json"],
						from: '"version": ".*"',
						to: '"version": "${nextRelease.version}"',
					},
					{
						files: ["app.json"],
						from: '"buildNumber": ".*"',
						to: '"buildNumber": "${nextRelease.version}"',
					},
					{
						files: ["app.json"],
						from: `"versionCode": .*$`,
						to: (match) => {
							const hadComma = match.includes(",");
							const currVersion = parseInt(match.split(":")[1].trim()) || 0;
							const nextVersion = currVersion + 1;
							return `"versionCode": ${nextVersion}${hadComma ? "," : ""}`;
						},
					},
				],
			},
		],
		[
			"@semantic-release/commit-analyzer",
			{
				preset: "conventionalcommits",
			},
		],
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
		"@semantic-release/npm",
		"@semantic-release/github",
	],
};
