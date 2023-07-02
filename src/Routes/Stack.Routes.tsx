//import libs
import { createStackNavigator } from '@react-navigation/stack';

//import de Screens
import Splash from '../Screens/Splash';
import Welcome from '../Screens/Welcome';
import Solicitar from '../Screens/Solicitar';
import Acordar from '../Screens/Acordar';
import Dormir from '../Screens/Dormir';
import Peso from '../Screens/Peso';
import Idade from '../Screens/Idade';
import Sexo from '../Screens/Sexo';
import Resultado from '../Screens/Resultado';

export default function StackRoutes() {
  const resume = {
    headerShown: false,
    cardStyle: {
      backgroundColor: 'white',
    },
    cardShadowEnabled: false,
    gestureEnabled: false,
  };

  const cardPersonalizar = {
    headerStyle: {
      backgroundColor: '#F6F6F6',
    },
    headerTitle: 'Personalização',
  };

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={resume} />
      <Stack.Screen name="Welcome" component={Welcome} options={resume} />
      <Stack.Screen name="Solicitar" component={Solicitar} options={resume} />
      <Stack.Screen name="Acordar" component={Acordar} options={resume} />
      <Stack.Screen name="Dormir" component={Dormir} options={resume} />
      <Stack.Screen name="Peso" component={Peso} options={resume} />
      <Stack.Screen name="Idade" component={Idade} options={resume} />
      <Stack.Screen name="Sexo" component={Sexo} options={resume} />
      <Stack.Screen name="Resultado" component={Resultado} options={resume} />
    </Stack.Navigator>
  );
}
