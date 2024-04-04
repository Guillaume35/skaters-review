import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from './components/ui';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useCallback } from 'react';
import { variables } from './shared/globalStyles';
import TextInput from './components/ui/Form/TextInput';
import FormInput from './components/ui/Form/FormInput';
import OnboardingController from './components/Onboarding/OnboardingController';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		'Rubik-Regular': require('./assets/fonts/Rubik/static/Rubik-Regular.ttf'),
		'Rubik-Medium': require('./assets/fonts/Rubik/static/Rubik-Medium.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	let items: ReactNode[] = []

	items.push((
		<FormInput label="Votre nom ?" size="xl" labelStyle={{textAlign: "center", color: variables.color.light, marginBottom: variables.contentMargin[2]}}>
			<TextInput placeholder="Guillaume" size="lg" />
		</FormInput>
	))

	items.push((
		<FormInput label="Votre pseudo ?" size="xl">
			<TextInput placeholder="Guigui" size="xl" />
		</FormInput>
	))
	
	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			
			<SafeAreaView>
			</SafeAreaView>
			
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: variables.color.black,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
