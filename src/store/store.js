import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer(history)),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
);

export default store;
