import { HomeViewModel } from "./model";
import {
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
} from "../../api/apicalls";
import { useEffect, useState } from "react";

const useHomeViewModel = (): HomeViewModel => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] =
    useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);

  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      setNowPlayingMoviesList([
        { id: "dummy1" },
        ...tempNowPlaying.results,
        { id: "dummy2" },
      ]);

      let tempPopular = await getPopularMoviesList();
      setPopularMoviesList(tempPopular.results);

      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tempUpcoming.results);
    })();
  }, []);

  const getNowPlayingMoviesList = async () => {
    try {
      let response = await fetch(nowPlayingMovies);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(
        " Something went wrong in getNowPlayingMoviesList Function",
        error
      );
    }
  };

  const getUpcomingMoviesList = async () => {
    try {
      let response = await fetch(upcomingMovies);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(
        " Something went wrong in getUpcomingMoviesList Function",
        error
      );
    }
  };

  const getPopularMoviesList = async () => {
    try {
      let response = await fetch(popularMovies);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(
        " Something went wrong in getPopularMoviesList Function",
        error
      );
    }
  };

  return {
    nowPlayingMoviesList,
    popularMoviesList,
    upcomingMoviesList,
    baseImagePath,
  };
};
export default useHomeViewModel;
