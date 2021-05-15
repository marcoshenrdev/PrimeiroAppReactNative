import React from 'react';
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ligardesligar from './components/ligardesligar';

export default function App1() {
  return (
    <View>
      <View style={style.container}>
        <Text style={style.title}>Lâmpada React Native</Text>
        <Text>{"\n"}{"\n"}{"\n"}</Text>
        <Ligardesligar/>
      </View>
   </View>
  );
};

const style = StyleSheet.create({

  container:{
    justifyContent: 'center',
    alignItems: 'center',
    
},
title:{
  fontFamily: 'Arial',
  fontSize: 20,
  color: 'white',
  padding:10,
  backgroundColor:'gray',
  borderRadius: 10,
  marginTop:50
}
})
