import { StyleProp, TextProps, TextStyle } from "react-native"
import { SizeType } from "./SizeType"
import { PropsWithChildren } from "react"

export type TextOptions = PropsWithChildren<TextProps> & {
    size?: SizeType
}

export type TitleOptions = TextOptions & {
    gradient?: boolean
    colors?: string[]
}