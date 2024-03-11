import { StyleSheet } from "react-native"

export const variables = {
    borderRadius: [0, 6, 12, 18],
    contentPadding: [0, 6, 12, 24, 32, 48],
    contentMargin: [0, 6, 12, 24, 32, 48],
    fontSize: [12, 14, 16, 20, 24, 28, 32],
    color: {
        black: "#0b161e",
        dark: "#11212D",
        grey: "#2b4660",
        lightGrey: "#59759f",
        white: "#ffffff",
        light: "#e8e9eb",
        danger: "#cb3c3c",
        warning: "#cfa439",
        success: "#5aab42",
        active: "#0184d5",
        primary: "#c46014"
    }
}

export const globalStyle = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})