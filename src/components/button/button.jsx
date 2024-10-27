import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button-style";

function Button({size=15,theme,text,onPress}){

    return <>
    <TouchableOpacity style={[styles.btn,{ padding: size },
    theme === "danger" ? styles.danger :
    theme === "primary" ? styles.primary :
    theme === "ghost" ? styles.ghost :
    styles.default // Estilo padrão, caso nenhum tema corresponda
    ]} 

    onPress={onPress}
     >
  <Text style={styles.text} >
        {text}
        </Text>
  </TouchableOpacity>
    </>
}

export default Button