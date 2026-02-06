import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CATEGORIES = [
    { id: '1', name: 'Consoles', icon: 'gamepad-variant' },
    { id: '2', name: 'Jogos', icon: 'disc' },
    { id: '3', name: 'Acessórios', icon: 'headphones' },
    { id: '4', name: 'PC Gamer', icon: 'desktop-tower' },
];

export default function QuickCategories() {
    return (
        <View style={styles.container}>
            {CATEGORIES.map(cat => (
                <TouchableOpacity key={cat.id} style={styles.item}>
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons name={cat.icon} size={24} color="#fb5b5a" />
                    </View>
                    <Text style={styles.text}>{cat.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#fff',
        marginVertical: 10,
    },
    item: { alignItems: 'center' },
    iconCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff5f5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        elevation: 2,
    },
    text: { fontSize: 11, color: '#333', fontWeight: '500' }
});