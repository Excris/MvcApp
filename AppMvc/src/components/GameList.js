import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Removi o import vazio do expo-icons que pode gerar erro
// O caminho da imagem deve ser direto no objeto ou importado como variável de recurso

const GAMES = [
    {
        id: '1',
        title: 'The Last Guardian',
        price: 'R$199',
        image: require('../../assets/icon.png') // Caminho direto aqui
    },
    {
        id: '2',
        title: 'Galactic Odyssey',
        price: 'R$199',
        image: require('../../assets/icon.png')
    },
    {
        id: '3',
        title: 'Costroms',
        price: 'R$199',
        image: require('../../assets/icon.png')
    },
    {
        id: '4',
        title: 'Orbital Froniter',
        price: 'R$199',
        image: require('../../assets/icon.png')
    }
];

const GameItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.gameCard}>
            <Image source={item.image} style={styles.gameImage} />
            <View style={styles.priceTag}>
                <Text style={styles.priceText}>{item.price}</Text>
            </View>
            <Text style={styles.gameTitle} numberOfLines={1}>{item.title}</Text>
        </TouchableOpacity>
    );
}

export default function GameList({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>{title}</Text>
            <FlatList
                data={GAMES}
                renderItem={({ item }) => <GameItem item={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
        color: '#333'
    },
    listContent: {
        paddingHorizontal: 15,
    },
    gameCard: {
        width: 150,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 3, // Sombra para Android
    },
    gameImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 5,
    },
    priceTag: {
        backgroundColor: '#28a745',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    priceText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    },
    gameTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600'
    }
});