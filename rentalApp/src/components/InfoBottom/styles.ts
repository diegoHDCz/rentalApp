import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles =  StyleSheet.create({

  container:{
  

    width:'100%',
  },
  content:{
    margin:8,
  },
  header:{
    fontFamily:fonts.title,
    fontSize:14,
  },
  text:{
    fontFamily:fonts.desription,
    fontSize:14,

  },
  horizontalLine: {
  height:1,
  backgroundColor:'gray'
  },
})