import { createStore, applyMiddleware } from 'redux';
// logger is helpful while debugging code with redux devtools
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// applyMiddlewares takes multiple middlewares separated by ,

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
