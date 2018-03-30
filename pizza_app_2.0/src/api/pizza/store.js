import { BASE_API_URL } from './const';


class StoreApi {
    constructor() {
    }

    getStoreList() {
        const STORE_URL = '/store/list';
        return fetch(BASE_API_URL + STORE_URL, {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json' })
        }).then(res => {
            if (res.ok) {
                return res.json().then(answer => Promise.resolve({ answer, status: res.status }));
            } else {
                return res.json().then(answer => Promise.reject({ answer, status: res.status }));
            }
        });
    }
}

export const Store_Api = new StoreApi();
