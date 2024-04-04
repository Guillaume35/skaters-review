import { MutableRefObject, PropsWithRef, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { globalStyle, variables } from "../../shared/globalStyles";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import OnboardingItem from "./OnboardingItem";
import { ItemType } from "./types/ItemProps";
import { ControllerActionsType } from "./types/ControllerType";
import Welcome from "./screens/Welcome";
import Name from "./screens/Name";

type ControllerProps = {
    items: ItemType[],
    onIndexChange?: (newIndex: number) => void
}

const OnboardingController = forwardRef<ControllerActionsType, ControllerProps>(({onIndexChange, items}, ref) => {
    const x = useSharedValue(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (onIndexChange) onIndexChange(currentIndex)
    }, [currentIndex])

    const slidesRef = useAnimatedRef<FlatList>()

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

    useImperativeHandle(ref, (): ControllerActionsType => {
        return {nextStep, prevStep, goToIndex}
    })

    return <Animated.FlatList 
        style={globalStyle.mainContainer}
        data={items}
        renderItem={({item, index}) => <OnboardingItem x={x} index={index} backgroundColor={item.color}>{item.component}</OnboardingItem>}
        scrollEventThrottle={16}
        bounces={false}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={slidesRef}
        onScroll={onScroll}
        onViewableItemsChanged={viewableItemsChanged}
    />
})

export default OnboardingController