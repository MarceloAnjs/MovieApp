export interface IGetNowPlayingMoviesList {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGetUpcomingMoviesList {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGetUpcomingMoviesList {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface HomeViewModel {
  nowPlayingMoviesList: IGetNowPlayingMoviesList[];
  isFetchingNowPlayingMoviesList: boolean;

  popularMoviesList: any[];
  isFetchingPopularMoviesList: boolean;

  upcomingMoviesList: IGetUpcomingMoviesList[];
  isFetchingUpcomingMoviesList: boolean;
  baseImagePath: (size: string, path: string) => string;
}
