import { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { globalStyle } from "../../shared/globalStyles";
import Animated from "react-native-reanimated";

type OnboardingControllerOptions = {
    items: ReactNode[],
    initialIndex?: number
}

export default function OnboardingController({items, initialIndex}: OnboardingControllerOptions) {

    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0)

    return (
        <View style={globalStyle.mainContainer}>
            <Animated.FlatList 
                data={items}
                renderItem={({item}) => <View style={styles.itemContainer}>{item}</View>}
                scrollEventThrottle={16}
                bounces={false}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {

    }
})