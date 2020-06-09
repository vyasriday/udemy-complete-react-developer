import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.util';

import './SignIn.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	// This is super cool
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({
			email: '',
			password: '',
		});
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.submitHandler}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='Password'
						required
					/>

					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
