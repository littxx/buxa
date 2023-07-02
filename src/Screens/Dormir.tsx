import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bolinhas from '../Components/Bolinhas';
import DatePicker from 'react-native-date-picker';

export default function Dormir() {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());

  const proximaTela = () => {
    navigation.navigate('Peso');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerBalls}>
        <Bolinhas bolaAtual={1} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textBold}>Selecione a hora que {'\n'}dorme:</Text>
        <Text style={styles.textComum}>Não tocarão lembretes a partir deste {'\n'}horário:</Text>
      </View>
      <View style={styles.containerPicker}>
        <DatePicker
          style={styles.datePicker}
          date={date}
          mode="time"
          onDateChange={setDate}
          androidVariant="nativeAndroid"
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
