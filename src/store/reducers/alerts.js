import { ADD_ALERT } from '../constants/index';

export default function alerts(state = [], action) {
    const { payload, type } = action;

    switch (type) {
        case ADD_ALERT:
            return [payload, ...state];

        default:
            return state;
    }
}
