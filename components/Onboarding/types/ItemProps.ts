import { ReactNode } from "react"
import { SharedValue } from "react-native-reanimated"

export type ItemProps = {
    x: SharedValue<number>,
    index: number,
    backgroundColor: string
}

export type ItemType = {
    component: ReactNode,
    color: string
}