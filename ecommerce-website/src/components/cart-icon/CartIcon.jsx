import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/cart.svg';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cart-actions';

const CartIcon = ({ total, toggleCardHidden }) => (
	<div className='cart-icon' onClick={toggleCardHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'> 0</span>
	</div>
);

const mapStateToProps = (state) => ({
	total: state.cart.total,
});

const mapStateToDispatch = (dispatch) => ({
	toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(mapStateToProps, mapStateToDispatch)(CartIcon);
