import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from './Alert/Alert';
import { removeAlert } from '../../store/actions/alerts';

const Alerts = ({ actions, alerts }) => {
  const { removeAlert } = actions;
  return (
    <ul>
      {alerts ? alerts.map(alert => {
        const { id } = alert;
        return (
          <Alert {...alert} key={id} onDismissClick={() => removeAlert(id)} />
        );
      }) : <span></span>}
    </ul>
  );
};

Alerts.propTypes = {
  actions: PropTypes.shape({
    removeAlert: PropTypes.func.isRequired
  }).isRequired,
  alerts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeAlert }, dispatch)
});

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
