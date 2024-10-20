import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({

btn : {  
    backgroundColor: COLORS.blue,
    alignItems: 'center',
  //  justifyContent: 'center',
    padding:15,
    borderRadius:8,
   // margin:10,
   // paddingHorizontal:'30%',

},

text : {
    
    color: COLORS.white,
    fontSize:FONT_SIZE.lg,   
}

});