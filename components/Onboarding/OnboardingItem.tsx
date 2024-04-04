import { PropsWithChildren } from "react"
import { StyleSheet, View, ViewStyle, useWindowDimensions } from "react-native"
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated"
import { globalStyle } from "../../shared/globalStyles"
import { ItemProps } from "./types/ItemProps"

export default function OnboardingItem({children, index, x, backgroundColor}: PropsWithChildren<ItemProps>) {
    const {width: SCREEN_WIDTH} = useWindowDimensions()

    const circleAnimation = useAnimatedStyle(() => {
        const scale = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH
            ],
            [1, 4, 4],
            Extrapolation.CLAMP
        )
        return {
            transform: [{scale}]
        }
    })

    const backgroundStyle: ViewStyle = {
        width: SCREEN_WIDTH, 
        height: SCREEN_WIDTH,
        borderRadius: SCREEN_WIDTH / 2,
        backgroundColor
    }

    return <View style={[globalStyle.mainContainer, {width: SCREEN_WIDTH}]}>
        <View style={styles.backgroundContainer}>
            <Animated.View style={[backgroundStyle, circleAnimation]} />
        </View>
        {children}
    </View>
}

const styles = StyleSheet.create({
    backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end"
    }
})