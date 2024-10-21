import { View, Text } from "react-native";
import { styles } from "./Profile_style";


export default function Profile(){

    return(
        <View style={styles.card} >

      <View style={styles.cardDate}>
        <Text style={styles.textFixed}> Nome </Text>
        <Text style={styles.textIn}> Marcos Aurelio de Souza </Text>
    </View>

    <View style={styles.cardDate}>
        <Text style={styles.textFixed}> E-mail </Text>
        <Text style={styles.textIn}> Marco_aurelio@gmail.com </Text>
    </View>




        </View>
    )
}