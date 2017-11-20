import * as types from '../constants';
import { getAverageLoans } from '../utils';
const axios = require('axios');

// eslint-disable-next-line
const url = 'https://crossorigin.me/https://api.zonky.cz/loans/marketplace';

export const getData = () => {
    return (dispatch) => {
        dispatch(getDataStart());
        axios.get('./data.json').then((res) => {
            const data = getAverageLoans(res.data);
            dispatch( getDataSuccess({payload: res.data, average: data.average, ratings: data.ratings}) );
        });
    }
};

export const getDataStart = () => ({ type: types.LOAD_START });
export const getDataSuccess = (data) => ({ type: types.LOAD_SUCCESS, payload: data.payload, average: data.average, ratings: data.ratings });

export const filterData = (filter) => {
    return (dispatch) => {
        dispatch(getDataStart());
        // API request
        // axios.get(`${url}/?rating__in=${filter}`).then((res) => {
        //     const data = getAverageLoans(filteredRes);
        //     dispatch( getDataSuccess( {payload: res.json(), average: data.average}) );
        // });

        // Alternative API request with filter
        axios.get('./data.json').then((res) => {
            const filteredRes = filter.length > 0 ? res.data.filter(item => filter.indexOf(item.rating) >= 0) : res.data;
            const data = getAverageLoans(filteredRes);
            dispatch( getDataSuccess({payload: filteredRes, average: data.average}) );
        });
    }
}
