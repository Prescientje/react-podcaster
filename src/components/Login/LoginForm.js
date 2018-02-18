import React, { Component } from 'react';
import { loginUser } from 'api/auth.service';
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

    handleSubmit(event) {
        loginUser({username: this.state.username, password: this.state.password}).then((result) => {
            console.log('Result', result);
        }).catch((error) => {
            console.error('An error occured', error)
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
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="form-label">Username</label>
                                <input type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;