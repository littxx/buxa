import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const navigation = useNavigation();

  const proximaTela = () => {
    navigation.navigate('Solicitar');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View style={{ flex: 1 }}>
        <View style={styles.containerIcon}>
          <Icon name="water-outline" color="#1566b7" size={40} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textBold}>Bem vindo(a) {'\n'}ao seu diário de água!</Text>
          <Text style={styles.textComum}>
            Este aplicativo foi projetado para {'\n'}ajudá-lo a anotar a água consumida.
          </Text>
          {/*
          
          <Text style={styles.textComum}>
            Caso você tenha salvo seus dados {'\n'}anteriormente, o aplicativo permite que {'\n'}
            você restaure seus dados.
          </Text>
          */}
        </View>
        <View style={styles.containerButton}>
          {/*

          <TouchableOpacity onPress={openModal} style={styles.buttonEscuro}>
            <Text style={styles.textButton}>Restaurar dados</Text>
            <Modal visible={modal} onRequestClose={closeModal} transparent>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <TouchableOpacity onPress={closeModal}>
                    <Text style={styles.textCloseModal}>X</Text>
                  </TouchableOpacity>

                  <Text style={styles.modalText}>Armazenamento local</Text>
                  <Text style={styles.modalText}>Conta do Google</Text>

                  <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>*/}
          <TouchableOpacity onPress={proximaTela} style={styles.buttonClaro}>
            <Text style={styles.textButton}>Primeiro acesso</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  buttonEscuro: {
    paddingHorizontal: 108,
    paddingVertical: 15,
    backgroundColor: '#0c3864',
    borderRadius: 75,
    marginBottom: 10,
  },
  buttonClaro: {
    paddingHorizontal: 110,
    paddingVertical: 15,
    backgroundColor: '#1566b7',
    marginBottom: 15,
    borderRadius: 75,
  },

  textButton: {
    color: 'white',
    marginBottom: 2,
    fontSize: 16,
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  modalButton: {
    backgroundColor: '#1566B7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  restaurarText: {
    color: 'black',
    fontSize: 15,
  },
  restaurar: {
    marginBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textCloseModal: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 18,
    left: 78,
    bottom: 3,
  },
});
