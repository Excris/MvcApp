import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';

export default function HomeView({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderBar navigation={navigation} />
            
            <Text style={styles.welcomeText}>Bem-vindo à Home!</Text>

            <Button 
                title='Login' 
                onPress={() => navigation.navigate('Login')}
            />
        </SafeAreaView>
    );
}

