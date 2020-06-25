import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import { persistReducer } from 'redux-persist';
// this is localStorage
import storage from 'redux-persist/lib/storage';

// storage is what storage we want. using ES object literals here for storage, whitelist is what reducers we want to persist
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	// whatever returned from userReducer will be set to user object in out store
	user: userReducer,
	cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
