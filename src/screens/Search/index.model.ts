import { api, baseImagePath } from "../../api/apicalls";
import { useState } from "react";
import { SearchViewModel } from "./model";

const useSearchViewModel = (): SearchViewModel => {
  const [searchList, setSearchList] = useState([]);
  const [isFetchingSearchList, setIsFetchingSearchList] = useState(false);

  const searchMoviesFunction = async (name: string) => {
    setIsFetchingSearchList(true);
    try {
      await api.getSearchMoviesList(name).then((response) => {
        setSearchList(response);
        setIsFetchingSearchList(false);
      });
    } catch (error) {
      console.error("Something went wrong in searchMoviesFunction ", error);
    }
  };

  return {
    searchList,
    baseImagePath,
    searchMoviesFunction,
    isFetchingSearchList,
  };
};
export default useSearchViewModel;
