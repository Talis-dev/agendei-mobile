import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({
container : {
  flex:1,
  //flexDirection:"column",
  backgroundColor: COLORS.white,
  justifyContent:"center",
 // alignItems:"center",
 // padding:12,
  
  //alignItems:"center",
},
banner : {
  backgroundColor: COLORS.blue,
 // flex:1,
  flexDirection:"column",
// justifyContent:"center",
 alignItems:"center",
  padding:10,
  paddingTop:10,
  
},


icon : {
  width : 100,
  height :100,
  resizeMode: 'contain',
  }, 

name :{
    fontSize:FONT_SIZE.xl,
    fontWeight:"bold",
    color:COLORS.gray5,
    marginTop:10,
},
specialty :{
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray5,
    marginTop:10,
    marginBottom:20,
},

})