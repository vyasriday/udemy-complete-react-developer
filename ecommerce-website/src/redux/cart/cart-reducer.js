import { CartActionTypes } from './cart-types';
import { addItemToCart, removeItemFromCart } from './cart-util';
import { clearItemFromCart } from './cart-actions';
const {
	ADD_ITEM,
	TOGGLE_CARD_HIDDEN,
	CLEAR_ITEM_FROM_CART,
	REMOVE_ITEM,
} = CartActionTypes;

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
	itemCount: 0,
};

// state is the part of redux state that this reducer holds
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

		case CLEAR_ITEM_FROM_CART: {
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.id !== payload.id),
			};
		}

		case REMOVE_ITEM: {
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, payload),
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
