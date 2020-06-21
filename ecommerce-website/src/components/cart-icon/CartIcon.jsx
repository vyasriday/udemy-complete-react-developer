import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/cart.svg';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CartIcon = ({ itemCount, toggleCardHidden }) => (
	<div className='cart-icon' onClick={toggleCardHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'> {itemCount}</span>
	</div>
);
const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

const mapStateToDispatch = (dispatch) => ({
	toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(mapStateToProps, mapStateToDispatch)(CartIcon);
