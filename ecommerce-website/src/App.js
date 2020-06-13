import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SignInAndSingOutPage from './pages/sign-in-sign-out/SignInAndSignOut';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);
				(await userRef).onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			}
			this.setState({
				currentUser: userAuth,
			});
		});
	}

	componentWillUnmount() {
		// FOR UNSUBSCRIBING FROM AUTH TO PREVENT MEMORY LEAKS
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				{/* match everything woth / or /* */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSingOutPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
