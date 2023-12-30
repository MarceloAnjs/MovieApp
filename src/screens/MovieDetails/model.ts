export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: unknown[];
  production_countries: unknown[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: unknown[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetailsViewModel {
  movieData: IMovie;
  movieCastData: ICast[];
  isFetchingmovieCastData: boolean;
  isFetchingmovieData: boolean;
  baseImagePath: (size: string, path: string) => string;
}
