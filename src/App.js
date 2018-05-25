import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div> Layout </div>
        )} />
      </Router>
    );
  }
}

export default App;
