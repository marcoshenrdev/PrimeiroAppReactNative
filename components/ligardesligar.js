import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default function (props) {
    
    const [img, setImg] = useState(false)

    return (
        <View>
            <View style={style.containerimg}>
                <Image
                    source={img ? require('../assets/lamplig.png') : require('../assets/lampdesl.png')} />
                <TouchableOpacity
                    style={style.botao}
                    onPress={()=>setImg(!img)}
                >
                    <Text style={style.txtbtn}>{img ? 'Desligar' : 'Ligar'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    botao:{
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 10,
      marginTop: 50
    },
    containerimg:{
        marginTop:10,
        height:350,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    txtbtn:{
        color: 'white'
    }
  })

