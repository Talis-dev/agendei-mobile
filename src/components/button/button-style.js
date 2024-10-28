import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({

btn : {  
    alignItems: 'center',
    borderRadius:8,

},
default: {
  backgroundColor: COLORS.gray1,
},
primary: {
  backgroundColor: COLORS.blue,
},
danger: {
  backgroundColor: COLORS.red,
},
ghost: {
  backgroundColor: COLORS.gray3,
},

text : {
    color: COLORS.white,
    fontSize:FONT_SIZE.lg,   
}

});