import React, { Component} from "react";
import { View, Text, StyleSheet }  from "react-native";

class Aula05 extends Component {
    render(){
        return(
            <View styles={ styles.container }>
                <View style={ styles.caixa }>1/</View>
                <View style={ styles.caixa }>2/</View>
                <View style={ styles.caixa }>3/</View>
                <View>2/</View>
                <View>3/</View>
            </View>
        );
    }
}

export default Aula05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})