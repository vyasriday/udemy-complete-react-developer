import { CartActionTypes } from './cart-types';

const { ADD_TO_CART } = CartActionTypes;
export const addToCart = (item) => ({
	type: ADD_TO_CART,
	payload: item,
});
