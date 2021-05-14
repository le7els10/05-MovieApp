import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {GradientContext} from '../context/GradientContext';
import {Movie, MoviesInterface} from '../interfaces/movieInterface';

interface MovieState {
  OnBillBoard: Movie[];
  Popular: Movie[];
  TopRated: Movie[];
  Upcoming: Movie[];
}

export const useMovies = () => {
  const [MovieState, setMoviesState] = useState<MovieState>({
    OnBillBoard: [],
    Popular: [],
    TopRated: [],
    Upcoming: [],
  });

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const now_playingPromise = movieDB.get<MoviesInterface>('/now_playing');
    const popularPromise = movieDB.get<MoviesInterface>('/popular');
    const top_ratedPromise = movieDB.get<MoviesInterface>('/top_rated');
    const upcomingPromise = movieDB.get<MoviesInterface>('/upcoming');

    const res = await Promise.all([
      now_playingPromise,
      popularPromise,
      top_ratedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      OnBillBoard: res[0].data.results,
      Popular: res[1].data.results,
      TopRated: res[2].data.results,
      Upcoming: res[3].data.results,
    });

    setisLoading(false);
  };

  return {
    ...MovieState,
    isLoading,
  };
};
