// == Import : npm
import { createStore, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/reducers';
import middlewares from 'src/middlewares';

// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  )
);

export default store;
