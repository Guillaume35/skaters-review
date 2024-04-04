import { SafeAreaView, View } from "react-native";
import { onboardingStyles } from "../shared/onboardingStyles";
import { globalStyle, variables } from "../../../shared/globalStyles";
import { GradientText, Text } from "../../ui";

type SignUpProps = {
    name: string
}

export default function SignUp({name}: SignUpProps) {
    return <SafeAreaView style={[globalStyle.mainContainer]}>
        <View style={onboardingStyles.container}>
            <View style={[globalStyle.rowCenteredItems, {marginBottom: variables.contentMargin[4]}]}>
                <Text size="xl" style={globalStyle.textWhite}>Bonjour </Text>
                <GradientText size="xl" colors={[variables.color.primary, variables.color.primary1]}>{name}</GradientText>
            </View>
            <Text size="lg" style={[globalStyle.textWhite]}>Comment souhaites-tu te connecter ?</Text>
        </View>
    </SafeAreaView>
}