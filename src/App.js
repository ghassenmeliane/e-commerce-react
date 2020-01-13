import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage'

import './App.css';
const HatsPage = () => (
  <div>
    HatsPage
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
