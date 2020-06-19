import { CartActionTypes } from './cart-types';

const { ADD_TO_CART, TOGGLE_CARD_HIDDEN } = CartActionTypes;

const INITIAL_STATE = {
	hidden: true,
	total: 0,
};
const cartReducer = (state = INITIAL_STATE, action) => {
	const { type } = action;
	switch (type) {
		case TOGGLE_CARD_HIDDEN: {
			return {
				...state,
				hidden: !state.hidden,
			};
		}
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
