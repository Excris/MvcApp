import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native'; // Adicionei o Text aqui também
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// ADICIONE ESTA LINHA ABAIXO:
import CustomTabBar from '../components/CustomTabBar'; 

export default function ProfileView({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="arrow-back" size={28} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <Ionicons name="person-circle" size={100} color="white" />
                    <Text style={styles.userName}>Cristhian Erik</Text>
                    <Text style={styles.userEmail}>cristhianerik@exemplo.com</Text>
                </View>
                <View style={styles.actionSection}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="create-outline" size={20} color="white" />
                        <Text style={styles.actionText}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Agora este componente funcionará */}
            <CustomTabBar navigation={navigation} />
        </SafeAreaView>
    );
}

// ... restante do seu StyleSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b3838ff', // Mantive a cor escura que você estava usando
    },
    header: {
        padding: 20,
    },
    content: {
        alignItems: 'center', 
        marginTop: 10,
        marginBottom: 30,
    },
   userName: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userEmail: {
        color: '#bbb',
        fontSize: 16,
    },
    actionSection: {
        paddingHorizontal: 20,
    },
    actionButton: {
        flexDirection: 'row',
        backgroundColor: '#4e4b4bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 12,
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    }
});

const MenuItem = ({icon, text, onPress}) => (
    <TouchableOpacity style ={styles.MenuItem} onPress={onPress}>
        <View style={styles.MenuItemIcon}>
            <Ionicons name={icon} size={20} color="#c72727ff"/>

        </View>
        <Text style={styles.MenuItemText}></Text>
        <Ionicons name={icon} size={20} color="#da1d1dff"/>
    </TouchableOpacity>
)