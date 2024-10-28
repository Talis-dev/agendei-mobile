import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({

card :{
    flex:1,
    backgroundColor:COLORS.white,
    //flexDirection:"center",
   //marginTop:5,
   // borderRadius:5,
   borderTopWidth:1,
   borderColor:COLORS.gray4,
   // borderWidth:1,
   // borderBottomWidth:1,
    //padding:5,
},
cardDate :{
    marginTop:5,
    borderBottomWidth:1,
    borderColor:COLORS.gray4,
    flexDirection:"column",
    alignItems: "baseline",
    padding:30,
    //justifyContent:"space-between",
},

    textFixed : {
    fontSize:FONT_SIZE.sm,
    //fontWeight:"bold",
    color:COLORS.gray3,
    //marginTop:2,
    },
    
    textIn : {
    fontSize:FONT_SIZE.lg,
    color:COLORS.gray1,
    marginTop:8,
    },    
    btSair:{
padding:40,

    }    
    
})