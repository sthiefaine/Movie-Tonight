export const SET_MOVIES_SEARCH_VALUE = 'SET_MOVIES_SEARCH_VALUE';
export const GET_MOVIES_SEARCH = 'GET_MOVIES_SEARCH';
export const SAVE_MOVIES_SEARCH_LIST = 'SAVE_MOVIES_SEARCH_LIST';
export const CLEAN_MOVIES_SEARCH = 'CLEAN_MOVIES_SEARCH';

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