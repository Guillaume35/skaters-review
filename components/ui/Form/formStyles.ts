import { StyleSheet } from "react-native";
import { variables } from "../../../shared/globalStyles";
import chroma from "chroma-js"

export const formStyles = StyleSheet.create({
    input: {
        paddingHorizontal: variables.contentPadding[3],
        paddingVertical: variables.contentPadding[2],
        borderRadius: variables.borderRadius[2],
        backgroundColor: variables.color.white,
        //borderWidth: 1,
        //borderBottomWidth: 3,
        //borderColor: chroma(variables.color.light).darken(0.3).hex(),
        fontFamily: "Rubik-Regular",
        width: "100%"
    },

    dark: {
        color: "white",
        backgroundColor: variables.color.dark,
        borderColor: chroma(variables.color.dark).darken(0.3).hex(),
    },

    sm: {
        paddingHorizontal: variables.contentPadding[2],
        paddingVertical: variables.contentPadding[1],
    },

    lg: {
        paddingHorizontal: variables.contentPadding[3],
        paddingVertical: variables.contentPadding[2],
        fontSize: 20
    },

    xl: {
        paddingHorizontal: variables.contentPadding[4],
        paddingVertical: variables.contentPadding[3],
        fontSize: 26
    },
})