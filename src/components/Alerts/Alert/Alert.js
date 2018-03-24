import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Alert extends Component {
    render() {
        return (
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                {this.props.text}
                <button type="button" onClick={this.props.onDismissClick}>
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
    onDismissClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Alert;
