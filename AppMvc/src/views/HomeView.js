import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native'; // Importamos o ScrollView para evitar erros de espaço
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderBar from '../components/HeaderBar';
import QuickCategories from '../components/QuickCategories'; 
import GameList from '../components/GameList'; // Certifique-se que o nome do arquivo é GameList.js
import CustomTabBar from '../components/CustomTabBar';

export default function HomeView({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar navigation={navigation} />

            {/* Use o ScrollView aqui para testar, pois o conteúdo pode ser grande para a tela */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <QuickCategories />
                
                <GameList title="Destaques da Semana" />
                <GameList title="Promoções" />

                <View style={{ height: 80 }} /> 
            </ScrollView>

            <CustomTabBar navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
});