import React, { Component } from 'react';
import AuthService from '../../api/auth.service';

class Logout extends Component {

    handleLogout = () => {
        AuthService.logoutUser();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleLogout} data-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Logout;