import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services_style";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Service from "../../components/service/service";

export default function Services(){

    
    function ClickService(id_service){
        //props.navigation.navigate("services")
        console.log("clicou id service:" + id_service)
    }

    return(
        <View style={styles.container}>

            <View style={styles.banner}>

                <Image source={icon.female} style={styles.icon}/>

                <Text style={styles.name}> name medico </Text>
                <Text style={styles.specialty}> escpecialidade do medico </Text>

            </View>

           <FlatList data={doctors_services} 
           keyExtractor={(item)=> item.id_service}
           showsVerticalScrollIndicator={false} 
           renderItem={({item})=>{ 

            return <Service id_service={item.id_service}
            description={item.description} 
            price= {item.price}
            onPress={ClickService} />
         
          }} />

           

        </View>
    )
}