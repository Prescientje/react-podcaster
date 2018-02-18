import React, { Component } from 'react';
import '../styles/App.css';
import Podcast from 'components/Podcast/Podcast';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Podcast Shelf</h1>
        </header>
        <p className="App-intro">Listen to all your favorite podcasts here</p>
        <div>
          <Podcast title="TestTitle"/>
        </div>
      </div>
    );
  }
}

export default Home;