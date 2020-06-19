import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/cart.svg';
import { connect } from 'react-redux';

const CartIcon = ({ total }) => (
	<div className='cart-icon'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'> 0</span>
	</div>
);

const mapStateToProps = (state) => ({
	total: state.cart.total,
});

export default connect(mapStateToProps)(CartIcon);
