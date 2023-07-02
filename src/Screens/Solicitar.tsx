import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function Solicitar() {
  const navigation = useNavigation();

  const proximaTela = () => {
    navigation.navigate('Acordar');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name="cup" color="#1566b7" size={40} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textBold}>Vamos personalizar {'\n'}sua experiência</Text>
        <Text style={styles.textComum}>
          Para a recomendação ideal de água {'\n'}para você, é necessário fornecer {'\n'}algumas
          informações básicas.
        </Text>
        <Text style={styles.textComum}>
          Será usado apenas para calcular a quantidade recomendada de água.
        </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={proximaTela}>
          <Text style={styles.textWhite}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerIcon: {
    marginTop: 60,
    marginLeft: 12,
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  containerText: {
    top: 10,
    marginLeft: 37,
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 31,
    color: 'black',
  },
  textComum: {
    marginTop: 10,
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#565656',
  },

  textWhite: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
  },

  button: {
    paddingHorizontal: 150,
    paddingVertical: 15,
    backgroundColor: '#1566b7',
    marginBottom: 18,
    borderRadius: 75,
  },
});
