import React, {useContext, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MovieCard from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';
import Slider from '../components/Slider';
import GradientBack from '../components/GradientBack';
import getColors from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const {OnBillBoard, isLoading, Popular, TopRated, Upcoming} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);
  const getPostedColors = async (uri: string) => {
    const [
      primary = 'transparent',
      secondary = 'transparent',
    ] = await getColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (OnBillBoard.length > 0) {
      getPostedColors(OnBillBoard[0].poster_path);
    }
  }, [OnBillBoard]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="#bbb" size={100} />
      </View>
    );
  }

  return (
    <GradientBack>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View
            style={{
              height: 440,
            }}>
            <Carousel
              data={OnBillBoard}
              renderItem={({item}: any) => <MovieCard movie={item} />}
              sliderWidth={width}
              itemWidth={250}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index =>
                getPostedColors(OnBillBoard[index].poster_path)
              }
            />
          </View>

          <Slider data={Popular} title="Populares" />
          <Slider data={TopRated} title="Top rated" />
          <Slider data={Upcoming} title="Nuevos" />
        </View>
      </ScrollView>
    </GradientBack>
  );
};

export default HomeScreen;
