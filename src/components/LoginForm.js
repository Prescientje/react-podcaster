import React, { Component } from 'react';
import { postLogin, postRegister } from '../api/auth.service';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        alert("submitted: " + this.state.username + "//" + this.state.password);
        postLogin({username: this.state.username, password: this.state.password});

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
              </label><br/>
              <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
              </label><br/>
              <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default LoginForm;