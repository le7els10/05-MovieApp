import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {FullDetail} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import ActorItem from './ActorItem';

interface Props {
  movieDetails: FullDetail;
  cast: Cast[];
}

const MovieDetails = ({movieDetails, cast}: Props) => {
  return (
    <View style={{marginHorizontal: 20, paddingBottom: 50}}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Icon name="star" color="#fff" size={15} />
        <Text style={{color: '#fff', marginLeft: 5, fontSize: 15}}>
          {movieDetails.vote_average}
        </Text>

        <Text style={sty.normalText}>
          &nbsp; - {movieDetails.genres.map(genere => genere.name).join(', ')}
        </Text>
      </View>

      {/* Historia */}
      <Text style={sty.subtitle}>Historia</Text>
      <Text style={{...sty.normalText, marginTop: 10}}>
        {movieDetails.overview}
      </Text>

      <Text style={sty.subtitle}>Presupuesto</Text>
      <Text style={sty.normalText}>
        {currencyFormatter.format(movieDetails.budget, {code: 'USD'})}
      </Text>

      {/* Casting */}
      <View>
        <Text style={sty.subtitle}>Actores</Text>

        <FlatList
          data={cast}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ActorItem actor={item} />}
        />
      </View>
    </View>
  );
};

const sty = StyleSheet.create({
  normalText: {
    color: '#fff',
    fontSize: 15,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default MovieDetails;
