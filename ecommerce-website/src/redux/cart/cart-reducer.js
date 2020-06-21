import { CartActionTypes } from './cart-types';
import { addItemToCart } from './cart-util';
const { ADD_ITEM, TOGGLE_CARD_HIDDEN } = CartActionTypes;

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
	itemCount: 0,
};
const cartReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case TOGGLE_CARD_HIDDEN: {
			return {
				...state,
				hidden: !state.hidden,
			};
		}
		case ADD_ITEM: {
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, payload),
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
