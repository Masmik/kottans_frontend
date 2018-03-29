import { BASE_API_URL } from './const';


class StoreApi {
    constructor() {
    }

    getStoreList() {
        const STORE_URL = '/store/list';
        return fetch(BASE_API_URL + STORE_URL, {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json' })
        }).then(res => res.json());
    }
}

export const Store_Api = new StoreApi();
