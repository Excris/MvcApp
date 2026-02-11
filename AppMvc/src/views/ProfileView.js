import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileView({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="arrow-back" size={28} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.content}>
                        {/* Ícone de perfil centralizado */}
                        <Ionicons name="person-circle" size={80} color="white" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b3838ff', // Mantive a cor escura que você estava usando
    },
    header: {
        padding: 20,
    },
    content: {
        alignItems: 'center', // Centraliza o ícone de perfil
        marginTop: 20,
    }
});