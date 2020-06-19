import { CartActionTypes } from './cart-types';

const { ADD_ITEM, TOGGLE_CARD_HIDDEN } = CartActionTypes;

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});

export const toggleCardHidden = () => ({
	type: TOGGLE_CARD_HIDDEN,
});
