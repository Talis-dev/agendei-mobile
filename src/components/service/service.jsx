import { Text, View } from "react-native";
import { styles } from "./service_style";
import Button from "../button/button";


export default function Service(props){

    return(
        <View style={styles.card}>


        <View style={styles.cardText}>
           
        <Text style={styles.textDescription}> {props.description}</Text>

        <Text style={styles.textPrice}>
  {"R$ " + props.price.toFixed(2).replace('.', ',')}
</Text>  
        </View>

        <View>
            <Button text={"  Agendar  "} size={12} theme={"primary"}
            onPress={() =>props.onPress(props.id_service)} />
        </View>

        </View>
    )
}