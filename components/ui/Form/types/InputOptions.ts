import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { SizeType } from "../../types/SizeType"
import { ThemeVariantType } from "../../types/ThemeVariantType"
import { InputType } from "./InputType"
import { ReactNode } from "react"

export type InputOptions = {
    value?: any,
    onChange?: (newVal: any) => void,
    placeholder?: string,
    style?: ViewStyle | ViewStyle[],
    size?: SizeType,
    variant?: ThemeVariantType
}

export type DateTimeInputOption = Omit<InputOptions, 'value' | 'onChange'> & {
    value?: Date,
    onChange?: (newVal: Date) => void,
    disableDate: boolean,
    disableTime: boolean
}

export type NumberInputOptions = Omit<InputOptions, 'value' | 'onChange'> & {
    value?: number,
    onChange?: (newVal: number) => void,
    integer: boolean
}

export type TextInputOptions = Omit<InputOptions, 'value' | 'onChange'> & {
    value?: string,
    onChange?: (newVal: string) => void,
    multiline?: boolean,
    numberOfLines?: number,
    maxLength?: number
}

export type FormInputOptions = {
    label?: string,
    type?: InputType,
    children: ReactNode,
    style?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    size?: SizeType
}