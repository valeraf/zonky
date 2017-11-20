import { LOAD_SUCCESS, LOAD_START } from '../constants';

const initialState = {
    loading: false,
    payload: [],
    average: 0,
    ratings: []
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_START:
            return {...state, loading: true};
        case LOAD_SUCCESS:
            return {...state, loading: false, payload: action.payload, average: action.average, ratings: action.ratings || state.ratings};
        default:
            return state;
    }
}

export default data