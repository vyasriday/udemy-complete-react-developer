import { CartActionTypes } from './cart-types';

const { ADD_TO_CART } = CartActionTypes;

const INITIAL_STATE = {
	total: 0,
};
const cartReducer = (state = INITIAL_STATE, action) => {
	const { type } = action;
	switch (type) {
		case ADD_TO_CART: {
			return {
				...state,
				total: state.total + 1,
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
