import {
  TOGGLE_FAVORITE
  } from '../actions/favorite';
  
  export const initialState = {
    favoriteMovies: [],
  };
  
  const favorite = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
          console.log('REDUCER TOGGLE_FAVORITE');
          const favoriteFilmIndex = state.favoriteMovies.findIndex(item => item.id === action.value.id)
          if (favoriteFilmIndex !== -1) {
            return {
              ...state,
              favoriteMovies: state.favoriteMovies.filter( (_item, index) => index !== favoriteFilmIndex)
            }
          }
          else {
            return {
              ...state,
              favoriteMovies: [...state.favoriteMovies, action.value]
            }
          }
        }
      default:
        return state;
    }
  };
  
  export default favorite;
  