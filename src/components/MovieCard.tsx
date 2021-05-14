import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  heigth?: number;
  width?: number;
}

const MovieCard = ({movie, heigth = 350, width = 250}: Props) => {
  const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', movie)}
      activeOpacity={0.9}
      style={{...sty.card, width: width, height: heigth}}>
      <View style={sty.shadow}>
        <Image
          style={sty.image}
          source={{
            uri: imageUri,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const sty = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
  },
  card: {
    width: 250,
    height: 350,
    marginHorizontal: 5,
  },
  shadow: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default MovieCard;
