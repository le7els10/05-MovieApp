import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {Image, StyleSheet, Text, View} from 'react-native';
interface Props {
  actor: Cast;
}
const ActorItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={sty.card}>
      {actor.profile_path && <Image source={{uri}} style={sty.image} />}
      <View style={{marginLeft: 10}}>
        <Text style={sty.title}>{actor.name}</Text>
        <Text style={sty.sub}>{actor.character}</Text>
      </View>
    </View>
  );
};

const sty = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  sub: {
    fontSize: 13,
    color: '#fff',
    opacity: 0.8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
export default ActorItem;
