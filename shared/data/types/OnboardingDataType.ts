import { InputType } from "../../../components/ui/Form/types/InputType"

export type OnboardingDataType = {
    id: number,
    type: InputType,
    label?: string, 
    placeholder?: string
}