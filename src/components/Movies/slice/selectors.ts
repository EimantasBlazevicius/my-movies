import states from "../../../store/states.interface";

export const getFilteredMoviesSelector = (state: states) =>
  state.moviesSearch.data;

export const getSelectedMovieSelector = (state: states) =>
  state.moviesSearch.selected;

export const getMoviePostsSelector = (state: states) =>
  state.moviesSearch.posts;
