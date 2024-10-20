
import { TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';


export default function ButtonView( { visible, toggleVisibility } ){


    return (
<TouchableOpacity  onPress={toggleVisibility}>
<Icon
  name={visible ? "visibility" : "visibility-off"}
  type="material"
  color="#a1a1a1"
  size={30}
/>  
  </TouchableOpacity>
   
) 
}

