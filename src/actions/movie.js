export const SET_MOVIES_SEARCH_VALUE = 'SET_MOVIES_SEARCH_VALUE';
export const GET_MOVIES_SEARCH = 'GET_MOVIES_SEARCH';
export const SAVE_MOVIES_SEARCH_LIST = 'SAVE_MOVIES_SEARCH_LIST';
export const CLEAN_MOVIES_SEARCH = 'CLEAN_MOVIES_SEARCH';

export const GET_MOVIE_INFO = 'GET_MOVIE_INFO';
export const SAVE_MOVIE_INFO = 'SAVE_MOVIE_INFO';

export const GET_MOVIE_UPCOMING ='GET_MOVIE_UPCOMING';
export const SAVE_MOVIE_UPCOMING = 'SAVE_MOVIE_UPCOMING';

export const setMoviesSearchValue = (id, value) => ({
    type: SET_MOVIES_SEARCH_VALUE,
    id,
    value,
});

export const getMoviesSearch = (paginationValue) => ({
    type: GET_MOVIES_SEARCH,
    paginationValue,
});

export const saveMoviesSearchList = (value) => ({
    type: SAVE_MOVIES_SEARCH_LIST,
    value,
})

export const cleanMoviesSearch = () => ({
    type: CLEAN_MOVIES_SEARCH,
})

export const getMovieInfo = (movieId) => ({
    type: GET_MOVIE_INFO,
    movieId,
})

export const saveMovieInfo = (value) => ({
    type: SAVE_MOVIE_INFO,
    value,
})

export const getMovieUpComing = () => ({
    type: GET_MOVIE_UPCOMING,
})

export const saveMovieUpComing = (value) => ({
    type: SAVE_MOVIE_UPCOMING,
    value,
})