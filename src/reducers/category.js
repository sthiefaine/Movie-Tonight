import {
    SET_MOVIES_SEARCH_VALUE,
    SAVE_MOVIES_SEARCH_LIST,
    CLEAN_MOVIES_SEARCH,
    SAVE_MOVIE_INFO,
    SAVE_MOVIE_UPCOMING,
  } from '../actions/movie';
  
  export const initialState = {
    searchMovie: '',
    moviesSearchResults: {
      moviesList: [],
    },
    movieInfo: '',
    movieUpComing: [],
  };
  
  const category = (state = initialState, action = {}) => {
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
        };
        case SAVE_MOVIE_INFO: {
          return {
            ...state,
            movieInfo: action.value,
          }
        }
        case SAVE_MOVIE_UPCOMING: {
          return {
            ...state,
            movieUpComing: action.value.results,
          }
        }

      default:
        return state;
    }
  };
  
  export default category;
  