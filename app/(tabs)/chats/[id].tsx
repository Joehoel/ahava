/* eslint-disable react/prop-types */

import { useCallback, useRef, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import { Check, CheckCheck, Send } from "@tamagui/lucide-icons";
import { format } from "date-fns";
import { useFocusEffect } from "expo-router";
import {
	ScrollView,
	Stack,
	styled,
	Text,
	TextArea,
	useStyle,
	useTheme,
	XStack,
	YStack,
} from "tamagui";
import { match } from "ts-pattern";
import { z } from "zod";

const AvoidKeyboard = styled(KeyboardAvoidingView);

const message = z.object({
	id: z.number(),
	createdAt: z.date(),
	text: z.string(),
	user: z.object({
		id: z.number(),
		name: z.string(),
	}),
	sent: z.boolean().optional(),
	received: z.boolean().optional(),
});

type Message = z.infer<typeof message>;

const MESSAGES: Message[] = [
	{
		id: 1,
		createdAt: new Date(),
		text: "In nulla elit irure laboris aliqua. Ad sit et nulla. Laborum incididunt nostrud veniam nostrud adipisicing exercitation quis occaecat excepteur. Consequat dolore minim enim qui consectetur et ad occaecat consectetur nulla veniam est magna. Fugiat ad voluptate culpa enim labore excepteur consequat occaecat laborum id consequat elit. Id dolor ipsum velit velit minim elit ullamco consectetur.",
		user: { id: 1, name: "Frank Visser" },
	},
	{
		id: 2,
		createdAt: new Date(),
		text: "In nulla elit irure laboris aliqua. Ad sit et nulla. Laborum incididunt nostrud veniam nostrud adipisicing exercitation quis occaecat excepteur. Consequat dolore minim enim qui consectetur et ad occaecat consectetur nulla veniam est magna. Fugiat ad voluptate culpa enim labore excepteur consequat occaecat laborum id consequat elit. Id dolor ipsum velit velit minim elit ullamco consectetur.",
		user: { id: 2, name: "Hannah Kuijper" },
		sent: true,
		received: true,
	},
	{
		id: 3,
		createdAt: new Date(),
		text: "In nulla elit irure laboris aliqua. Ad sit et nulla. Laborum incididunt nostrud veniam nostrud adipisicing exercitation quis occaecat excepteur. Consequat dolore minim enim qui consectetur et ad occaecat consectetur nulla veniam est magna. Fugiat ad voluptate culpa enim labore excepteur consequat occaecat laborum id consequat elit. Id dolor ipsum velit velit minim elit ullamco consectetur.",
		user: { id: 1, name: "Frank Visser" },
		sent: true,
		received: true,
	},
	{
		id: 4,
		createdAt: new Date(),
		text: "In nulla elit irure laboris aliqua. Ad sit et nulla. Laborum incididunt nostrud veniam nostrud adipisicing exercitation quis occaecat excepteur. Consequat dolore minim enim qui consectetur et ad occaecat consectetur nulla veniam est magna. Fugiat ad voluptate culpa enim labore excepteur consequat occaecat laborum id consequat elit. Id dolor ipsum velit velit minim elit ullamco consectetur.",
		user: { id: 2, name: "Hannah Kuijper" },
		sent: true,
		received: false,
	},
	{
		id: 5,
		createdAt: new Date(),
		text: "In nulla elit irure laboris aliqua. Ad sit et nulla. Laborum incididunt nostrud veniam nostrud adipisicing exercitation quis occaecat excepteur. Consequat dolore minim enim qui consectetur et ad occaecat consectetur nulla veniam est magna. Fugiat ad voluptate culpa enim labore excepteur consequat occaecat laborum id consequat elit. Id dolor ipsum velit velit minim elit ullamco consectetur.",
		user: { id: 2, name: "Hannah Kuijper" },
		sent: true,
		received: false,
	},
];

type MessageProps = {
	isMe?: boolean;
	text: string;
	date: Date;
	received?: boolean;
	sent?: boolean;
};

function Message({ isMe = false, text, date, received = false, sent = false }: MessageProps) {
	const theme = useTheme();

	const { style } = useStyle(Stack, {
		borderRadius: "$5",
		borderBottomLeftRadius: isMe ? "$5" : "$0",
		borderBottomRightRadius: isMe ? "$0" : "$5",
		px: "$3",
		py: "$2.5",
		alignSelf: isMe ? "flex-end" : "flex-start",
		// bg: isMe ? "$backgroundStrong" : "$background",
	});

	const colors = isMe
		? ["#DD5E89", "#F7BB97"]
		: [theme.backgroundStrong.val.toString(), theme.backgroundStrong.val.toString()];

	return (
		<YStack alignSelf={isMe ? "flex-end" : "flex-start"} maxWidth={"80%"} gap="$1.5">
			<LinearGradient style={style} colors={colors} start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1 }}>
				<Text theme={isMe ? "dark" : "light"}>{text}</Text>
			</LinearGradient>
			<XStack alignSelf={isMe ? "flex-end" : "flex-start"} gap="$2" ai="center">
				<Text fontSize={"$1"} textTransform="uppercase" color={"$muted"}>
					{format(date, "hh:mm a")}
				</Text>
				{match({ sent, received, isMe })
					.with(
						{
							isMe: true,
							received: true,
						},
						() => <CheckCheck size={12} color={theme.muted.val.toString()} />
					)
					.with(
						{
							isMe: true,
							received: false,
							sent: true,
						},
						() => <Check size={12} color={theme.muted.val.toString()} />
					)
					.otherwise(() => null)}
				{/* {sent && <Check size={12} color={theme.muted.val} />}
				{received && <CheckCheck size={12} color={theme.primary.val} />} */}
			</XStack>
		</YStack>
	);
}

export default function Chat() {
	const [messages, setMessages] = useState(MESSAGES);

	const { style: listStyle } = useStyle(ScrollView, {
		padding: "$4",
		gap: "$4",
		backgroundColor: "$background",
	});

	const { style } = useStyle(Stack, {
		borderRadius: "$5",
		p: "$3",
		ai: "center",
		jc: "center",
		aspectRatio: 1,
		flexGrow: 0,
		flexShrink: 0,
	});

	const colors = ["#DD5E89", "#F7BB97"];

	const theme = useTheme();

	const ref = useRef<FlatList>(null);

	const [text, setText] = useState("");

	const scrollToBottom = useCallback(() => {
		ref.current?.scrollToEnd({ animated: false });
	}, []);

	const onSend = (message: string) => {
		setMessages((msgs) => [
			...msgs,
			{
				id: msgs.length + 1,
				createdAt: new Date(),
				text: message,
				user: { id: 2, name: "Hannah Kuijper" },
				sent: true,
				received: true,
			},
		]);

		setText("");
	};

	useFocusEffect(() => {
		scrollToBottom();
	});

	return (
		<YStack f={1}>
			<FlatList
				ref={ref}
				keyboardShouldPersistTaps={Platform.select({
					ios: "never",
					android: "always",
					default: "never",
				})}
				keyboardDismissMode={"on-drag"}
				contentInsetAdjustmentBehavior="automatic"
				scrollEventThrottle={16}
				onContentSizeChange={scrollToBottom}
				style={{ backgroundColor: theme.background.val.toString() }}
				data={messages}
				contentContainerStyle={listStyle}
				renderItem={({ item: message }) => (
					<Message
						isMe={message.user.id === 2}
						text={message.text}
						date={message.createdAt}
						sent={message.sent}
						received={message.received}
					/>
				)}
			/>

			<XStack
				// behavior={Platform.OS === "ios" ? "padding" : "height"}
				flexDirection="row"
				p="$2"
				bg="$background"
				maxHeight={"50%"}
				ai="flex-end"
				space="$2"
			>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<TextArea
						accessibilityLabel="Message input"
						onChangeText={setText}
						placeholder="Message..."
						textAlignVertical="top"
						returnKeyType="send"
						value={text}
						blurOnSubmit={false}
						onSubmitEditing={(event) => {
							event.preventDefault();
							onSend(text);
						}}
						maxLength={2000}
						bg="$backgroundStrong"
						lineHeight={18}
						fontSize={"$4"}
						paddingTop="$3"
						paddingBottom="$3"
						numberOfLines={1}
						flex={1}
						height={"100%"}
						// borderColor={"$backgroundStrong"}
					/>
				</KeyboardAvoidingView>
				<TouchableOpacity onPress={() => onSend(text)}>
					<LinearGradient
						start={{ x: 0.0, y: 0.0 }}
						end={{ x: 1, y: 1 }}
						colors={colors}
						style={style}
					>
						<Send color="white" />
					</LinearGradient>
				</TouchableOpacity>
			</XStack>
		</YStack>
	);
}
