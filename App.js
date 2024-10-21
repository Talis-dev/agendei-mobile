import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoginPage from './src/screens/login/login';
import AccountPage from './src/screens/account/account';
import Home from './src/screens/Home/Home';
import Calendar from './src/screens/Calendar/Calendar';
import Profile from './src/screens/Profile/Profile';



export default function App() {
  return (
    <View style={{flex:1,}}>

<Profile/>

      <StatusBar style="auto" />
    </View>
  );
}