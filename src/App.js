import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndUpPage from './pages/SignInAndUpPage';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}

export default App;
