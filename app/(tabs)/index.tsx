import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { TinderCard } from "rn-tinder-card";
import { Text, useWindowDimensions, View, YStack } from "tamagui";

import { PersonCard } from "#app/components";
import { PEOPLE } from "#app/constants/people";

export default function Home() {
	const dimensions = useWindowDimensions();
	const insets = useSafeAreaInsets();
	const tabBarHeight = useBottomTabBarHeight();

	const [previousIndex, setPreviousIndex] = useState<number>();
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const [people, setPeople] = useState(PEOPLE);

	console.log({ previousIndex, currentIndex });

	return (
		<YStack pt={"$4"} f={1} bg="$background" py="$6">
			{people.map((person) => (
				<View
					key={person.id}
					position="absolute"
					top={0}
					right={0}
					left={0}
					bottom={0}
					pointerEvents="box-none"
					jc="center"
					ai="center"
				>
					<TinderCard
						cardWidth={dimensions.width}
						cardHeight={dimensions.height - insets.top - tabBarHeight * 2}
						disableLeftSwipe
						disableRightSwipe
						OverlayLabelTop={() => (
							<View
								width={"100%"}
								borderRadius={"$9"}
								bg="$color.manhattan"
								height={"100%"}
								jc="center"
								ai="center"
							>
								<Text color="$white" fontWeight={"600"} fontSize={"$8"}>
									Like
								</Text>
							</View>
						)}
						OverlayLabelBottom={() => (
							<View
								width={"100%"}
								borderRadius={"$9"}
								bg="$color.cranberry"
								height={"100%"}
								jc="center"
								ai="center"
							>
								<Text color="$white" fontWeight={"600"} fontSize={"$8"}>
									Dislike
								</Text>
							</View>
						)}
					>
						<PersonCard person={person} />
					</TinderCard>
				</View>
			))}
			{/* <Carousel
				data={people}
				renderItem={({ item: person }) => <PersonCard person={person} />}
				width={dimensions.width}
				modeConfig={{
					parallaxAdjacentItemScale: 0.75,
					parallaxScrollingOffset: 0.1,
					parallaxScrollingScale: 1,
				}}
				overscrollEnabled={false}
				mode="parallax"
				height={dimensions.height - insets.top - tabBarHeight * 2}
				vertical
				onSnapToItem={(index) => {
					setCurrentIndex(i => i + 1);
					setPeople((prev) => {
						// Remove the item that was just swiped away make the indexes of the array match the indexes of the carousel
						const newPeople = [...prev];
						newPeople.splice(index, 1);
						return newPeople;
					});
				}}
			/> */}
		</YStack>
	);
}
