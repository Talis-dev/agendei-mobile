import { FlatList, Text, View } from "react-native";
import { styles } from "./Home_style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctors/doctors";


export default function Home(props){

    function ClickDoctor(id_doctor,name,specialty,icon){
    props.navigation.navigate("services")

    }

    return(
        <View style={styles.container}>

            <Text style={styles.text}> Agende os seus serviços médicos </Text>

           <FlatList data={doctors} 
           keyExtractor={(item)=> item.id_doctor}
           showsVerticalScrollIndicator={false} 
           renderItem={({item})=>{ 

            return <Doctor id_doctor={item.id_doctor}
            name={item.name} 
            icon={item.icon} // M ou F
            specialty= {item.specialty}
            onPress={ClickDoctor}/>
          
          }}/>

        </View>
    )
}