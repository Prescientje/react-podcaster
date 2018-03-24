import { ADD_ALERT, REMOVE_ALERT } from '../constants/index';

export default function alerts(state = [], action) {
    const { payload, type } = action;

    switch (type) {
        case ADD_ALERT:
            return [payload, ...state];

        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);

        default:
            return state;
    }
}
