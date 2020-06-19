import { CartActionTypes } from './cart-types';

const { ADD_TO_CART, TOGGLE_CARD_HIDDEN } = CartActionTypes;

export const addToCart = (item) => ({
	type: ADD_TO_CART,
	payload: item,
});

export const toggleCardHidden = () => ({
	type: TOGGLE_CARD_HIDDEN,
});
