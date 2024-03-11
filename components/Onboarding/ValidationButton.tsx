import { StyleSheet, View } from "react-native"
import { G, Svg } from "react-native-svg"

export type ValidationButtonOptions = {
    currentIndex?: number,
    items: number,
    size?: number,
    onPress: () => void
}

export default function ValidationButton({size, currentIndex, items, onPress}: ValidationButtonOptions) {
    return (
        <View style={localStyle.container}>
            <Svg width={size} height={size}>
                <G>
                    
                </G>
            </Svg>
        </View>
    )
}

const localStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})