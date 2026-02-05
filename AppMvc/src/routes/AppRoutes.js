import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import CadastroView from "../views/CadastroView"
import { StackScreen } from "react-native-screens";
import ForgotPassView from "../views/ForgotPassView";

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator>
                <Stack.Screen name = "Home" component={HomeView} options ={{title:'Minha home'}}/>

                <Stack.Screen name = "Login" component={LoginView} options ={{title:'Meu login'}}/> 
                
                <Stack.Screen name = "Cadastro" component={CadastroView} options ={{title:'Meu Cadastro'}}/>

                <Stack.Screen name="EsqueceuSenha" component={ForgotPassView} options={{ title: 'Recuperar Senha' }} />
                   
        </Stack.Navigator>
    )
}