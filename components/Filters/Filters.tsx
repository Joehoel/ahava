import { styled, Text, View, withStaticProperties, YStack } from "tamagui";

export const FilterFrame = styled(YStack, {
	gap: "$2",
});

const FilterTitle = styled(Text, {
	fontWeight: "600",
	fontSize: "$5",
});

const FilterContent = styled(YStack, {
	backgroundColor: "$backgroundStrong",
	padding: "$4",
	borderRadius: "$5",
});

const FilterDivider = styled(View, {
	height: 1,
	backgroundColor: "$borderColor",
	width: "100%",
	marginVertical: "$3",
});

export const Filter = withStaticProperties(FilterFrame, {
	Title: FilterTitle,
	Content: FilterContent,
	Divider: FilterDivider,
});
