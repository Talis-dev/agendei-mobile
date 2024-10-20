import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./button-style";

function Button(props){

    return (

        <View>
<TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Pressed ')} >
  <Text style={styles.text} >
        {props.text}
        </Text>
  </TouchableOpacity>
        </View>
    )
}

export default Button