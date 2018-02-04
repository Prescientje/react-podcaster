import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../styles/App.css';

import Home from '../components/Home';
import LoginForm from '../components/LoginForm';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <hr />

        <Route exact path="/" Component={Home}/>
        <Route path="/login" Component={LoginForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
