import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import CadastroView from "../views/CadastroView"
import { StackScreen } from "react-native-screens";

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator>
                <Stack.Screen name = "Home" component={HomeView} option ={{title:'Minha home'}}/>

                <Stack.Screen name = "Login" component={LoginView} option ={{title:'Meu login'}}/> 
                
                <Stack.Screen name = "Cadastro" component={CadastroView} option ={{title:'Meu Cadastro'}}/>
                   
        </Stack.Navigator>
    )
}