import { Alert, Image, Text,TextInput,TouchableOpacity,View } from "react-native";
import icon from "../../constants/icon"
import Button from "../../components/button/button"
import { styles } from "./account_style";
import ButtonView from "../../components/buttonView/buttonViewIcon";
import React, { useState } from "react";
import api from "../../constants/api";


export default function AccountPage(props) {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(!visible);
      };
      
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
  
  async function ExecuteAccaunt(){
     setLoading(true);
  try {
  const response = await api.post("/users/register",{
     name,
     email,
     password})
  
     if (response.data){
        console.log(response.data)
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
        <TextInput placeholder="Nome" style={styles.input1}
        onChangeText={(text)=>setName(text)}/>

        <TextInput placeholder="E-mail" style={styles.input1}
        onChangeText={(text)=>setEmail(text)}/>

        <View style={styles.containerInput2}>

         <TextInput placeholder="Senha" style={styles.input2}
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={visible} />

   <ButtonView visible={visible} toggleVisibility={toggleVisibility}/>  
        </View>

       

     <Button theme={"primary"} size={15} text="Criar Conta" onPress={ExecuteAccaunt} disabled={loading}/>  
    
     </View>

     <View style={styles.footer}>
    <Text>Já tenho conta. </Text>
    <TouchableOpacity onPress={()=> props.navigation.goBack()}> 
       <Text style={styles.footerLink}>Fazer login.</Text> 
    </TouchableOpacity>
     </View>



    </View>
 }