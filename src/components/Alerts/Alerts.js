import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Alert from './Alert/Alert';
import './Alerts.css';

const Alerts = ({ alerts }) => {
    return (
        <div className="alerts">
            {
                alerts.map(alert => {
                    const { id } = alert;
                    return (
                        <Alert {...alert} key={id}/>
                    );
                })
            }
        </div>
    );
};

Alerts.propTypes = {
    alerts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
    alerts: state.alerts
});

export default connect(mapStateToProps, null)(Alerts);
