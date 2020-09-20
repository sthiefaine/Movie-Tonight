import { combineReducers } from 'redux';

import category from './category';
import movie from './movie';
import favorite from './favorite';
import watched from './watched';
import wantToWatch from './wantToWatch';

export default combineReducers({
  movie,
  favorite,
  watched,
  wantToWatch,
  category,
});
