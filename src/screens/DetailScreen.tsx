import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import useDeatils from '../hooks/useDeatils';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const {height} = Dimensions.get('screen');

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {movieFull, cast, isLoading} = useDeatils(movie.id);

  return (
    <ScrollView>
      <View style={sty.imageContainer}>
        <View style={sty.imageBorder}>
          <Image style={sty.mainImage} source={{uri: imageUri}} />
        </View>
      </View>
      <View style={sty.marginContainer}>
        <Text style={sty.subTitle}>{movie.original_title}</Text>
        <Text style={sty.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="#fff" />
      ) : (
        <MovieDetails movieDetails={movieFull!} cast={cast} />
      )}
      <View style={sty.back}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="#fff" size={40} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const sty = StyleSheet.create({
  mainImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
    color: '#fff',
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageContainer: {
    //overflow: 'hidden',
    width: '100%',
    height: height * 0.55,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
    zIndex: 8,
  },
  back: {
    position: 'absolute',
    zIndex: 9,
    elevation: 99,
    top: 0,
    left: 0,
    backgroundColor: '#242948',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default DetailScreen;
