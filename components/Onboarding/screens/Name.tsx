import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyle, variables } from "../../../shared/globalStyles";
import { View } from "react-native";
import { onboardingStyles } from "../shared/onboardingStyles";
import FormInput from "../../ui/Form/FormInput";
import { TextInput } from "../../ui/Form";
import { Button } from "../../ui";
import { getRandomItem } from "../../../shared/tools/collection";
import { AuthorCollection, AuthorType } from "../../../shared/data/author";
import { NameScreenProps } from "../types/ScreenProps";
import { useState } from "react";

export default function Name({onChange, onValidate}: NameScreenProps) {

    const [name, setName] = useState("")

    const author: AuthorType = getRandomItem(AuthorCollection)

    const handleChange = (newVal: string) => {
        setName(newVal)
        if (onChange) onChange(newVal)
    }

    return <SafeAreaView style={[globalStyle.mainContainer]}>
        <View style={onboardingStyles.container}>
            <FormInput label="Quel est ton nom ?" labelStyle={[globalStyle.textBlack, globalStyle.textCenter, {marginBottom: variables.contentMargin[2]}]} size="lg">
                <TextInput 
                    placeholder={author.name} 
                    size="lg" 
                    onChange={handleChange}
                />
            </FormInput>
        </View>

        <View style={onboardingStyles.actionsContainer}>
            <Button
                title="Suivant"
                size="lg"
                variant="primary"
                inkBorder={true}
                onPress={onValidate}
            />
        </View>
    </SafeAreaView>
}