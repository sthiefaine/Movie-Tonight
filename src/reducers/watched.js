import {
  TOGGLE_WATCHED
  } from '../actions/watched';
  
  export const initialState = {
    watchedMovies: [],
  };
  
  const watched = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_WATCHED: {
          console.log('REDUCER TOGGLE_WATCHED');
          const watchedFilmIndex = state.watchedMovies.findIndex(item => item.id === action.value.id)
          if (watchedFilmIndex !== -1) {
            return {
              ...state,
              watchedMovies: state.watchedMovies.filter( (_item, index) => index !== watchedFilmIndex).reverse()
            }
          }
          else {
            return {
              ...state,
              watchedMovies: [...state.watchedMovies, action.value]
            }
          }
        }
      default:
        return state;
    }
  };
  
  export default watched;
  