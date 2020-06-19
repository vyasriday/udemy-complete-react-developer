import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	</div>
);

export default CartDropdown;
