import Text from "../Text";
import { StyleSheet, View } from "react-native";
import { FormInputOptions } from "./types/InputOptions";
import { variables } from "../../../shared/globalStyles";

export default function FormInput({label, children, style, labelStyle, size}: FormInputOptions) {

    return (
        <View style={[styles.formInput, style]}>
            {label && <Text style={[styles.label, labelStyle]} size={size}>{label}</Text>}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {
        width: "100%"
    },

    label: {
        marginBottom: variables.contentMargin[1]
    }
})