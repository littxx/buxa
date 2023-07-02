import React, { useEffect } from 'react';
import { View, Image, StatusBar, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';
import styles from '../Styles/styles';

export default function Splash() {
  const navega = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navega.navigate('Welcome');
    }, 3000);
  });

  return (
    <Animated.View style={styles.containerSplash} entering={FadeIn.duration(2000)}>
      <StatusBar hidden={true} />
      <View style={styles.containerCenter}>
        <Image source={require('../Assets/images/logo.png')} />
      </View>
    </Animated.View>
  );
}
