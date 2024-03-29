import { StyleSheet } from "react-native"

export const variables = {
    borderRadius: [0, 6, 12, 16, 22],
    contentPadding: [0, 6, 12, 14, 18, 22, 32, 48, 64, 96],
    contentMargin: [0, 6, 12, 14, 18, 22, 32, 48, 64, 96],
    fontSize: [12, 14, 16, 20, 24, 32, 44],
    color: {
        black: "#0e1715",
        dark: "#11212D",
        grey: "#2b4660",
        lightGrey: "#5a7676",
        white: "#ffffff",
        light: "#e8e9eb",
        danger: "#cb3c3c",
        warning: "#cfa439",
        success: "#5aab42",
        active: "#0184d5",
        primary: "#FF00A8",
        primary1: "#FF1B1B",
        primaryAlt: "#ADFF00"
    }
}

export const globalStyle = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    contentArea: {
        marginHorizontal: variables.contentMargin[4]
    },

    rowCenteredItems: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    columnCenteredItems: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    bgBlack: {
        backgroundColor: variables.color.black
    },

    bgPrimary: {
        backgroundColor: variables.color.primary
    },

    bgPrimary1: {
        backgroundColor: variables.color.primary1
    },

    bgPrimaryAlt: {
        backgroundColor: variables.color.primaryAlt
    },

    textBlack: {
        color: variables.color.black
    },

    textWhite: {
        color: variables.color.white
    },

    textCenter: {
        textAlign: "center"
    },

    textPrimary: {
        color: variables.color.primary
    }
})