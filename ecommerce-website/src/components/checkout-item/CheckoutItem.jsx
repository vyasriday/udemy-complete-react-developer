import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem: { imageUrl, price, quantity, name } }) => (
	<div className='checkout-item'>
		<div className='image-container'>
			<img alt='item' src={imageUrl} />
		</div>
		<span className='name'>{name}</span>
		<span className='quantity'>{quantity}</span>
		<span className='price'>{price}</span>
		<div className='remove-button'>&#10006;</div>
	</div>
);

export default CheckoutItem;
