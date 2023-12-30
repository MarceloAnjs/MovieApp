import { HomeViewModel } from "./model";
import { baseImagePath, api } from "../../api/apicalls";
import { useQuery } from "@tanstack/react-query";

const useHomeViewModel = (): HomeViewModel => {
  const {
    data: nowPlayingMoviesList,
    isFetching: isFetchingNowPlayingMoviesList,
  } = useQuery({
    queryKey: ["NowPlayingMoviesList"],
    queryFn: api.getNowPlayingMoviesList,
  });

  const { data: upcomingMoviesList, isFetching: isFetchingUpcomingMoviesList } =
    useQuery({
      queryKey: ["UpcomingMoviesList"],
      queryFn: api.getUpcomingMoviesList,
    });

  const { data: popularMoviesList, isFetching: isFetchingPopularMoviesList } =
    useQuery({
      queryKey: ["PopularMoviesList"],
      queryFn: api.getPopularMoviesList,
    });

  return {
    nowPlayingMoviesList,
    isFetchingNowPlayingMoviesList,
    popularMoviesList,
    isFetchingPopularMoviesList,
    upcomingMoviesList,
    isFetchingUpcomingMoviesList,
    baseImagePath,
  };
};
export default useHomeViewModel;
