import React, { Component} from "react";
import { View, Text, StyleSheet }  from "react-native";

class Aula01 extends Component {
    render(){
        return(
            <View style={ styles.container }>
                <Text style={ styles.texto }>Estrutura Padrão!</Text>
            </View>
        );
    }
}

export default Aula01;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black'
    alignItems: 'center',
    justifyContent: 'center'
}

texto: {
    color; 'white'
    fontSize: 50,
}

})