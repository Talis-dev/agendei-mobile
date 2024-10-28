import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button-style";

function Button({size=15,theme,text,onPress,disabled}){

    return <>
    <TouchableOpacity style={[styles.btn,{ padding: size },
    theme === "danger" ? styles.danger :
    theme === "primary" ? styles.primary :
    theme === "ghost" ? styles.ghost :
    styles.default // Estilo padrão, caso nenhum tema corresponda
    ]} 

    onPress={onPress}
     >
       {disabled ? (
                      <Text  >
                       <Icon
  name="cloud-sync"
  type="material"
  color="#fff"
  size={24}
/> 
                      </Text>
                    ) : (
                      <Text style={styles.text} >
                      {text}
                      </Text>
                    )}

  </TouchableOpacity>
    </>
}

export default Button