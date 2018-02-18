import React, { Component } from 'react';
import './home.css';
import Podcasts from 'components/Podcasts/Podcasts';

class Home extends Component {

  render() {
    return (
      <div className="site">
        <Podcasts />
      </div>
    );
  }
}

export default Home;