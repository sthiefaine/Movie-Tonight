import { combineReducers } from 'redux';

import counter from './counter';
import movie from './movie';
import favorite from './favorite';

export default combineReducers({
  counter,
  movie,
  favorite,
});
