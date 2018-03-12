import React, { Component } from 'react';
import './profile.css';
import Upload from 'components/Upload/Upload';

class Profile extends Component {

  render() {
    return (
      <div className="profile">
        Profile Page
        <br />
        User name = 
        <Upload />
      </div>
    );
  }
}

export default Profile;