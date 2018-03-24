import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthService from '../../api/auth.service';
import { addAlert } from '../../store/actions/alerts';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            email: ''
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

    register = (event) => {
        const { addAlert } = this.props.actions;
        AuthService.registerUser({
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email}).then((result) => {
            AuthService.setTokens(result.data);
            this.props.history.push('/profile');
            addAlert({ text: 'Successfully registered', color: 'success' });
        }).catch((error) => addAlert({ text: 'Unable to register user', color: 'danger' }))
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
                    <form onSubmit={this.register}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="registerUsername">Username</label>
                                <input type="text" className="form-control" id="registerUsername" placeholder="Enter username"
                                    value={this.state.username} onChange={this.handleChangeUsername} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="registerPassword">Password</label>
                                <input type="password" className="form-control" id="registerPassword" placeholder="Enter password"
                                    value={this.state.password} onChange={this.handleChangePassword} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name"
                                    value={this.state.name} onChange={this.handleChangeName} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email"
                                    value={this.state.email} onChange={this.handleChangeEmail} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.register} data-dismiss="modal">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    actions: PropTypes.shape({
        addAlert: PropTypes.func.isRequired
    }).isRequired
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ addAlert }, dispatch)
});

export default connect(null, mapDispatchToProps)(RegisterForm);
