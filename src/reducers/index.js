import { combineReducers } from 'redux';

import counter from './counter';
import movie from './movie';

export default combineReducers({
  counter,
  movie,
});
