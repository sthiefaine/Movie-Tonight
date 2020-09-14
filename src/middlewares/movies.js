import api from 'src/services/api';
import { 
    GET_MOVIES_SEARCH, 
    saveMoviesSearchList
} from '../actions/movie';

const movies = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_MOVIES_SEARCH: {
          console.log('Middleware GET_MOVIES_SEARCH');
        const state = store.getState();

        const { searchMovie } = state.movie;

        const paginationValue = action.paginationValue;

        api.get('&query=' + searchMovie + '&page=' + paginationValue)
          .then((response) => {
            console.log('Middleware GET_MOVIES_SEARCH response', response.data);
  

            store.dispatch(saveMoviesSearchList(response.data));


          })
          .catch((error) => {
            console.log('Une erreur est survenue', error);
          });
        break;
      }
      default:
        next(action);
        break;
    }
  };
  
export default movies;
