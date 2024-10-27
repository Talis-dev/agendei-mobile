import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";



export const styles = StyleSheet.create ({

card :{
    flex:1,
    flexDirection:"row",
    //alignItems:"center",
   // justifyContent:"space-evenly",
  //  marginTop:15,
  //  borderColor:COLORS.gray4,
   // borderBottomWidth:1,
    padding:10,
    paddingBottom:5,
    paddingTop:15,
    
},
cardText :{
    flex:1,
    marginHorizontal:5,
    //flexDirection:"column",
    //alignItems:"baseline",
    justifyContent:"flex-start",
    //marginTop:15,
   // padding:10,
},



icon : {
    width : 50,
    height : 50,
    resizeMode: 'contain',
    },


textDescription : {
    fontSize:FONT_SIZE.lg,
    color:COLORS.gray3,
    marginTop:2,
    },  

textPrice : {
    fontSize:FONT_SIZE.sm,
    color:COLORS.blue,
    marginTop:5,
    marginLeft:5,
    },
  

})