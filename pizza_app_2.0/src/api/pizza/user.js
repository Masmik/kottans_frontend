import { BASE_API_URL } from './const';


class UserApi {
    constructor() {
    }

    createUser(regObj) {
        const CREATE_URL = '/user/create';

        return fetch(BASE_API_URL + CREATE_URL, {
            method: 'POST',
            body: JSON.stringify({
                "username": regObj.login,
                "password": regObj.password,
                "password_repeat": regObj.confirm_password,
                "email": regObj.email,
                "store_id": regObj.store_id,
                "store_password": regObj.store_password
            }),
            headers: new Headers({ 'content-type': 'application/json' }),
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(data => Promise.reject({ data, status: res.status }));
            }
        }).catch(resp => console.error(resp));
    }
}

export const User_Api = new UserApi();
