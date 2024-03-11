import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { variables } from "../../shared/globalStyles"
import { ReactNode } from "react"
import chroma from "chroma-js"
import Text from "./Text"
import { SizeType } from "./types/SizeType"

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: variables.contentPadding[3],
        paddingVertical: variables.contentPadding[2],
        borderWidth: 1,
        borderBottomWidth: 3,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        }
    },

    sm: {
        paddingHorizontal: variables.contentPadding[2],
        paddingVertical: variables.contentPadding[1],
    },

    lg: {
        paddingHorizontal: variables.contentPadding[4],
        paddingVertical: variables.contentPadding[3],
    },

    xl: {
        paddingHorizontal: variables.contentPadding[4],
        paddingVertical: variables.contentPadding[3],
    },

    title_sm: {
        fontSize: 14
    },

    title_lg: {
        fontSize: 18
    },

    title_xl: {
        fontSize: 22
    },

    primary: {
        backgroundColor: variables.color.grey,
        borderColor: chroma(variables.color.grey).darken(0.3).hex()
    },

    base: {
        backgroundColor: "white",
        borderColor: chroma(variables.color.grey).darken(0.3).hex()
    },

    error: {
        backgroundColor: variables.color.danger,
        borderColor: chroma(variables.color.danger).darken(0.3).hex()
    },

    errorOutline: {
        backgroundColor: "white",
        borderColor: chroma(variables.color.danger).darken(0.3).hex()
    },

    success: {
        backgroundColor: variables.color.success,
        borderColor: chroma(variables.color.success).darken(0.3).hex()
    },

    light: {
        backgroundColor: variables.color.white,
        borderColor: chroma(variables.color.light).darken(0.3).hex()
    },

    dark: {
        backgroundColor: variables.color.dark,
        borderColor: chroma(variables.color.dark).darken(0.3).hex()
    },

    icon: {
        marginRight: variables.contentMargin[1]
    },

    buttonTitle: {
        color: "white",
        fontFamily: "Rubik-Medium"
    },

    buttonTitleBase: {
        color: chroma(variables.color.grey).darken(0.3).hex()
    },

    buttonTitleLight: {
        color: variables.color.lightGrey
    },

    buttonTitleErrorOutline: {
        color: chroma(variables.color.danger).darken(0.3).hex()
    }
})

type VariantType = "primary" | "error" | "errorOutline" | "success" | "light" | "dark" | "base"

type ButtonOptions = {
    onPress?: () => void,
    variant?: VariantType,
    title: string,
    icon?: ReactNode,
    size?: SizeType
}

const TEXT_STYLE = {
    base: styles.buttonTitleBase,
    errorOutline: styles.buttonTitleErrorOutline,
    light: styles.buttonTitleLight
}

export default function Button({onPress, variant, title, icon, size}: ButtonOptions) {

    variant = variant || "base"

    size = size || "md"

    let titleStyle: TextStyle[] = [styles.buttonTitle]
    let subStyle: ViewStyle[] = []

    if (size !== "md") {
        subStyle.push(styles[size])
        titleStyle.push(styles["title_"+size as keyof typeof styles])
    }

    if (variant in TEXT_STYLE) {
        titleStyle.push(TEXT_STYLE[variant as keyof typeof TEXT_STYLE])
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, styles[variant]]}>
                {icon && <View style={styles.icon}>{icon}</View>}
                <Text style={titleStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}