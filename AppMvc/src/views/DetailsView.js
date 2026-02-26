import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../components/HeaderBar';

// Definindo a imagem de banner (usando o ícone padrão do projeto por enquanto)
const BANNER_IMAGE = require('../../assets/games/gta6.png');

export default function DetailsView({ navigation, route }) {
    // Em um cenário real, você receberia os dados do jogo via route.params
    const gameTitle = "The Last Guardian"; 

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar navigation={navigation} />
            
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Botão de Voltar Rápido */}
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

                {/* Container do Banner */}
                <View style={styles.bannerContainer}>
                    <Image 
                        source={BANNER_IMAGE}
                        style={styles.bannerImage}
                        resizeMode="cover"
                    />
                </View>

                {/* Informações do Produto */}
                <View style={styles.infoSection}>
                    <Text style={styles.title}>{gameTitle}</Text>
                    <View style={styles.priceBadge}>
                        <Text style={styles.priceText}>R$ 199,00</Text>
                    </View>
                    
                    <Text style={styles.descriptionTitle}>Descrição</Text>
                    <Text style={styles.descriptionText}>
                        Uma jornada inesquecível sobre companheirismo e confiança. 
                        Explore ruínas antigas e desvende segredos em um mundo vasto e misterioso.
                    </Text>
                </View>

                {/* Botão de Ação */}
                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 15,
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 5,
    },
    bannerContainer: {
        width: '100%',
        height: 250,
        backgroundColor: '#2c2c2c',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    infoSection: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    priceBadge: {
        backgroundColor: '#28a745',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        marginBottom: 20,
    },
    priceText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 15,
        color: '#aaa',
        lineHeight: 22,
    },
    buyButton: {
        backgroundColor: '#007AFF',
        margin: 20,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});