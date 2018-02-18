import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import 'styles/App.css';

import Home from 'components/Home';
import LoginForm from 'components/Login/LoginForm';
import RegisterForm from 'components/Register/RegisterForm';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar justify-content-end site-nav navbar-dark">
            <a href="#" className="nav-link site-link" data-toggle="modal" data-target="#loginModal">Sign In</a>
            <a href="#" className="nav-link site-link" data-toggle="modal" data-target="#registerModal">Sign Up</a>
          </nav>
          <div className="site-header">
            <h1 className="site-title">The Podcast Shelf</h1>
            <h4 className="site-intro">Listen to all your favorite podcasts here</h4>
          </div>
          
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
