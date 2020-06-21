import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';
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

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
