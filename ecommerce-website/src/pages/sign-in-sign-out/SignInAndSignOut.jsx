import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import './SignInAndSignOut.scss';
import SignUp from '../../components/sign-up/SignUp';

const SignInAndSingOutPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSingOutPage;
