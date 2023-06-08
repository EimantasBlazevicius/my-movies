import { MoviesState } from "../components/Movies/slice/types";
import { UserState } from "../slice/types";

interface states {
  user: UserState;
  moviesSearch: MoviesState;
}

export default states;
