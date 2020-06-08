import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SignInAndSingOutPage from './pages/sign-in-sign-out/SignInAndSignOut';
import './App.css';

function App(props) {
	return (
		<div>
			<Header />
			{/* match everything woth / or /* */}
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInAndSingOutPage} />
			</Switch>
		</div>
	);
}

export default App;
