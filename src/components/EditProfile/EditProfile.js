import React, { Component } from 'react';
import './EditProfile.css'

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'jedwards-fix',
            name: 'James Edwards',
            email: 'email-from-db',
            password: 'password-from-db',
            newPassword1: 'Update your password',
            newPassword2: 'Update your password'
        };
    }

    componentDidMount() {
      this.retrieveUserWithUsername('jedwards');
    }

    retrieveUserWithUsername = (username) => {
        return -1;
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeOldPassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleChangeNewPassword1 = (event) => {
        this.setState({
            newPassword1: event.target.value
        });
    }

    handleChangeNewPassword2 = (event) => {
        this.setState({
            newPassword2: event.target.value
        });
    }

    handleChangePassword = (event) => {
        // if both password fields match and old password is correct
        if (this.state.newPassword1 === this.state.newPassword2) {
            this.setState({
                password: event.target.value
            });
        }
    }

    updateUserInfo = () => {
        // update info in db
        return 0;
    }

    render() {
        return (
            <span>
                <h5>Edit Profile Information</h5>
                <button className="btn btn-primary update-podcast-btn" onClick={this.updateUserInfo}>Update</button>
                <form className="edit-profile">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username"
                            value={this.state.username} readonly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="editName">Name</label>
                        <input type="text" className="form-control" id="editName" placeholder="Update your name"
                            value={this.state.name} onChange={this.handleNameTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="oldPassword">Current Password</label>
                        <input type="text" className="form-control" id="oldPassword" placeholder="Enter current password"
                            value={this.state.password} onChange={this.handleChangeOldPassword} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword1">New Password</label>
                        <input type="text" className="form-control" id="newPassword1" placeholder="Enter new password"
                            value={this.state.newPassword1} onChange={this.handleChangeNewPassword1} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword2">New Password</label>
                        <input type="text" className="form-control" id="newPassword2" placeholder="Enter new password again"
                            value={this.state.newPassword2} onChange={this.handleChangeNewPassword2} />
                    </div>
                </form>
            </span>
        );
    }
}

export default EditProfile;
