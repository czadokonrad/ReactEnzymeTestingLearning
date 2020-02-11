import { FETCH_BITCOIN } from './constants';
const API_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const fetchBitcoin = () => {
    return dispatch => {
        return fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }));
    }
}