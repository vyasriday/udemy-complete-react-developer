import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';

function App(props) {
	return (
		<div>
			{/* match everything woth / or /* */}
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
