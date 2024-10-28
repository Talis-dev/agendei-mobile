import { View, Text, Alert } from "react-native";
import { styles } from "./Profile_style";
import api from "../../constants/api";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/button/button";
import { AuthContext } from "../../contexts/auth";



export default function Profile(){

    const {setUser} = useContext(AuthContext)
    const [Name, setName] = useState()
    const [email, setEmail] = useState()

    async function LoadProfile(){
      try {
      const response = await api.get("/users/profile")
      
         if (response.data){
          setName(response.data.name)
          setEmail(response.data.email)
         }
      
      } catch (error) {
         if(error.response?.data.error){
            Alert.alert(error.response.data.error)
         }else{
            Alert.alert("Falha ao se conectar com servidor. Tente novamente mais tarde")
      }
         }
      }

useEffect(()=>{
LoadProfile();
},[])

function Logout(){
api.defaults.headers.common['Authorization'] = "";
setUser({});
}

    return(
        <View style={styles.card} >

      <View style={styles.cardDate}>
        <Text style={styles.textFixed}> Nome </Text>
        <Text style={styles.textIn}>{Name} </Text>
    </View>

    <View style={styles.cardDate}>
        <Text style={styles.textFixed}> E-mail </Text>
        <Text style={styles.textIn}> {email}</Text>
    </View>
    <View style={styles.btSair}>
         <Button theme={"danger"} text={"Sair da Conta"} size={9} onPress={Logout}/>
    </View>
   
        </View>
    )
}