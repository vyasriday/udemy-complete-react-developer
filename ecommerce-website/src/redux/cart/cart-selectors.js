import { createSelector } from 'reselect';

// input selector returns a slice of state
const selectCart = (state) => state.cart;

// output selector : takes input selector and used cretaeSelector
// first argument is the array of input selectors
// selecCartItems is a memoized selector now
export const selectCartItems = createSelector(
	selectCart,
	// argument to functions are in order of input selectors
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	selectCartItems,
	((cartItems) =>
		cartItems.reduce(
			(accumulated, cartItem) => accumulated + cartItem.quantity
		),
	0)
);
