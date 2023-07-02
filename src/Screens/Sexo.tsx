import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Bolinhas from '../Components/Bolinhas';
import { RadioButton } from 'react-native-paper';

export default function Sexo() {
  const navega = useNavigation();
  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const [selectedModalOption, setSelectedModalOption] = useState(null);

  const proximaTela = () => {
    navega.navigate('Resultado');
  };

  const handleFemaleIconPress = () => {
    setIsFemaleSelected(!isFemaleSelected);
  };

  const handleModalOptionChange = (value) => {
    setSelectedModalOption(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBolinha}>
        <Bolinhas bolaAtual={4} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textBold}>Selecione seu sexo</Text>
        <Text style={styles.textComum}>
          Homens e mulheres têm {'\n'}necessidades de hidratação {'\n'}diferentes.
        </Text>
      </View>
      <View style={styles.containerIcons}>
        <View>
          <TouchableOpacity
            style={[styles.buttonGenero, isFemaleSelected && styles.buttonSelected]}
            onPress={handleFemaleIconPress}
          >
            <Icon name="female" color="black" size={90} />
            {isFemaleSelected && <View style={styles.buttonDetail} />}
          </TouchableOpacity>
          <Text style={[styles.textCenter, isFemaleSelected && styles.textSelected]}>Feminino</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.buttonGenero, !isFemaleSelected && styles.buttonSelected]}
            onPress={handleFemaleIconPress}
          >
            <Icon name="male" color="black" size={90} />
          </TouchableOpacity>
          <Text style={[styles.textCenter, !isFemaleSelected && styles.textSelected]}>
            Masculino
          </Text>
        </View>
      </View>
      {isFemaleSelected && (
        <View style={styles.modalgrade}>
          <Text style={styles.modalTitle}>Opções femininas:</Text>
          <View style={styles.modalOption}>
            <RadioButton
              value="option1"
              status={selectedModalOption === 'option1' ? 'checked' : 'unchecked'}
              onPress={() => handleModalOptionChange('option1')}
            />
            <Text style={styles.modalOptionText}>Gravida</Text>
          </View>
          <View style={styles.modalOption}>
            <RadioButton
              value="option2"
              status={selectedModalOption === 'option2' ? 'checked' : 'unchecked'}
              onPress={() => handleModalOptionChange('option2')}
            />
            <Text style={styles.modalOptionText}>Amamentando</Text>
          </View>
        </View>
      )}
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={proximaTela} style={styles.buttonEscuro}>
          <Text style={styles.textWhite}>Pular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={proximaTela} style={styles.buttonClaro}>
          <Text style={styles.textWhite}>Concluir</Text>
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
  containerBolinha: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  containerText: {
    top: 10,
    flex: 1,
    left: 35,
    marginBottom: 10,
  },
  containerIcons: {
    flex: 2,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  textBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: 'black',
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
  buttonEscuro: {
    paddingHorizontal: 150,
    paddingVertical: 15,
    backgroundColor: '#0c3864',
    borderRadius: 75,
    marginBottom: 10,
  },
  buttonClaro: {
    paddingHorizontal: 140,
    paddingVertical: 15,
    backgroundColor: '#1566b7',
    marginBottom: 15,
    borderRadius: 75,
  },
  buttonGenero: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    backgroundColor: '#d6d6d6',
    borderRadius: 70,
  },
  buttonSelected: {
    backgroundColor: '#89bdf1',
  },
  buttonSelectedFemale: {
    backgroundColor: 'pink',
  },
  buttonSelectedMale: {
    backgroundColor: 'blue',
  },
  buttonDetail: {},
  textCenter: {
    textAlign: 'center',
    fontSize: 24,
  },
  textSelected: {
    color: 'black',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  modalOption: {
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  modalOptionText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  modalgrade: {
    bottom: 50,
  },
});
