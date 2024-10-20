import { Image, Text,TextInput,TouchableOpacity,View } from "react-native";
import logo from "../../assets/logo.png"
import Button from "../../components/button/button"
import { styles } from "./login_style";
import { Icon } from 'react-native-elements';
import ButtonView from "../../components/buttonView/buttonViewIcon";
import React, { useState } from "react";

export default function LoginPage() {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(!visible);
      };

    return <View style={styles.container}>


     <View style={styles.containerLogo}>
     <Image source={logo} style={styles.logo} />
     </View> 

     <View>
        <TextInput placeholder="E-mail" style={styles.input1}/>

        <View style={styles.containerInput2}>

         <TextInput placeholder="Senha" style={styles.input2}

        secureTextEntry={visible} />

   <ButtonView visible={visible} toggleVisibility={toggleVisibility}/>  
        </View>

       

     <Button text="Acessar"/>  
    
     </View>

     <View style={styles.footer}>
    <Text>Não tenho conta.</Text>
    <TouchableOpacity>
       <Text style={styles.footerLink}> Criar conta agora.</Text> 
    </TouchableOpacity>
     </View>



    </View>
 }