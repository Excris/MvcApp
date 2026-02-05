import React, { useState } from 'react';
import {userState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Adicionamos { navigation } como propriedade da função
export default function LoginView({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        console.log('E-mail:', email)
        console.log('Senha', senha)
        console.log("Tentando logar com:", email, senha);
    };

    

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <Text style={styles.title}>Bem-vindo</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder=""
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry 
                    />
                </View>

                {/* Link para Esqueci Senha */}
<TouchableOpacity 
    style={{ alignSelf: 'flex-end', marginTop: 10 }} 
    onPress={() => navigation.navigate('EsqueceuSenha')}
>
    <Text style={{ color: '#007AFF' }}>Esqueceu a senha?</Text>
</TouchableOpacity>

                {/* Opção de Confirmação de entrada */}

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                {/* --- NOVA OPÇÃO PARA IR AO CADASTRO --- */}
                <TouchableOpacity 
                    style={styles.registerLink} 
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.registerText}>
                        Não tem uma conta? <Text style={styles.boldText}>Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    content: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
    inputContainer: { marginBottom: 15 },
    label: { fontSize: 16, marginBottom: 5, color: '#666' },
    input: { backgroundColor: '#fff', height: 50, borderRadius: 8, paddingHorizontal: 15, borderWidth: 1, borderColor: '#ddd' },
    button: { backgroundColor: '#007AFF', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    
    // Estilos do link de cadastro
    registerLink: { marginTop: 25, alignItems: 'center' },
    registerText: { color: '#666', fontSize: 15 },
    boldText: { color: '#007AFF', fontWeight: 'bold' }
});