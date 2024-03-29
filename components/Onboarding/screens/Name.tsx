import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyle, variables } from "../../../shared/globalStyles";
import { View } from "react-native";
import { onboardingStyles } from "../shared/onboardingStyles";
import FormInput from "../../ui/Form/FormInput";
import { TextInput } from "../../ui/Form";
import { Button } from "../../ui";

export default function Name() {
    return <SafeAreaView style={[globalStyle.mainContainer, globalStyle.bgPrimaryAlt]}>
        <View style={onboardingStyles.container}>
            <FormInput label="Quel est ton nom ?" labelStyle={[globalStyle.textBlack, globalStyle.textCenter, {marginBottom: variables.contentMargin[2]}]} size="lg">
                <TextInput placeholder="Guillaume" size="lg" />
            </FormInput>
        </View>

        <View style={onboardingStyles.actionsContainer}>
            <Button
                title="Suivant"
                size="lg"
                variant="primary"
                inkBorder={true}
            />
        </View>
    </SafeAreaView>
}