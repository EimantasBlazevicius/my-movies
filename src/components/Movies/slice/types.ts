export interface SearchMoviesInterface {
  Title: string;
  Year: string;
  Poster: string;
}

export interface RatingsInterface {
  Source: string;
  Value: string;
}

export interface MoviesInterface {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingsInterface[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export type MoviesState = {
  data?: SearchMoviesInterface[];
  selected?: MoviesInterface;
  isLoading: boolean;
};
