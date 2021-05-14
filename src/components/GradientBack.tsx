import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBack = ({children}: Props) => {
  const {colors, prevcolors, setPrevMainColors} = useContext(GradientContext);
  const {fadeIn, opacity, fadeOut} = useFade();
  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut();
    });
  }, [colors]);
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevcolors.primary, prevcolors.secondary, '#242948']}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        start={{
          x: 0.1,
          y: 0.1,
        }}
        end={{
          x: 0.5,
          y: 0.7,
        }}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#242948']}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          start={{
            x: 0.1,
            y: 0.1,
          }}
          end={{
            x: 0.5,
            y: 0.7,
          }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBack;
