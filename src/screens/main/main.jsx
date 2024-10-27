import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Home/Home";
import Calendar from "../Calendar/Calendar";
import Profile from "../Profile/Profile";
import { COLORS } from "../../constants/theme";
import icon from "../../constants/icon";
import { Image } from "react-native";


const Tab = createBottomTabNavigator();


export default function Main(){
    return (
                <Tab.Navigator  screenOptions={{
        tabBarActiveTintColor: COLORS.blue,
      }}>

      <Tab.Screen name="Home" component={Home} options={{ 
        headerTitleAlign: "center",
        headerTitle:() => {
            return <Image source={icon.logo} style={{
                height:40,
                width:180,
                resizeMode: 'contain',
            }} />
        },
        tabBarShowLabel:false,
        tabBarIcon: ({focused}) => {
            return <Image source={icon.home} style={{
                height:30,
                width:30,
                resizeMode: 'contain',
                opacity: !focused ? 0.3 : 1,
            }}/>
        }
    }} />


      <Tab.Screen name="Calendar" component={Calendar} options={{ 
        headerTitleAlign: "center",
        headerTitle:() => {
            return <Image source={icon.logo} style={{
                height:40,
                width:180,
                resizeMode: 'contain',
            }} />
        },
        tabBarShowLabel:false,
        tabBarIcon: ({focused}) => {
            return <Image source={icon.calendar} style={{
                height:30,
                width:30,
                resizeMode: 'contain',
                opacity: !focused ? 0.3 : 1,
            }}/>
        }
    }}/>


      <Tab.Screen name="Profile" component={Profile} options={{ 
        headerTitleAlign: "center",
        headerTitle:() => {
            return <Image source={icon.logo} style={{
                height:40,
                width:180,
                resizeMode: 'contain',
            }} />
        },
        tabBarShowLabel:false,
        tabBarIcon: ({focused}) => {
            return <Image source={icon.profile} style={{
                height:30,
                width:30,
                resizeMode: 'contain',
                opacity: !focused ? 0.3 : 1,
            }}/>
        }
    }}/>

    </Tab.Navigator>
    
    )
}