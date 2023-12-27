export interface HomeViewModel {
  nowPlayingMoviesList: any[];
  popularMoviesList: any[];
  upcomingMoviesList: any[];
  baseImagePath: (size: string, path: string) => string;
}
