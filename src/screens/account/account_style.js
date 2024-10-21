import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({

container : {  
    flex:1,
    backgroundColor: COLORS.white,
    justifyContent:"space-between",
    padding:30,
    //margin:10,
    //paddingHorizontal:'30%',

},


containerLogo : {
    alignItems:"center",
    marginTop:50,
},

logo : {
width : 250,
height : 50,
resizeMode: 'contain',
},
input1 :{
    backgroundColor:COLORS.gray5,
    padding:14,
    borderRadius:8,
    marginBottom:20,
    fontSize:FONT_SIZE.md,
},

containerInput2:{
    backgroundColor:COLORS.gray5,
    borderRadius:8,
    flexDirection: 'row',
    //justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-end",
    marginBottom:20,
    padding:7,
},

input2 :{
    //backgroundColor:COLORS.gray3,
    padding:7,
    width:"91%",
    fontSize:FONT_SIZE.md,
},


footer : {
    justifyContent:"center",
    marginBottom:15,
    fontSize:FONT_SIZE.sm,
    flexDirection:"row",
},
footerLink: {
color:COLORS.blue,

},
});