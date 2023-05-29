import { MOVIE_LIST } from "./actionTypes";

export const getMoviesList = payload => ({
    payload,
    type: MOVIE_LIST.getMovieList,
});

export const getMoviesListSuccess = payload => ({
    payload,
    type: MOVIE_LIST.getMovieListSuccess,
});


export const getMoviesListsError = payload => ({
    payload,
    type: MOVIE_LIST.getMovieListError,
});

export const getNextMovieList = payload => ({
    payload,
    type: MOVIE_LIST.getNextMovieList,
});

export const getNextMovieListSuccess = payload => ({
    payload,
    type: MOVIE_LIST.getNextMovieListSuccess,
});


export const getNextMovieListError = payload => ({
    payload,
    type: MOVIE_LIST.getNextMovieListError,
});
