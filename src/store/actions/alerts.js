import { ADD_ALERT, REMOVE_ALERT } from '../constants/index';
let i = 0;

export function addAlert(options = {}) {
  return {
    payload: {
        ...options,
        id: i++
    },
    type: ADD_ALERT
  };
}

export function removeAlert(id) {
  return {
    payload: id,
    type: REMOVE_ALERT
  };
}
