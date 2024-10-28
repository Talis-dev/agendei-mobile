import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./Home_style";
import Doctor from "../../components/doctors/doctors";
import { useEffect, useState } from "react";
import api from "../../constants/api";


export default function Home(props){
    const [doctors, setDoctors] = useState([]);

    function ClickDoctor(id_doctor,name,specialty,icon){
    props.navigation.navigate("services",{id_doctor, name, specialty, icon})

    }

    async function LoadDoctors(){
        try {
        const response = await api.get("/doctors",)
        
           if (response.data){
            setDoctors(response.data)
           }
        
        } catch (error) {
           if(error.response?.data.error){
              Alert.alert(error.response.data.error)
           }else{
              Alert.alert("Falha ao se conectar com servidor. Tente novamente mais tarde")
        }
           }
        }

useEffect(() => {
    LoadDoctors();
},[])

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