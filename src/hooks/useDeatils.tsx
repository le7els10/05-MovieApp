import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Credits} from '../interfaces/creditsInterface';
import {FullDetail} from '../interfaces/movieInterface';

interface Details {
  isLoading: boolean;
  movieFull?: FullDetail;
  cast: any[];
}

const useDeatils = (id: number) => {
  const [Details, setDetails] = useState<Details>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const detailsPromise = movieDB.get<FullDetail>(`/${id}`);
    const castPromise = movieDB.get<Credits>(`/${id}/credits`);

    const [detailsResponse, castResponse] = await Promise.all([
      detailsPromise,
      castPromise,
    ]);

    setDetails({
      isLoading: false,
      movieFull: detailsResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...Details,
  };
};

export default useDeatils;
