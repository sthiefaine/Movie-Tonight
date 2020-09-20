import {
    TOGGLE_WANTTOWATCH
    } from '../actions/wantToWatch';
    
    export const initialState = {
        wantToWatchMovies: [],
    };
    
    const wantToWatch = (state = initialState, action = {}) => {
      switch (action.type) {
          case TOGGLE_WANTTOWATCH: {
            console.log('REDUCER TOGGLE_wantToWatch');
            const wantToWatchFilmIndex = state.wantToWatchMovies.findIndex(item => item.id === action.value.id)
            if (wantToWatchFilmIndex !== -1) {
              return {
                ...state,
                wantToWatchMovies: state.wantToWatchMovies.filter( (_item, index) => index !== wantToWatchFilmIndex).reverse()
              }
            }
            else {
              return {
                ...state,
                wantToWatchMovies: [...state.wantToWatchMovies, action.value]
              }
            }
          }
        default:
          return state;
      }
    };
    
    export default wantToWatch;
    