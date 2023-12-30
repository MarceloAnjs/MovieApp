export interface SearchViewModel {
  searchList: any[];
  baseImagePath: (size: string, path: string) => string;
  searchMoviesFunction: (name: string) => Promise<void>;
  isFetchingSearchList: boolean;
}
