import { SafeAreaView, View } from "react-native";
import { globalStyle, variables } from "../../../shared/globalStyles";
import { Button, Title } from "../../ui";
import { WelcomeScreenProps } from "../types/ScreenProps";
import { onboardingStyles } from "../shared/onboardingStyles";


export default function Welcome({onStart}: WelcomeScreenProps) {
    return <SafeAreaView style={[globalStyle.mainContainer]}>
        <View style={[onboardingStyles.container]}>
            <Title style={globalStyle.textPrimary} size="xl" gradient={true}>Bienvenue.</Title>
        </View>
        <View style={onboardingStyles.actionsContainer}>
            <Button
                title="Démarrer"
                size="lg"
                variant="primaryAlt"
                onPress={onStart}
            />
        </View>
    </SafeAreaView>
}