import axios from "axios";
import {
  IGetNowPlayingMoviesList,
  IGetUpcomingMoviesList,
} from "../screens/Home/model";
import { ICast, IMovie } from "../screens/MovieDetails/model";

// DO NOT USE ENV VARIABLES IN PRODUCTION, THAT IS NOT SAFE BECAUSE THAT IS VISIBLE TO THE USER
const apikey: string = process.env.EXPO_PUBLIC_API_KEY;

export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apikey,
  },
});

async function getNowPlayingMoviesList(): Promise<IGetNowPlayingMoviesList[]> {
  try {
    let response = await client.get("/movie/now_playing");
    return response.data.results;
  } catch (error) {
    console.error(
      " Something went wrong in getNowPlayingMoviesList Function",
      error
    );
  }
}

async function getUpcomingMoviesList(): Promise<IGetUpcomingMoviesList[]> {
  try {
    let response = await client.get("/movie/upcoming");
    return response.data.results;
  } catch (error) {
    console.error(
      " Something went wrong in getUpcomingMoviesList Function",
      error
    );
  }
}

async function getPopularMoviesList(): Promise<IGetUpcomingMoviesList[]> {
  try {
    let response = await client.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.error(
      " Something went wrong in getPopularMoviesList Function",
      error
    );
  }
}

async function getMovieCastDetails(id: number): Promise<ICast[]> {
  try {
    let response = await client.get(`/movie/${id}/credits?api_key=${apikey}`);
    return response.data.cast;
  } catch (error) {
    console.error(" Something went wrong in getMovieDetails Function", error);
  }
}

async function getMovieDetails(id: number): Promise<IMovie> {
  try {
    let response = await client.get(`/movie/${id}?api_key=${apikey}`);
    return response.data;
  } catch (error) {
    console.error(" Something went wrong in getMovieDetails Function", error);
  }
}

async function getSearchMoviesList(keyword: string): Promise<any> {
  try {
    let response = await client.get(`/search/movie?query=${keyword}`);
    return response.data.results;
  } catch (error) {
    console.error(" Something went wrong in searchMoviesList Function", error);
  }
}

export const api = {
  getNowPlayingMoviesList,
  getUpcomingMoviesList,
  getPopularMoviesList,
  getMovieCastDetails,
  getMovieDetails,
  getSearchMoviesList,
};
