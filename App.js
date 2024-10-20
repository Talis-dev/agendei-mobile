import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoginPage from './src/screens/login/login';



export default function App() {
  return (
    <View style={{flex:1,}}>

<LoginPage/>

      <StatusBar style="auto" />
    </View>
  );
}