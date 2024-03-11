import {TextInput as ReactTextInput} from 'react-native'
import { TextInputOptions } from './types/InputOptions'
import { formStyles } from './formStyles'

export default function TextInput({
    value, 
    placeholder, 
    onChange, 
    multiline, 
    numberOfLines, 
    maxLength, 
    style,
    variant,
    size
}: TextInputOptions) {

    variant = variant || "light"
    size = size || "md"

    let subStyle = []

    if (variant !== "light") {
        subStyle.push(formStyles[variant])
    }

    if (size !== "md") {
        subStyle.push(formStyles[size])
    }

    return (
        <ReactTextInput 
            style={[formStyles.input, style, ...subStyle]}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
        />
    )
}