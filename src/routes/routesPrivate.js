
import Main from '../screens/main/main';
import Services from '../screens/services/services';
import Schedule from '../screens/schedule/schedule';
import { COLORS } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function RoutesPrivate(){

    return <Stack.Navigator>

    <Stack.Screen name='main' component={Main}
    options={{headerShown:false}}/>

    <Stack.Screen name='services' component={Services}
    options={{headerShown:true,
        headerTitle:"Serviços",
        headerTitleAlign:"center",
        headerShadowVisible:false,
        headerTintColor:COLORS.white,
        headerStyle:{
            backgroundColor:COLORS.blue,}
        
    }}/>

   <Stack.Screen name='schedule' component={Schedule}
    options={{headerShown:true,
        headerTitle:"Fazer uma Reserva",
        headerTitleAlign:"center",
        headerShadowVisible:false,
        headerTintColor:COLORS.blue,
             }}/>  

</Stack.Navigator>

    }
    