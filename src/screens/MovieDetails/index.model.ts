import { MovieDetailsViewModel } from "./model";
import { api, baseImagePath } from "../../api/apicalls";
import { useQuery } from "@tanstack/react-query";

const useMovieDetailsViewModel = (route: any): MovieDetailsViewModel => {
  const { data: movieCastData, isFetching: isFetchingmovieCastData } = useQuery(
    {
      queryKey: ["movieCastData"],
      queryFn: () => api.getMovieCastDetails(route.params.movieid),
    }
  );

  const { data: movieData, isFetching: isFetchingmovieData } = useQuery({
    queryKey: ["movieData"],
    queryFn: () => api.getMovieDetails(route.params.movieid),
  });

  return {
    movieData,
    movieCastData,
    isFetchingmovieCastData,
    isFetchingmovieData,
    baseImagePath,
  };
};

export default useMovieDetailsViewModel;
