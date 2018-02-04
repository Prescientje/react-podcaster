import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../styles/App.css';

import Home from '../components/Home';
import LoginForm from '../components/LoginForm';
import '../styles/App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/login" component={LoginForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
