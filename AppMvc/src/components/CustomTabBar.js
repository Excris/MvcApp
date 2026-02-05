import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const TABS = [
    { id: '1', name: 'Início', icon: 'home', isCurrent: true, route: 'Home' },
    { id: '2', name: 'Categoria', icon: 'list', isCurrent: false, route: '' },
    { id: '3', name: 'Desejos', icon: 'heart', isCurrent: false, route: '' },
    { id: '4', name: 'Pedidos', icon: 'mail', isCurrent: false, route: '' },
    { id: '5', name: 'Perfil', icon: 'person', isCurrent: false, route: '' }
];

const TabItem = ({ item }) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center' }}>
            <Ionicons name={`${item.icon}-outline`} size={24} color={'#888'} />
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
}

export default function CustomTabBar() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
            {TABS.map(item => (
                <TabItem key={item.id} item={item} />
            ))}
        </View>
    );
}

const style =StyleSheet.create({
    container:{
        flexDirection: '',
        justifyContent: '',
        alignItems: '',
        heigh: 65,
        backgroundColor: '#ddd',

    },
    
})