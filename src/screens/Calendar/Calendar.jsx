import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./Calendar_style";
import Appointments from "../../components/appointments/appointments";
import { useEffect, useState } from "react";
import api from "../../constants/api";


export default function Calendar(){

  const [appointments, setAppointments] = useState([])

  async function LoadAppointments(){
    try {
    const response = await api.get("/appointments")
    
       if (response.data){
        setAppointments(response.data)
       }
    
    } catch (error) {
       if(error.response?.data.error){
          Alert.alert(error.response.data.error)
       }else{
          Alert.alert("Falha ao se conectar com servidor. Tente novamente mais tarde")
    }
       }
    }

    async function DeleteAppointment(id_appointment){
      try {
      const response = await api.delete("/appointments/"+ id_appointment)
      
         if (response.data?.id_appointment){
          LoadAppointments();
         }
      
      } catch (error) {
         if(error.response?.data.error){
            Alert.alert(error.response.data.error)
         }else{
            Alert.alert("Falha ao se conectar com servidor. Tente novamente mais tarde")
      }
         }
      }
  
useEffect(()=> {
  LoadAppointments();
},[])

    return(
        <View style={styles.container}>

            <Text style={styles.text}> Agende os seus serviços médicos </Text>

           <FlatList data={appointments} 
           keyExtractor={(item)=> item.id_appointment}
           showsVerticalScrollIndicator={false} 
           renderItem={({item})=>{ 

            return <Appointments service={item.service} 
            id_appointment={item.id_appointment}
            doctor= {item.doctor}
            specialty={item.specialty}
            bookingDate={item.booking_date}
            bookingHour={item.booking_hour}
            onPress={DeleteAppointment}/>
         
          }}/>

 
        </View>
    )
}