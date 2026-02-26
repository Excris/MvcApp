import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import CadastroView from "../views/CadastroView";
import ForgotPassView from "../views/ForgotPassView";
import ProfileView from "../views/ProfileView";
import DetailsView from "../views/DetailsView"; 

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Details" component={DetailsView} options={{ title: 'Detalhes do Produto' }} />
            <Stack.Screen name="Profile" component={ProfileView} options={{ title: 'Perfil' }} />
            <Stack.Screen name="Login" component={LoginView} options={{ title: 'Login' }} />

            <Stack.Screen name="Home" component={HomeView} options={{ title: 'Home' }} /> 
            <Stack.Screen name="Cadastro" component={CadastroView} options={{ title: 'Cadastro' }} />
            <Stack.Screen name="EsqueceuSenha" component={ForgotPassView} options={{ title: 'Recuperar Senha' }} />
        </Stack.Navigator>
    );
}