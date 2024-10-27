
import LoginPage from '../screens/login/login';
import AccountPage from '../screens/account/account';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RoutesOpen(){

return <Stack.Navigator>
    
    <Stack.Screen name='login' component={LoginPage}
    options={{headerShown:false}}/>

    <Stack.Screen name='account' component={AccountPage}
    options={{headerShown:false}}/>

</Stack.Navigator>

}
