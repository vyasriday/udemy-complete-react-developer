import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App(props) {
  return (
    <div>
      {/* match everything woth / or /* */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
