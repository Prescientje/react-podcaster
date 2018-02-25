import React, { Component } from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'styles/App.css';

import Home from 'containers/Home/Home';
import LoginForm from 'components/Login/LoginForm';
import RegisterForm from 'components/Register/RegisterForm';
import Profile from 'containers/Profile/Profile';
import { isAuthenticated } from 'api/auth.service';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
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
          <AuthenticatedRoute path="/profile" component={Profile}/>

          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <LoginForm history={history} />
          </div>
          <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
            <RegisterForm history={history} />
          </div>
        </div>
      </Router>
    );
  }
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default App;
