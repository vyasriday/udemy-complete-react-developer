import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { createUserProfileDocument, auth } from '../../firebase/firebase.util';
import './SignUp.scss';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (e) {
			console.log('Error occured', e);
		}
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h1 className='title'>I do not have an account</h1>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleFormSubmit}>
					<FormInput
						type='text'
						required
						name='displayName'
						label='Display Name'
						value={displayName}
						handleChange={this.handleChange}
					/>
					<FormInput
						type='email'
						required
						name='email'
						label='Email'
						value={email}
						handleChange={this.handleChange}
					/>
					<FormInput
						type='password'
						required
						name='password'
						label='Password'
						value={password}
						handleChange={this.handleChange}
					/>
					<FormInput
						type='password'
						required
						name='confirmPassword'
						label='Confirm Password'
						value={confirmPassword}
						handleChange={this.handleChange}
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
