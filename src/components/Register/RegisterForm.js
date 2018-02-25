import React, { Component } from 'react';
import { registerUser, setTokens } from 'api/auth.service';
import { Redirect } from 'react-router';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            email: '',
            toProfile: false
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

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit = (event) => {

        registerUser({
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email}).then((result) => {
            setTokens(result.data);
            setTimeout(()=>{
                this.props.history.push('/profile')
            }, 100);
        }).catch((error) => {
            alert('An error occured', error);
        })
    }

    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Welcome!</h5>
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
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input value={this.state.name} onChange={this.handleChangeName}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input value={this.state.email} onChange={this.handleChangeEmail}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;