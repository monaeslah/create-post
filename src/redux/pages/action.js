import {POST,DELETE} from 'redux/pages/type';
export function listPost(data) {
    return ({
        type: POST,
        data
    })
}
export function deleteListPost(data) {
    return ({
        type: DELETE,
        data
    })
}
