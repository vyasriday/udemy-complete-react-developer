import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems: cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
