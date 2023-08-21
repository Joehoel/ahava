import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, Check as CheckIcon, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Checkbox, getFontSize, Label, Select, Sheet, Stack, XStack, YStack } from "tamagui";

import { Filter } from "#app/components";

const FilterMeta: ComponentMeta<typeof Filter> = {
	title: "Filter",
	component: Filter,
	args: {},
	decorators: [
		(Story) => (
			<Stack backgroundColor={"$background"} p="$4" f={1}>
				<Story />
			</Stack>
		),
	],
};

export default FilterMeta;

type FilterStory = ComponentStory<typeof Filter>;

const colors = ["#DD5E89", "#F7BB97"];

export const Gender: FilterStory = (args) => (
	<Filter {...args}>
		<Filter.Title>Who do you want to date?</Filter.Title>
		<Filter.Content>
			<XStack ai="center" jc="space-between">
				<Label f={1} htmlFor="18-20">
					Im open to date everyone
				</Label>
				<Checkbox id="18-20" bg="$backgroundStrong" overflow="hidden" size={"$5"} defaultChecked>
					<Checkbox.Indicator>
						<CheckIcon size="$1" />
					</Checkbox.Indicator>
				</Checkbox>
			</XStack>
			<Filter.Divider />
			<XStack ai="center" jc="space-between">
				<Label f={1} htmlFor="18-20">
					Im open to date everyone
				</Label>
				<Checkbox id="18-20" bg="$backgroundStrong" overflow="hidden" size={"$5"} defaultChecked>
					<Checkbox.Indicator>
						<CheckIcon size="$1" />
					</Checkbox.Indicator>
				</Checkbox>
			</XStack>
		</Filter.Content>
	</Filter>
);

export const AgeRange: FilterStory = (args) => (
	<Filter {...args}>
		<Filter.Title>Age range</Filter.Title>
		<Filter.Content>
			<Checkbox id="18-20">
				<Checkbox.Indicator>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox>
		</Filter.Content>
	</Filter>
);

export const Selection: FilterStory = (args) => (
	<Filter {...args}>
		<Filter.Title>Age range</Filter.Title>
		<Select defaultValue="">
			<Select.Trigger bg="$backgroundStrong">
				<Select.Value placeholder="Select language" />
			</Select.Trigger>

			<Adapt when="sm" platform="touch">
				<Sheet
					native
					modal
					dismissOnSnapToBottom
					// animationConfig={{
					// 	type: "spring",
					// 	damping: 20,
					// 	mass: 1.2,
					// 	stiffness: 250,
					// }}
				>
					<Sheet.Frame bg="$backgroundStrong">
						<Sheet.Handle />
						<Sheet.ScrollView>
							<Adapt.Contents />
						</Sheet.ScrollView>
					</Sheet.Frame>
					<Sheet.Overlay />
				</Sheet>
			</Adapt>

			<Select.Content zIndex={999}>
				<Select.ScrollUpButton
					alignItems="center"
					justifyContent="center"
					position="relative"
					width="100%"
					height="$3"
				>
					<YStack zIndex={10}>
						<ChevronUp size={20} />
					</YStack>
					<LinearGradient
						start={[0, 0]}
						end={[0, 1]}
						fullscreen
						colors={["$background", "$backgroundTransparent"]}
						borderRadius="$4"
					/>
				</Select.ScrollUpButton>

				<Select.Viewport minWidth={200}>
					<Select.Group>
						<Select.Label>Fruits</Select.Label>
						<Select.Item value="apple" index={0}>
							<Select.ItemText>Apple</Select.ItemText>
							<Select.ItemIndicator marginLeft="auto">
								<Check size={16} />
							</Select.ItemIndicator>
						</Select.Item>
					</Select.Group>
				</Select.Viewport>
				<Select.ScrollDownButton
					alignItems="center"
					justifyContent="center"
					position="relative"
					width="100%"
					height="$3"
				>
					<YStack zIndex={10}>
						<ChevronDown size={20} />
					</YStack>
					<LinearGradient
						start={[0, 0]}
						end={[0, 1]}
						fullscreen
						colors={["$backgroundTransparent", "$background"]}
						borderRadius="$4"
					/>
				</Select.ScrollDownButton>
			</Select.Content>
		</Select>
	</Filter>
);
