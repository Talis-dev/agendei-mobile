import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from './src/routes/routes.js';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
          <View style={{flex:1,}}>
       <Routes/>
    <StatusBar style="auto" />
    </View>
    </NavigationContainer>

  );
}