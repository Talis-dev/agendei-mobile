import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({

card :{
    flexDirection:"row",
    marginTop:15,
    borderRadius:5,
    borderColor:COLORS.gray4,
    borderWidth:1,
    padding:10,
},
icon : {
    width : 50,
    height : 50,
    resizeMode: 'contain',
    },
textName : {
    fontSize:FONT_SIZE.lg,
    fontWeight:"bold",
    color:COLORS.gray2,
    marginTop:2,
    },
textSpecialty : {
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray3,
    marginTop:2,
    },    

})