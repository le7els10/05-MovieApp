import React from 'react';
import {Animated, Button, View} from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#bbb',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: '#fff',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10,
        }}></Animated.View>

      <Button title="Fade in" onPress={() => fadeIn()} />
      <Button title="Fade out" onPress={() => fadeOut()} />
    </View>
  );
};

export default FadeScreen;
