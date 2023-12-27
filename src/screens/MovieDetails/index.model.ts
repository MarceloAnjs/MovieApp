import { MovieDetailsViewModel } from "./model";
import {
  baseImagePath,
  movieCastDetails,
  movieDetails,
} from "../../api/apicalls";
import { useEffect, useState } from "react";

const useMovieDetailsViewModel = (route: any): MovieDetailsViewModel => {
  const [movieData, setMovieData] = useState<any>(undefined);
  const [movieCastData, setmovieCastData] = useState<any>(undefined);

  const getMovieDetails = async (movieid: number) => {
    try {
      let response = await fetch(movieDetails(movieid));
      let json = await response.json();
      return json;
    } catch (error) {
      console.error("Something Went wrong in getMoviesDetails Function", error);
    }
  };

  const getMovieCastDetails = async (movieid: number) => {
    try {
      let response = await fetch(movieCastDetails(movieid));
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(
        "Something Went wrong in getMovieCastDetails Function",
        error
      );
    }
  };

  useEffect(() => {
    (async () => {
      const tempMovieData = await getMovieDetails(route.params.movieid);
      setMovieData(tempMovieData);
    })();

    (async () => {
      const tempMovieCastData = await getMovieCastDetails(route.params.movieid);
      setmovieCastData(tempMovieCastData.cast);
    })();
  }, []);

  return {
    movieData,
    movieCastData,
    baseImagePath,
  };
};

export default useMovieDetailsViewModel;
