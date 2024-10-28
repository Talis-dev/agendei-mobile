import { Image, Text, View } from "react-native";
import { styles } from "./appointments_style";
import icon from "../../constants/icon";
import Button from "../button/button";



export default function Appointments(props){

    const DataCover =new Date(props.bookingDate+"T"+props.bookingHour)

    return(
        <View style={styles.card}>

            <Text style={styles.textService}>{props.service} - {props.doctor}</Text>
            <Text style={styles.textSpecialty}>{props.specialty}</Text>
<View style={styles.cardDate}>
<View>
             <View style={styles.date}>
                <Image source={icon.calendar} style={styles.icon} />
                <Text style={styles.dateText}>{DataCover.toLocaleDateString()}</Text>
            </View>
            <View style={styles.date}>
                <Image source={icon.clock} style={styles.icon} />
                <Text style={styles.dateText}>{props.bookingHour}h</Text>
            </View>   
</View>

         <Button text="Cancelar Reserva" theme={"danger"} size={13} onPress={()=> props.onPress(props.id_appointment)}/>   
</View>

        </View>
    )
}