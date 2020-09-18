import { combineReducers } from 'redux';

import category from './category';
import movie from './movie';
import favorite from './favorite';

export default combineReducers({
  movie,
  favorite,
  category,
});
