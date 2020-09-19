import {POST,DELETE} from 'redux/pages/type';

export function infoListPost(state = [], action) {
    switch (action.type) {
        case POST:
            return [...state,action.data];
        case DELETE:
            return {...state,driver: action.i};
        default:
            return state;
    }
}
