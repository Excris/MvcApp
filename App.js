
import AppRoutes from './src/routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}