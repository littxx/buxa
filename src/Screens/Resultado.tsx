import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Peso from './Peso';
import Idade from './Idade';

export default function Resultado() {
  return (
    <View>
      <View>{Peso}</View>
      <View></View>
      <View>
        <TouchableOpacity>
          <Text>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1566b7',
  },
});
