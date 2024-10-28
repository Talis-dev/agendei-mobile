import { Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "./services_style";
import icon from "../../constants/icon";
import Service from "../../components/service/service";
import api from "../../constants/api";
import { useEffect, useState } from "react";

export default function Services(props){

    const [doctorsServices, setDoctorsServices] = useState([])

    const id_doctor = props.route.params.id_doctor
    const name = props.route.params.name
    const specialty = props.route.params.specialty
    const iconDoctor = props.route.params.icon 

    async function LoadServices(){
     try {
     const response = await api.get("/doctors/" + id_doctor + "/services",)
     
        if (response.data){
            setDoctorsServices(response.data)
        }
     
     } catch (error) {
        if(error.response?.data.error){
           Alert.alert(error.response.data.error)
        }else{
           Alert.alert("Falha ao se conectar com servidor. Tente novamente mais tarde")
     }
        }
     }

    function ClickService(id_service){
        props.navigation.navigate("schedule",{id_doctor,id_service})
    }

useEffect(()=>{
LoadServices();
}, [])

    return(
        <View style={styles.container}>

            <View style={styles.banner}>

                <Image source={iconDoctor == "M" ? icon.male : icon.female } 
                style={styles.icon}/>

                <Text style={styles.name}> {name}</Text>
                <Text style={styles.specialty}> {specialty} </Text>

            </View>

           <FlatList data={doctorsServices} 
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