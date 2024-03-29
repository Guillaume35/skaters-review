import MaskedView from '@react-native-masked-view/masked-view';
import Text from './Text';
import {LinearGradient} from 'expo-linear-gradient';

type GradientTextOptions = {
    colors: string[],
    [x: string]: any
}

export default function GradientText({colors, ...rest}: GradientTextOptions) {
    return <MaskedView maskElement={<Text {...rest} />}>
        <LinearGradient colors={colors} start={{x: 0, y:0}} end={{x:1, y:1}}>
            <Text {...rest} style={[rest.style, {opacity: 0}]} />
        </LinearGradient>
    </MaskedView>
}