import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importação do componente de navegação inferior
import CustomTabBar from '../components/CustomTabBar'; 

export default function ProfileView({ navigation }) {
    
    // Função auxiliar para renderizar itens de menu (estilo lista)
    const MenuItem = ({ icon, text, onPress, color = "white" }) => (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            <View style={styles.menuItemContent}>
                <Ionicons name={icon} size={22} color={color} style={styles.menuIcon} />
                <Text style={[styles.menuText, { color: color }]}>{text}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Cabeçalho com botão voltar */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={28} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Seção Principal do Perfil */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Ionicons name="person-circle" size={110} color="white" />
                        <TouchableOpacity style={styles.editBadge}>
                            <Ionicons name="camera" size={18} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.userName}>Cristhian Erik</Text>
                    <Text style={styles.userEmail}>cristhianerik@exemplo.com</Text>
                </View>

                {/* Seção de Ações Rápidas */}
                <View style={styles.actionSection}>
                    <MenuItem 
                        icon="receipt-outline" 
                        text="Meus Pedidos" 
                        onPress={() => console.log('Pedidos')} 
                    />
                    <MenuItem 
                        icon="heart-outline" 
                        text="Lista de Desejos" 
                        onPress={() => console.log('Desejos')} 
                    />
                    <MenuItem 
                        icon="location-outline" 
                        text="Meus Endereços" 
                        onPress={() => console.log('Endereços')} 
                    />
                    <MenuItem 
                        icon="settings-outline" 
                        text="Configurações da Conta" 
                        onPress={() => console.log('Config')} 
                    />
                    
                    <View style={styles.divider} />

                    <MenuItem 
                        icon="log-out-outline" 
                        text="Sair da Conta" 
                        onPress={() => navigation.navigate('Login')}
                        color="#ff4444" 
                    />
                </View>

                {/* Espaçamento para o conteúdo não ficar atrás da TabBar */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* TabBar Fixa no rodapé */}
            <CustomTabBar navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c', // Fundo levemente mais escuro para contraste
    },
    header: {
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarContainer: {
        position: 'relative',
    },
    editBadge: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#007AFF',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#1c1c1c',
    },
    userName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
    },
    userEmail: {
        color: '#aaa',
        fontSize: 14,
        marginTop: 5,
    },
    actionSection: {
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: 'row',
        backgroundColor: '#2c2c2c',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    menuItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: 15,
    }
});