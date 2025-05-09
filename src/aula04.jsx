import React, { Component} from "react";
import { View, Text, StyleSheet, Image }  from "react-native";

class Aula04 extends Component {
    render(){
        return(
            <View>
                <Text>Aula04 - trabalhando com imagens</Text>
                <Image 
                    style={ styles.img }
                    source={{ uri: 'https://static.vecteezy.com/ti/fotos-gratis/t1/30761231-cavalos-casal-pastar-em-montanhas-flores-campo-luz-solar-fundo-amoroso-cavalo-casal-se-beijando-em-entre-florescendo-prado-amor-do-dois-lindo-selvagem-animais-dentro-colinas-foto.jpg'}}
                /> 
            </View>
        );
    }
}

export default Aula04;



const styles = StyleSheet.create({
    img: {
        width: 400,
        height: 250,
    }

})