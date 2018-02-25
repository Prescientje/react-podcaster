import React, { Component } from 'react';
import { loginUser, setTokens } from 'api/auth.service';
import './login.css';

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

    handleSubmit = (event) => {
        loginUser({username: this.state.username, password: this.state.password}).then((result) => {
            setTokens(result.data);
            this.props.history.push('/profile')
        }).catch((error) => {
            console.log('Error', error);
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
                    <form>
                        <div className="modal-body">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="username" placeholder="Enter username"
                                    value={this.state.username} onChange={this.handleChangeUsername} required />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter password"
                                    value={this.state.password} onChange={this.handleChangePassword} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit} data-dismiss="modal">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;