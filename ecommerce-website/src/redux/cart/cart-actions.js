import { CartActionTypes } from './cart-types';

const {
	ADD_ITEM,
	TOGGLE_CARD_HIDDEN,
	CLEAR_ITEM_FROM_CART,
	REMOVE_ITEM,
} = CartActionTypes;

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});

export const toggleCardHidden = () => ({
	type: TOGGLE_CARD_HIDDEN,
});

export const clearItemFromCart = (item) => ({
	type: CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item,
});
