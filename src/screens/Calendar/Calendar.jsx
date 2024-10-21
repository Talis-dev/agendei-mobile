import { FlatList, Text, View } from "react-native";
import { styles } from "./Calendar_style";
import { appointments } from "../../constants/data";
import Appointments from "../../components/appointments/appointments";

export default function Calendar(){
    return(
        <View style={styles.container}>

            <Text style={styles.text}> Agende os seus serviços médicos </Text>

           <FlatList data={appointments} 
           keyExtractor={(item)=> item.id_appointment}
           showsVerticalScrollIndicator={false} 
           renderItem={({item})=>{ 

            return <Appointments service={item.service} 
          //  icon={item.icon == "F" ? icon.female : icon.male} 
            doctor= {item.doctor}
            specialty={item.specialty}/>
         
          }}/>

 
        </View>
    )
}