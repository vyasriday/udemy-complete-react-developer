import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
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
		</div>
	</div>
);

export default Header;
