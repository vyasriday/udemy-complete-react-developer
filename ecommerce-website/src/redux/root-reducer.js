import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';

export default combineReducers({
	// whatever returned from userReducer will be set to user object in out store
	user: userReducer,
});
