import { Text as ReactText, StyleProp, StyleSheet, TextStyle } from "react-native"
import { SizeType } from "./types/SizeType"
import { variables } from "../../shared/globalStyles"

type TextOptions = {
    style?: StyleProp<TextStyle>,
    children: string,
    size?: SizeType
}

export default function Text({style, children, size}: TextOptions) {

    let subStyle = []

    if (size && size !== "md") {
        subStyle.push(styles[size])
    }

    return (
        <ReactText style={[styles.text, style, ...subStyle]}>{children}</ReactText>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Rubik-Regular"
    },

    sm: {
        fontSize: variables.fontSize[0]
    },

    lg: {
        fontSize: variables.fontSize[2]
    },

    xl: {
        fontSize: variables.fontSize[4]
    }
})