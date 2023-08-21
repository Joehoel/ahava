import Carousel from "react-native-reanimated-carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useWindowDimensions, YStack } from "tamagui";

import { PersonCard } from "#app/components";
import { PEOPLE } from "#app/constants/people";

export default function Home() {
	const dimensions = useWindowDimensions();
	const insets = useSafeAreaInsets();
	const tabBarHeight = useBottomTabBarHeight();

	return (
		<YStack pt={"$4"} f={1} bg="$background" py="$6">
			<Carousel
				data={PEOPLE}
				renderItem={({ item: person }) => <PersonCard person={person} />}
				width={dimensions.width}
				height={dimensions.height - insets.top - tabBarHeight * 2}
				vertical
				onSnapToItem={(index) => {
					// TODO: Remove previous
					console.log(index);
				}}
			/>
		</YStack>
	);
}
