import {Image, Text,TextInput,TouchableOpacity,View } from "react-native";
import icon from "../../constants/icon"
import Button from "../../components/button/button"
import { styles } from "./login_style";
import ButtonView from "../../components/buttonView/buttonViewIcon";
import React, { useState, useContext } from "react";
import api from "../../constants/api";
import { Alert } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function LoginPage(props) {
    const {setUser} = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [visible, setVisible] = useState(true); //variavel do olho visivel
    const [loading, setLoading] = useState(false);


    const toggleVisibility = () => {
        setVisible(!visible);
      };

async function ExecuteLogin(){
   setLoading(true);
try {
const response = await api.post("/users/login",{
   email,
   password})

   if (response.data){
      api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
      setUser(response.data)
   }

} catch (error) {
   if(error.response?.data.error){
      Alert.alert(error.response.data.error)
   }else{
      Alert.alert("Falha ao se conectar com servidor. Tente novamente mais tarde")
}
   } finally {
      setLoading(false);
   }
}


    return <View style={styles.container}>


     <View style={styles.containerLogo}>
      <Image source={icon.logo} style={styles.logo} />
     </View> 

     <View>
        <TextInput placeholder="E-mail" style={styles.input1}
        onChangeText={(text)=>setEmail(text)}/>

        <View style={styles.containerInput2}>

         <TextInput placeholder="Senha" style={styles.input2}
      onChangeText={(text)=>setPassword(text)}
        secureTextEntry={visible} />

   <ButtonView visible={visible} toggleVisibility={toggleVisibility}/>  
        </View>

       

     <Button theme={"primary"} size={15} text="Acessar" onPress={ExecuteLogin} disabled={loading}/>  
    
     </View>

     <View style={styles.footer}>
    <Text>Não tenho conta.</Text>
    <TouchableOpacity onPress={()=> props.navigation.navigate("account")}>
       <Text style={styles.footerLink}> Criar conta agora.</Text> 
    </TouchableOpacity>
     </View>



    </View>
 }