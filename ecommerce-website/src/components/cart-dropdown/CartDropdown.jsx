import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCardHidden } from '../../redux/cart/cart-actions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className='empty-message'>Your Cart Is Empty</span>
			)}
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCardHidden());
				}}
			>
				Go To Checkout
			</CustomButton>
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
