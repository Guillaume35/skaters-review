import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from './components/ui';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { variables } from './shared/globalStyles';
import TextInput from './components/ui/Form/TextInput';
import FormInput from './components/ui/Form/FormInput';

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
	
	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<Text style={{marginBottom: 12, fontSize: 18, textAlign: "center", color: variables.color.grey}}>La nouvelle Skaters Team app pour iOs et Android !</Text>
			<Button title="Mon bouton" variant="primary" size="xl" />
			<Button title="Bouton 1" variant="errorOutline" size="lg" />
			<Button title="Dark" variant="dark" />
			<Button title="Error" variant="error" />
			<Button title="Error" variant="errorOutline" />
			<Button title="Success" variant="success" />
			<Button title="Light" variant="light" />
			<FormInput label="Votre nom ?" size="xl">
				<TextInput placeholder="Guillaume" size="xl" />
			</FormInput>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
