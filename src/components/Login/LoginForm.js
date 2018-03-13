import React, { Component } from 'react';
import './login.css';
import AuthService from '../../api/auth.service';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    login = (event) => {
        AuthService.loginUser({username: this.state.username, password: this.state.password}).then((result) => {
            AuthService.setTokens(result.data);
            this.props.history.push('/profile');
        }).catch((error) => {
            alert('An error occured', error);
        })
    }

    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Welcome Back!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={this.login}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="loginUsername">Username</label>
                                <input type="text" className="form-control" id="loginUsername" placeholder="Enter username"
                                    value={this.state.username} onChange={this.handleChangeUsername} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginPassword">Password</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Enter password"
                                    value={this.state.password} onChange={this.handleChangePassword} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-primary" onClick={this.login} data-dismiss="modal">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;