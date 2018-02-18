import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'styles/App.css';

import Home from 'components/Home';
import LoginForm from 'components/Login/LoginForm';
import RegisterForm from 'components/Register/RegisterForm';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><a href="#" data-toggle="modal" data-target="#loginModal">Sign In</a></li>
            <li className="nav-item"><a href="#" data-toggle="modal" data-target="#registerModal">Sign Up</a></li>
          </ul>

          <Route exact path="/" component={Home}/>

          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <LoginForm />
          </div>
          <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
            <RegisterForm />
          </div>
        </div>
        
      </Router>
    );
  }
}

export default App;
