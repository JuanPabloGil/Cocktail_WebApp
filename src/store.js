import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';

function store() {
  createStore(
    allReducers,
    applyMiddleware(logger, thunk),
    // eslint-disable-next-line no-underscore-dangle
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
export default store;
