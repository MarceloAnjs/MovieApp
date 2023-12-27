import { baseImagePath, searchMovies } from "../../api/apicalls";
import { useState } from "react";
import { SearchViewModel } from "./model";

const useSearchViewModel = (): SearchViewModel => {
  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error("Something went wrong in searchMoviesFunction ", error);
    }
  };

  return {
    searchList,
    baseImagePath,
    searchMoviesFunction,
  };
};
export default useSearchViewModel;
