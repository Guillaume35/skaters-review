import { StyleSheet } from "react-native";
import { globalStyle } from "../../../shared/globalStyles";

export const onboardingStyles = StyleSheet.create({
    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 180,
        width: "100%"
    },
    
    container: {
        paddingBottom: 180,
        ...globalStyle.mainContainer, 
        ...globalStyle.columnCenteredItems,
        ...globalStyle.contentArea
    }
})