import {MutableRefObject, ReactNode, useRef} from "react";
import {StyleSheet, useWindowDimensions, View} from "react-native";
import {variables} from "../../shared/globalStyles";

export type TimelineOptions = {
    items: number,
    currentIndex: number,
    activeColor?: string,
    inactiveColor?: string,
    validationColor?: string,
    validationIndex?: number
}

export default function Timeline({items, currentIndex, activeColor, inactiveColor, validationIndex, validationColor}: TimelineOptions) {

    let nodes:ReactNode[] = []

    for (let i=0; i<items; i++) {
        let style: any[] = [{...styles.item, backgroundColor: inactiveColor || variables.color.grey}]

        if (currentIndex === i) {
            let color = typeof validationIndex !== "undefined" && validationIndex === currentIndex ? validationColor || variables.color.success : activeColor || variables.color.active;
            style.push({...styles.active, backgroundColor: color})
        }

        nodes.push((
            <View style={style} key={i} />
        ))
    }

    return (
        <View style={styles.container}>
            {nodes}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    item: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: variables.contentMargin[1] / 2
    },

    active: {
        width: 20
    }
})