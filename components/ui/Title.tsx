import {Text as ReactText, StyleSheet} from "react-native"
import { TitleOptions } from "./types/TextOptions"
import { variables } from "../../shared/globalStyles"
import GradientText from "./GradientText"

export default function Title({style, children, size, gradient, colors, ...rest}: TitleOptions) {
    let subStyle = []

    size = size || "md"

    subStyle.push(styles[size])

    style = [styles.text, style, ...subStyle]

    if (gradient) {
        colors = colors || [variables.color.primary, variables.color.primary1]
        return <GradientText {...rest} style={style} colors={colors}>{children}</GradientText>
    }

    return <ReactText {...rest} style={style}>{children}</ReactText>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Amaranth-Regular"
    },

    sm: {
        fontSize: variables.fontSize[3]
    },

    md: {
        fontSize: variables.fontSize[4]
    },

    lg: {
        fontSize: variables.fontSize[5]
    },

    xl: {
        fontSize: variables.fontSize[6]
    }
})