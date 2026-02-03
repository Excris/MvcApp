import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CadastroView({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleRegister = () => {
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }
        console.log("Cadastrando:", nome, email);
        // Aqui chamaremos o Controller no futuro
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.title}>Criar Conta</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Seu nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="exemplo@email.com"
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
                            placeholder="Crie uma senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirmar Senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Repita a senha"
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.linkButton} 
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    content: { padding: 20, justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
    inputContainer: { marginBottom: 15 },
    label: { fontSize: 16, marginBottom: 5, color: '#666' },
    input: { backgroundColor: '#fff', height: 50, borderRadius: 8, paddingHorizontal: 15, borderWidth: 1, borderColor: '#ddd' },
    button: { backgroundColor: '#28a745', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    linkButton: { marginTop: 20, alignItems: 'center' },
    linkText: { color: '#007AFF', fontSize: 16 }
});