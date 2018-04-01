import React, { Component } from 'react';
import './profile.css';
import EditProfile from '../../components/EditProfile/EditProfile';

class Profile extends Component {

  render() {
    return (
      <div className="profile">
        Profile Page
        <hr />
        <EditProfile />
      </div>
    );
  }
}

export default Profile;