import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import SignInAndSingOutPage from './pages/sign-in-sign-out/SignInAndSignOut';
import CheckoutPage from './pages/checkout/Checkout';
import Header from './components/header/header';

import './App.css';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);
				(await userRef).onSnapshot((snapShot) => {
					// this.setState({
					// 	currentUser: {
					// 		id: snapShot.id,
					// 		...snapShot.data(),
					// 	},
					// });
					// dispatching an action using action creator
					this.props.setCurrentUser({
						id: snapShot.id,
						...snapShot.data,
					});
				});
			}
			// instead of setting state here we need to dispatch an action here
			// this.setState({
			// 	currentUser: userAuth,
			// });

			// dispatching an action using action creator
			this.props.setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		// FOR UNSUBSCRIBING FROM AUTH TO PREVENT MEMORY LEAKS
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				{/* match everything woth / or /* */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />

					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSingOutPage />
							)
						}
					/>
					<Route exact path='/checkout' component={CheckoutPage} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
