import {
    SET_MOVIES_SEARCH_VALUE,
    SAVE_MOVIES_SEARCH_LIST,
    CLEAN_MOVIES_SEARCH,
  } from '../actions/movie';
  
  export const initialState = {
    searchMovie: '',
    moviesSearchResults: {
      moviesList: [],
    },

  };
  
  const movie = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_MOVIES_SEARCH_VALUE:
          return {
            ...state,
            [action.id]: action.value,
          };
        case CLEAN_MOVIES_SEARCH: 
          return {
            ...state,
            moviesSearchResults: {
              moviesList: [],
          }
        };
        case SAVE_MOVIES_SEARCH_LIST: {
          return {
            ...state,
            moviesSearchResults: {
              moviesActualPage: action.value.page,
              moviesTotalPage: action.value.total_pages,
              moviesNbResults: action.value.total_results,

              moviesList: [
                ...state.moviesSearchResults.moviesList, 
                ...action.value.results],
            }
          }
        }
      default:
        return state;
    }
  };
  
  export default movie;
  