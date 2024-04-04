import { SharedValue } from "react-native-reanimated"

export type WelcomeScreenProps = {
    onStart?: () => void
}

export type NameScreenProps = {
    onChange?: (newVal: string) => void,
    onValidate?: () => void
}