import { ReactNode, useRef, useState } from "react";
import { FlatList, StyleSheet, View, ViewToken, useWindowDimensions } from "react-native";
import { globalStyle, variables } from "../../shared/globalStyles";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Timeline from "./Timeline";
import { Button } from "../ui";

type OnboardingControllerOptions = {
    items: ReactNode[],
    initialIndex?: number
}

export default function OnboardingController({items, initialIndex}: OnboardingControllerOptions) {

    const slidesRef = useAnimatedRef<FlatList>()
    const x = useSharedValue(0)
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0)
    const { width } = useWindowDimensions()

    const viewableItemsChanged = ({viewableItems}: {viewableItems: ViewToken[]}) => {
        setCurrentIndex(() => viewableItems[0].index || 0)
    }

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x
        },
    })

    const goToIndex = (index: number) => {
        if (index >= 0 && index < items.length) {
            slidesRef.current?.scrollToIndex({index})
        }
    }

    const nextStep = () => goToIndex(currentIndex + 1)

    const prevStep = () => goToIndex(currentIndex - 1)

    return (
        <View style={globalStyle.mainContainer}>
            <Animated.FlatList 
                data={items}
                renderItem={({item}) => <View style={[styles.itemContainer, {width}]}>{item}</View>}
                scrollEventThrottle={16}
                bounces={false}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={slidesRef}
                onScroll={onScroll}
                onViewableItemsChanged={viewableItemsChanged}
            />

            <View style={styles.bottomContainer}>
                <Timeline 
                    items={items.length} 
                    currentIndex={currentIndex} 
                />
                <View style={styles.actionsContainer}>
                    <View style={styles.buttonContainer}>
                        {currentIndex > 0 && <Button title="B" size="xl" onPress={prevStep} />}
                    </View>
                    <View style={[styles.buttonContainer, styles.mainButtonContainer]}>
                        <Button title="Suivant" size="xl" variant="light" onPress={nextStep} />
                    </View>
                    <View style={styles.buttonContainer}></View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: variables.contentPadding[4]
    },

    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: variables.contentMargin[3]
    },

    buttonContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },

    mainButtonContainer: {
        flex: 2,
        justifyContent: "center"
    },

    bottomContainer: {
        paddingHorizontal: variables.contentPadding[3]
    }
})