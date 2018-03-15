import React, { Component } from 'react';
import './home.css';
import Podcasts from '../../components/Podcasts/Podcasts';
import AuthService from '../../api/auth.service';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: AuthService.isAuthenticated()
    };
  }

  componentDidMount() {
    this.props.history.listen(() => {
      this.setState({
        isAuthenticated: AuthService.isAuthenticated()
      });
    });
  }

  render() {
    return (
      <div className="site">
        <Podcasts isAuthenticated={this.state.isAuthenticated}/>
      </div>
    );
  }
}

export default Home;