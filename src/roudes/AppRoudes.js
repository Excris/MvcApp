import { createStackNavigator } from "@react-@navigation/stack";

import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator>
                <Stack.Scren name = "Home" component={HomeView} option ={{title:'Minha home'}}/>

                <Stack.Scren name = "Login" component={LoginView} option ={{title:'Meu login'}}/>    
        </Stack.Navigator>
    )
}