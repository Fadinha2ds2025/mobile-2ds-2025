import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

class Aula05  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.caixa1 }>1</View>
        <View style={ styles.caixa2 }>
          <Image
          style={ styles.img1 }
          source={{ uri: 'https://webterra.com.br/wp-content/uploads/2024/03/Pernambuco-400x400.jpg'}}
          />
        </View>
        <View style={ styles.caixa3 }>
            <Image>
                
            </Image>
        </View>
      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'white',
  },


  caixa1: {
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  },


  caixa2: {
   flex: 1,
   backgroundColor: 'green',
   alignItems: 'center',
   justifyContent: 'center',
   alignItems: 'center'
   
   
},

  caixa3: {
   backgroundColor: 'blue',
   height: 100,
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white',
   fontSize: 20
},

img1: {
    width: 50,
    height: 50,
},

})