import { LinearGradient } from "react-native-linear-gradient";
import { format } from "date-fns";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Stack, Text, useStyle, useTheme, YStack } from "tamagui";

type MessageProps = {
	isMe?: boolean;
	text: string;
	date: Date;
};

function Message({ isMe = false, text, date }: MessageProps) {
	const theme = useTheme();

	const { style } = useStyle(Stack, {
		borderRadius: "$5",
		borderBottomLeftRadius: isMe ? "$5" : "$0",
		borderBottomRightRadius: isMe ? "$0" : "$5",
		px: "$3",
		py: "$2.5",
		maxWidth: "70%",
	});

	const colors = isMe
		? ["#DD5E89", "#F7BB97"]
		: [theme.backgroundStrong.val, theme.backgroundStrong.val];

	return (
		<YStack alignSelf={isMe ? "flex-end" : "flex-start"} gap="$1.5">
			<LinearGradient
				style={style}
				colors={colors}
				start={{ x: 0.0, y: 0.0 }}
				end={{ x: 1, y: 1 }}
			>
				<Text theme={isMe ? "dark" : "light"}>{text}</Text>
			</LinearGradient>
			<Text
				fontSize={"$1"}
				textTransform="uppercase"
				color={"$muted"}
				alignSelf={isMe ? "flex-end" : "flex-start"}
			>
				{format(date, "hh:mm a")}
			</Text>
		</YStack>
	);
}

export default function Chat() {
	const { id } = useLocalSearchParams();

	return (
		<ScrollView
			px="$4"
			space="$4"
			backgroundColor={"$background"}
			contentInsetAdjustmentBehavior="automatic"
		>
			<Message isMe text="Hello Im derek" date={new Date()} />
			<Message
				date={new Date()}
				text="Deserunt aliquip voluptate aliquip in sit. Exercitation ipsum cillum sit irure tempor ut labore exercitation proident Lorem irure non. Aute commodo exercitation culpa cillum qui ea aute sit mollit exercitation. Exercitation ipsum irure veniam non enim officia ex ex anim in eu nostrud ullamco voluptate ut."
			/>
			<Message
				isMe
				date={new Date()}
				text="Deserunt aliquip voluptate aliquip in sit. Exercitation ipsum cillum sit irure tempor ut labore exercitation proident Lorem irure non. Aute commodo exercitation culpa cillum qui ea aute sit mollit exercitation. Exercitation ipsum irure veniam non enim officia ex ex anim in eu nostrud ullamco voluptate ut."
			/>
			<Message date={new Date()} text="Hello Im derek" />
		</ScrollView>
	);
}
