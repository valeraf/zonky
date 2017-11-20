import { FILTER_DATA } from '../constants';

const filters = (state = [], action) => {
    switch (action.type) {
        case FILTER_DATA:
            return action.filters;
        default:
            return state;
    }
}

export default filters