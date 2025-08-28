import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Aula05 extends Component {
  render() {
    return (
      <View style={ styles.container   }>
        <View style={ styles.caixa1 }>1</View>
        <View style={ styles.caixa1 }>2</View>
        <View style={ styles.caixa1 }>3</View>
      </View>
    );
 }

 export default Aula05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MyComponent;
