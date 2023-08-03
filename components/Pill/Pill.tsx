import { cloneElement, ReactElement, useContext } from "react";
import { getSize, getSpace } from "@tamagui/get-token";
import {
	createStyledContext,
	GetProps,
	SizeTokens,
	styled,
	Text,
	useTheme,
	withStaticProperties,
	XStack,
} from "tamagui";

export const PillContext = createStyledContext({
	size: "$md" as SizeTokens,
});

const PillFrame = styled(XStack, {
	name: "Pill",
	context: PillContext,
	backgroundColor: "$background",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 99999,
	alignSelf: "flex-start",

	variants: {
		size: {
			"...size": (name, { tokens }) => {
				return {
					height: tokens.size[name],
					// note the getSpace and getSize helpers will let you shift down/up token sizes
					// whereas with gap we just multiply by 0.2
					// this is a stylistic choice, and depends on your design system values
					gap: tokens.space[name].val * 0.2,
					paddingHorizontal: getSpace(name, {
						shift: 1,
					}),
				};
			},
		},
	} as const,

	defaultVariants: {
		size: "$3",
	},
});

export type PillProps = GetProps<typeof PillFrame>;

export const PillText = styled(Text, {
	name: "PillText",
	context: PillContext,
	userSelect: "none",
	color: "$color",
	variants: {
		size: {
			"...fontSize": (name, { font }) => ({
				fontSize: font?.size[name],
			}),
		},
	} as const,
});

export const PillIcon = (props: { children: ReactElement }) => {
	const { size } = useContext(PillContext.context);
	const smaller = getSize(size, {
		shift: -2,
	});
	const theme = useTheme();

	return cloneElement(props.children, {
		size: smaller?.val * 0.5,
		color: theme.color.get(),
	});
};

export const Pill = withStaticProperties(PillFrame, {
	Props: PillContext.Provider,
	Text: PillText,
	Icon: PillIcon,
});
