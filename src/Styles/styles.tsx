import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerSplash: {
    flex: 1,
    backgroundColor: '#1566B7',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
