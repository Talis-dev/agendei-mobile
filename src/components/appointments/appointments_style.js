import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({

card :{
    flex:1,
    //flexDirection:"row",
    marginTop:15,
   // borderRadius:5,
    borderColor:COLORS.gray4,
   // borderWidth:1,
    borderBottomWidth:1,
    padding:5,
},
cardDate :{
    flex:1,
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"space-between",
},

icon : {
    width : 28,
    height : 28,
    resizeMode: 'contain',
    marginBottom:4,
    marginTop:4,
    
    },
textService : {
    fontSize:FONT_SIZE.lg,
    fontWeight:"bold",
    color:COLORS.gray1,
    marginTop:2,
    },
textSpecialty : {
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray3,
    marginTop:2,
    },    
date : {
    flexDirection:"row",
    alignItems: 'center',
    }, 
dateText : {
    fontSize:FONT_SIZE.sm,
    color:COLORS.gray3,
    //marginTop:2,
    },      
})