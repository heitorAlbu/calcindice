import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableHighlight, Alert, Image } from "react-native";

export default function calcindice() {

  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [resultado, setResultado] = useState<string>('');
  const calcImc = () => {
    if (peso === 0 || !peso) {
      Alert.alert('informe o Peso')
      return;
    }
    if (altura === 0 || !altura) {
      Alert.alert('informe a Altura')
      return;
    }

    //const r = peso/(Math.pow(altura,2))
    const r = peso / (altura * altura);
    setResultado(r.toFixed(1))
  }

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>

      <View style={estilos.bloco}>
        <Text>Informe seu Peso:</Text>
        <TextInput
          autoFocus={true}
          keyboardType={'decimal-pad'}
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
          onPress={calcImc}
        >
          <Text style={estilos.txtBtn}>
            Calcular IMC
          </Text>
        </TouchableHighlight>
      </View>
      <View style={estilos.bloco}>
        <Text>Resultado:{resultado} </Text>
      </View>

      <View>
        <Image
          source={require('./assets/img-calcindice.png')}
          style={estilos.tabela}
        />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tabela: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: 57
  },
  corpo: {
    padding: 10
  },
  bloco: {
    marginBottom: 20,
    width: '100%'
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




