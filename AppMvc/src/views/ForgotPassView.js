import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroView({ navigation }) {
    // Estados para capturar os dados
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = () => {
        if (!nome || !email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }
        
        // Aqui o MVC entra em ação: chamaremos o CadastroController
        console.log("Dados enviados para o Controller:", { nome, email, senha });
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                    
                    {/* Botão Voltar */}
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={28} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Criar Conta</Text>
                    <Text style={styles.subtitle}>Preencha os dados abaixo para começar.</Text>

                    {/* Campo Nome */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="person-outline" size={20} color="#888" style={styles.inputIcon} />
                            <TextInput 
                                style={styles.input}
                                placeholder="Seu nome"
                                placeholderTextColor="#666"
                                value={nome}
                                onChangeText={setNome}
                            />
                        </View>
                    </View>

                    {/* Campo E-mail */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>E-mail</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={20} color="#888" style={styles.inputIcon} />
                            <TextInput 
                                style={styles.input}
                                placeholder="exemplo@email.com"
                                placeholderTextColor="#666"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>

                    {/* Campo Senha */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Senha</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.inputIcon} />
                            <TextInput 
                                style={styles.input}
                                placeholder="Crie uma senha"
                                placeholderTextColor="#666"
                                value={senha}
                                onChangeText={setSenha}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Confirmar Senha */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Confirmar Senha</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="shield-checkmark-outline" size={20} color="#888" style={styles.inputIcon} />
                            <TextInput 
                                style={styles.input}
                                placeholder="Repita a senha"
                                placeholderTextColor="#666"
                                value={confirmarSenha}
                                onChangeText={setConfirmarSenha}
                                secureTextEntry={!showPassword}
                            />
                        </View>
                    </View>

                    {/* Botão de Cadastro */}
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Cadastrar Agora</Text>
                    </TouchableOpacity>

                    {/* Link para Voltar ao Login */}
                    <TouchableOpacity 
                        style={styles.linkButton} 
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.linkText}>
                            Já tem uma conta? <Text style={styles.linkBold}>Faça Login</Text>
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#1c1c1c' // Mantendo o padrão Dark
    },
    content: { 
        padding: 25,
    },
    backButton: {
        marginBottom: 20,
    },
    title: { 
        fontSize: 32, 
        fontWeight: 'bold', 
        color: '#fff',
        marginBottom: 5
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 30
    },
    inputGroup: { 
        marginBottom: 20 
    },
    label: { 
        fontSize: 14, 
        color: '#bbb', 
        marginBottom: 8,
        marginLeft: 4
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2c2c2c',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 55,
        borderWidth: 1,
        borderColor: '#3d3d3d'
    },
    inputIcon: {
        marginRight: 10
    },
    input: { 
        flex: 1,
        color: '#fff',
        fontSize: 16
    },
    button: { 
        backgroundColor: '#28a745', 
        height: 55, 
        borderRadius: 12, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,
        elevation: 3,
        shadowColor: '#28a745',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    buttonText: { 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    linkButton: { 
        marginTop: 25, 
        alignItems: 'center' 
    },
    linkText: { 
        color: '#aaa', 
        fontSize: 15 
    },
    linkBold: { 
        color: '#007AFF', 
        fontWeight: 'bold' 
    }
});