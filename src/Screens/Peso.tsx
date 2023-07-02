import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bolinhas from '../Components/Bolinhas';
import { Picker } from 'react-native-wheel-pick';

export default function Peso() {
  const navigation = useNavigation();

  const proximaTela = () => {
    navigation.navigate('Idade');
  };

  const [item, setItem] = useState();

  const peso = [];

  for (let i = 1; i <= 200; i++) {
    peso.push(i);
  }

  const pesoPicker = peso.map((peso) => `${peso} KG`);

  return (
    <View style={styles.container}>
      <View style={styles.containerBalls}>
        <Bolinhas bolaAtual={2} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textBold}>Selecione o seu peso</Text>
        <Text style={styles.textComum}>
          Pesos diferentes tem um consumo {'\n'}diário diferente.
        </Text>
      </View>
      <View style={styles.containerPicker}>
        <Picker
          style={{ backgroundColor: 'white', width: 100, height: 320 }}
          selectTextColor="#000"
          isShowSelectBackground={false} // Default is true
          selectBackgroundColor="#fff" //
          selectedValue="30 kg"
          pickerData={pesoPicker}
          isShowSelectLine={true} // Default is true
          selectLineColor="#8c8c8c"
          selectLineSize={6}
          onValueChange={(setItem: any) => console.log(setItem)}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={proximaTela} style={styles.button}>
          <Text style={styles.textWhite}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function PesoPessoa() {
  return {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerBalls: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  containerText: {
    top: 10,
    flex: 1,
    left: 35,
  },
  containerPicker: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 2,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textBold: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'black',
    paddingBottom: 2,
    marginBottom: 2,
  },
  textComum: {
    color: '#565656',
    marginTop: 10,
    fontFamily: 'Roboto',
    fontSize: 18,
  },

  textWhite: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Roboto',
  },

  button: {
    paddingHorizontal: 140,
    paddingVertical: 15,
    backgroundColor: '#1566b7',
    marginBottom: 23,
    borderRadius: 75,
  },
  datePicker: {
    color: 'red',
    marginTop: 30,
    width: 300,
    height: 270,
  },
});
