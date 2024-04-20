import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableHighlight } from "react-native";

export default function calcindice() {

  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)


  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>

      <View style={estilos.bloco}>
        <Text>Informe seu Peso:</Text>
        <TextInput
          autoFocus={true}
          keyboardType={'numeric'}
          value={peso.toString()}
          onChangeText={text => setPeso(parseFloat(text))}
          style={estilos.txt}
        />
      </View>
      <View style={estilos.bloco}>
        <Text>Informe sua Altura:</Text>
        <TextInput
          autoFocus={false}
          keyboardType={'numeric'}
          value={altura.toString()}
          onChangeText={text => setAltura(parseFloat(text))}
          style={estilos.txt}
        />
      </View>
      <View style={estilos.bloco}>
        <TouchableHighlight
          style={estilos.btnCalc}
        >
          <Text style={estilos.txtBtn}>
            Calcular IMC
          </Text>
        </TouchableHighlight>
      </View>
      <View style={estilos.bloco}>
        <Text>Resultado: </Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    padding: 10
  },
  bloco: {
    marginBottom: 20
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff'
  }

})


