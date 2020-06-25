import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// logger is helpful while debugging code with redux devtools
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// applyMiddlewares takes multiple middlewares separated by ,

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
