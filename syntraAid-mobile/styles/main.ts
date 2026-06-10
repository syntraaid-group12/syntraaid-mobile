import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
  { 
    container:{
      flex:1,
      backgroundColor:'white',
      height: '100%',
      padding:25,
      justifyContent: 'center',
      alignItems: 'center',
},

box:{
  borderRadius: 20,
  backgroundColor: 'green',
  color:'white',
  margin:10,
  padding:5,
},

box2:{
  color:'black',
  borderRadius: 10,
  backgroundColor: 'white',
  margin:20,
  padding:20,
},

box3:{
  borderRadius: 10,
  backgroundColor: 'green',
  margin:15,
  padding:30,
 // flexDirection: 'row',
 // justifyContent: 'space-between',
 // width: '75%',
  
},


boxtext:{
  padding:10,
  color:'blue',
  fontSize:20,
  textAlign:'center',
  fontWeight:'bold',

},

text1:{

  padding:10,
  color:'green',
  fontSize:25,
  textAlign:'left',
  fontWeight:'bold',

},

text:{
  padding:10,
  color:'green',
  fontSize:20,
  textAlign:'center',
  fontWeight:'bold',
},

text2:{
  padding:10,
  color:'black',
  fontSize:20,
  textAlign:'center',
  fontWeight:'normal',
},

textright:{
  fontSize:12, 
  textAlign: 'right'},
  textcenter:{
  fontSize:12, 
  textAlign: 'center'},

input:{
  backgroundColor: '#bdedfc',
  padding:10,
  marginTop:10,
  borderRadius:10

},

text3:{
  padding:5,
  color:'#fff',
  fontSize:20,
  textAlign:'center',
  fontWeight:'normal',
},

text4:{

  padding:10,
  color:'#000',
  fontSize:18,
  textAlign:'left',
  fontWeight:'bold',
 

},

text5:{
  margin:12,
  padding:10,
  color:'#000',
  fontSize:12,
  textAlign:'left',
  fontWeight:'bold',
  borderWidth:1,
  borderColor:'green',

},

link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign:'center',
  },

link1: {
    color: 'green',
    textDecorationLine: 'underline',
    textAlign:'center',
    fontSize:14,
  },


  });

//export default styles;