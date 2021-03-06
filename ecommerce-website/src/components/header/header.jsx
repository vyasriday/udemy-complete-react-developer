import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';
import { createStructuredSelector } from 'reselect';
import './header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo />
		</Link>
		<div className='options'>
			<Link to='/shop' className='option'>
				SHOP
			</Link>
			<Link to='' className='option'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					Sign In
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

// state is the root reducer state that's passed down to this functions. The name of the function can be anything
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
