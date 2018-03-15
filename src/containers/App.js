import React, { Component } from 'react';
import { Router, Route, Redirect, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../styles/App.css';

import AuthService from '../api/auth.service';

import Home from './Home/Home';
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Register/RegisterForm';
import Profile from './Profile/Profile';
import PlayPodcast from './PlayPodcast/PlayPodcast';
import Logout from '../components/Logout/Logout';
import Upload from '../components/Upload/UploadForm';
import EditPodcast from '../components/EditPodcast/EditPodcast';

const history = createBrowserHistory();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: AuthService.isAuthenticated()
    }
    history.listen(() => {
      this.handleRoutingUpdate();
    })
  }

  handleRoutingUpdate() {
    this.setState({
      authenticated: AuthService.isAuthenticated()
    });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <nav className="navbar justify-content-end site-nav navbar-dark">
            {
              this.state.authenticated ? (
                <span>
                  <Link to="profile" className="nav-link site-link">Profile</Link>
                  <a href="#" className="nav-link site-link" data-toggle="modal" data-target="#uploadModal">Upload</a>
                  <a href="#" className="nav-link site-link" data-toggle="modal" data-target="#logoutModal">Logout</a>
                </span>
              ) : (
                <span>
                  <a href="#" className="nav-link site-link" data-toggle="modal" data-target="#loginModal">Sign In</a>
                  <a href="#" className="nav-link site-link" data-toggle="modal" data-target="#registerModal">Sign Up</a>
                </span>
              )
            }
          </nav>
          <div className="site-header">
            <h1 className="site-title">The Podcast Shelf</h1>
            <h4 className="site-intro">Listen to all your favorite podcasts here</h4>
          </div>
          
          <Route exact path="/" component={Home}/>
          <Route path="/podcast/:id" component={PlayPodcastWrapper}/>
          <AuthenticatedRoute path="/profile" component={Profile}/>
          <AuthenticatedRoute path="/edit/:id" component={EditPodcast} history={history}/>

          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
            <LoginForm history={history} />
          </div>
          <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModal" aria-hidden="true">
            <RegisterForm history={history} />
          </div>
          <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="logoutModal" aria-hidden="true">
            <Logout history={history} />
          </div>
          <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog" aria-labelledby="uploadModal" aria-hidden="true">
            <Upload history={history} />
          </div>
        </div>
      </Router>
    );
  }
}

const PlayPodcastWrapper = ({match}) => (
  <PlayPodcast id={match.params.id} />
)

const AuthenticatedRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    AuthService.isAuthenticated() ? (
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
