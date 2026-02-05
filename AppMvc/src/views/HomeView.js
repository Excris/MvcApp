import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomTabBar';

export default function HomeView({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderBar navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.welcomeText}>Bem-vindo à Home!</Text>
                <Button 
                    title='Ir para Login' 
                    onPress={() => navigation.navigate('Login')} />
                    
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    }
});
