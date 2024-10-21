import { FlatList, Text, View } from "react-native";
import { styles } from "./Home_style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctors/doctors";
import icon from "../../constants/icon";

export default function Home(){
    return(
        <View style={styles.container}>

            <Text style={styles.text}> Agende os seus serviços médicos </Text>

           <FlatList data={doctors} 
           keyExtractor={(item)=> item.id_doctor}
           showsVerticalScrollIndicator={false} 
           renderItem={({item})=>{ 

            return <Doctor name={item.name} 
            icon={item.icon == "F" ? icon.female : icon.male} 
            specialty= {item.specialty}/>
          
          }}/>

        </View>
    )
}