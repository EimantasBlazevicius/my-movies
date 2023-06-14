import { takeEvery, put, call } from "redux-saga/effects";
import {
  getFilteredMovies,
  getFilteredMoviesSuccess,
  getSelectedMovie,
  getSelectedMovieSuccess,
  getMoviePosts,
  getMoviePostsSuccess,
} from ".";
import { MoviesInterface, SearchMoviesInterface } from "./types";
import axios, { AxiosResponse } from "axios";
import database, { MoviePostInterface } from "../../../helpers/database";

function fetchMovies(title: string) {
  if (title.length > 3) {
    return axios.get(
      `https://www.omdbapi.com/?s=${title}&apikey=8f20ba49&type=movie`
    );
  }
}

function fetchSelectedMovie(title: string) {
  return axios.get(`https://www.omdbapi.com/?t=${title}&apikey=8f20ba49`);
}

function fetchMoviePosts(): Promise<MoviePostInterface[]> {
  return database.getPosts();
}

function* getFilteredMoviesFetch(action: ReturnType<typeof getFilteredMovies>) {
  const response: AxiosResponse<{ Search: SearchMoviesInterface[] }> =
    yield call(() => fetchMovies(action.payload));

  yield response &&
    response.data &&
    put(getFilteredMoviesSuccess(response.data.Search));
}

function* getSelectedMovieFetch(action: ReturnType<typeof getFilteredMovies>) {
  const response: AxiosResponse<MoviesInterface> = yield call(() =>
    fetchSelectedMovie(action.payload)
  );

  yield response &&
    response.data &&
    put(getSelectedMovieSuccess(response.data));
}

function* getMoviePostsFetch() {
  const response: MoviePostInterface[] = yield call(() => fetchMoviePosts());

  yield response && put(getMoviePostsSuccess(response));
}

function* moviesSaga() {
  yield takeEvery(getFilteredMovies.type, getFilteredMoviesFetch);
  yield takeEvery(getSelectedMovie.type, getSelectedMovieFetch);
  yield takeEvery(getMoviePosts.type, getMoviePostsFetch);
}

export default moviesSaga;
