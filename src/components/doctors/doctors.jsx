import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./doctors_style";
import icon from "../../constants/icon";

export default function Doctor(props){

    return(
        <View>
       <TouchableOpacity style={styles.card} onPress={() => props.onPress(props.id_doctor,props.name,props.specialty,props.icon)}>
        <Image source={props.icon == "M" ? icon.male : icon.female} 
        style={styles.icon}/>

        <View>
        <Text style={styles.textName}> {props.name}</Text>
        <Text style={styles.textSpecialty}> {props.specialty}</Text>    
        </View>


       </TouchableOpacity>

        </View>
    )
}