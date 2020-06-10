import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';
import './header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

const Header = ({ currentUser }) => (
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
		</div>
	</div>
);

export default Header;
