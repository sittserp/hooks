import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../characters/AllCharacters';
import Details from '../details/AllDetail';

export default class App extends React.Component { 
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component = { Home }
            />
            <Route
              exact
              path="/details/:id" 
              component = { Details }
            />
          </Switch>
        </Router>
      </>
    );
  }
}
