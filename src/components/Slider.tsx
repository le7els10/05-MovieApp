import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
  title?: String;
  data: Movie[];
}

const Slider = ({data, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 210}}>
      {title && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            marginLeft: 10,
            color: '#fff',
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={data}
        renderItem={({item}: any) => (
          <MovieCard width={140} heigth={200} movie={item} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Slider;
