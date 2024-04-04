import { useRef, useState } from "react";
import Welcome from "./screens/Welcome";
import Name from "./screens/Name";
import { Alert, FlatList, ViewToken } from "react-native";
import { globalStyle, variables } from "../../shared/globalStyles";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import OnboardingItem from "./OnboardingItem";
import { ItemType } from "./types/ItemProps";
import { ControllerActionsType } from "./types/ControllerType";
import OnboardingController from "./OnboardingController";
import SignUp from "./screens/SignUp";

export default function Onboarding() {

    const [name, setName] = useState("")

    const controllerRef = useRef<ControllerActionsType>(null)

    const handleNameChange = (newVal: string) => {
        setName(newVal)
    }

    const nextStep = () => {
        controllerRef.current?.nextStep()
    }

    const handleValidateName = () => {
        if (name) nextStep()
        else {
            Alert.alert("Tu as bien un nom ?", "Ton nom restera privé tant que tu ne choisira pas de le publier.")
        }
    }

    const items: ItemType[] = [
        {component: <Welcome onStart={nextStep} />, color: variables.color.black}, 
        {component: <Name onChange={handleNameChange} onValidate={handleValidateName} />, color: variables.color.primaryAlt},
        {component: <SignUp name={name} />, color: variables.color.black}
    ]

    return <OnboardingController items={items} ref={controllerRef} />
}