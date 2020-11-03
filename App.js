import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import Torch from "react-native-torch"

export default class App extends React.Component{

  onPressOn=()=>{
     Torch.switchState(true)
  }

  onPressOff=()=>{
    Torch.switchState(false)
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize:20,marginBottom:10}}>
          A Simple Torch App
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={this.onPressOn}>
          <Text style={styles.text}> On </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.onPressOff}>
          <Text style={styles.text}> Off </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    color:"#FFF",
    fontSize:15
  },
  button:{
    height:60,
    width:130,
    marginTop:10,
    borderRadius:10,
    backgroundColor:"#161F3D",
    justifyContent:"center",
    alignItems:"center"
  }
})
