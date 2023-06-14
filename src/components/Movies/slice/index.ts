import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoviesState, MoviesInterface, SearchMoviesInterface } from "./types";
import { MoviePostInterface } from "../../../helpers/database";

const initialState: MoviesState = {
  isLoading: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getFilteredMovies: (state, action) => {
      state.isLoading = true;
    },
    getFilteredMoviesSuccess: (
      state,
      action: PayloadAction<SearchMoviesInterface[]>
    ) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getSelectedMovie: (state, action) => {
      state.isLoading = true;
    },
    getSelectedMovieSuccess: (
      state,
      action: PayloadAction<MoviesInterface>
    ) => {
      state.selected = action.payload;
      state.isLoading = false;
    },
    getMoviePosts: (state) => {
      state.isLoading = true;
    },
    getMoviePostsSuccess: (
      state,
      action: PayloadAction<MoviePostInterface[]>
    ) => {
      console.log(action.payload);
      state.posts = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getFilteredMovies,
  getFilteredMoviesSuccess,
  getSelectedMovie,
  getSelectedMovieSuccess,
  getMoviePosts,
  getMoviePostsSuccess,
} = moviesSlice.actions;
export default moviesSlice.reducer;
