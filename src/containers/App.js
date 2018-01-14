import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

import Podcast from '../components/Podcast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react-podcaster</h1>
        </header>
        <p className="App-intro">a site to upload and listen to podcasts</p>
        <div>
          <Podcast title="TestTitle"/>
        </div>
      </div>
    );
  }
}

export default App;
