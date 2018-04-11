import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Alert.css'

class Alert extends Component {
    render() {
        return (
            <div className={'alert alert-dismissible fade show alert-' + this.props.color} role="alert">
                {this.props.text}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }

    shouldComponentUpdate() {
        return false;
    }
}

Alert.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Alert;
