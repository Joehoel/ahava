import { ReactNode } from "react";
import { ChevronRight } from "@tamagui/lucide-icons";
import { H4, Paragraph, useTheme, XStack, YStack } from "tamagui";

export type ProfileCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
	onPress: () => void;
};

export function ProfileCard({ title, description, onPress, icon }: ProfileCardProps) {
	const theme = useTheme();

	return (
		<YStack onPress={onPress} bg="$backgroundStrong" gap="$1" p="$4" borderRadius={"$6"}>
			<XStack ai="center" gap="$4">
				<YStack f={1}>
					<XStack ai="center" gap="$4">
						{icon}
						<H4 fontWeight={"600"}>{title}</H4>
					</XStack>
					<Paragraph color="$muted">{description}</Paragraph>
				</YStack>
				<ChevronRight color={theme.muted.variable} />
			</XStack>
		</YStack>
	);
}
