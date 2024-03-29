import useAuth from "../shared/hooks/useAuth";
import { Text } from "../components/ui";
import { SafeAreaView, View } from "react-native";
import { SplashScreen } from "expo-router";
import { useCallback } from "react";
import { useFonts } from 'expo-font';
import Onboarding from "../components/Onboarding/Onboarding";
import { globalStyle } from "../shared/globalStyles";

SplashScreen.preventAutoHideAsync();

export default function RootLayour() {
    const { user } = useAuth()

    const [fontsLoaded, fontError] = useFonts({
		'Rubik-Regular': require('../assets/fonts/Rubik/static/Rubik-Regular.ttf'),
		'Rubik-Medium': require('../assets/fonts/Rubik/static/Rubik-Medium.ttf'),
        'Amaranth-Regular': require('../assets/fonts/Amaranth/Amaranth-Regular.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

    if (user) {
        return <View onLayout={onLayoutRootView}><Text>Welcome !</Text></View>
    }
    else {
        return <View style={globalStyle.mainContainer} onLayout={onLayoutRootView}><Onboarding /></View>
    }
}