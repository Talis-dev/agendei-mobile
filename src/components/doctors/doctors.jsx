import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./doctors_style";


export default function Doctor(props){

    return(
        <View>
       <TouchableOpacity style={styles.card}>
        <Image source={props.icon} 
        style={styles.icon}/>

        <View>
        <Text style={styles.textName}> {props.name}</Text>
        <Text style={styles.textSpecialty}> {props.specialty}</Text>    
        </View>


       </TouchableOpacity>

        </View>
    )
}