import { MOVIE_LIST } from "./actionTypes";

const initialState = {
  listOfMovies: [],
  nextListOfMovies:[],
  error: null,
  loading: false,
};

export const movieList = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_LIST.getMovieList:
      return { ...state, loading: true };
    case MOVIE_LIST.getMovieListSuccess:
      const {page} = payload
      console.log("reducer load getMovieListSuccess ", payload)
      return { ...state, listOfMovies: payload, nextListOfMovies:page["content-items"].content, loading: false };
    case MOVIE_LIST.getMovieListError:
      return { ...state, error: payload, loading: false };
      case MOVIE_LIST.getNextMovieList:
      return { ...state, loading: true };
    case MOVIE_LIST.getNextMovieListSuccess:
            console.log("reducer load ", payload)
      return { ...state, listOfMovies: state.listOfMovies,nextListOfMovies:[...state.nextListOfMovies,...payload], loading: false };
    case MOVIE_LIST.getNextMovieListError:
      return { ...state, error: payload, loading: false };
      
    default:
      return state;
  }
};
