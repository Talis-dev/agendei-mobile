import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({
container : {
  backgroundColor: COLORS.white,
  flex:1,
  justifyContent:"space-between",
  paddingTop:50,
  padding:8,
  //alignItems:"center",
},
text :{
    fontSize:FONT_SIZE.sm,
    fontWeight:"bold",
    color:COLORS.gray2,
    marginTop:5,
    marginLeft:"18%",
},


})