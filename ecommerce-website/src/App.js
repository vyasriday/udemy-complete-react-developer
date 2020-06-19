import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SignInAndSingOutPage from './pages/sign-in-sign-out/SignInAndSignOut';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user-actions';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	currentUser: null,
		// };
	}

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
				{this.props.currentUser ? (
					<Redirect to='/' />
				) : (
					<Redirect to='/signin' />
				)}
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
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
