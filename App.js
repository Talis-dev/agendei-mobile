import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from './src/routes/routes.js';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth.js';

export default function App() {
  return (
    <NavigationContainer>
          <View style={{flex:1,}}>
            <AuthProvider>
              <Routes/> 
            </AuthProvider>
    <StatusBar style= "auto" />
    </View>
    </NavigationContainer>

  );
}