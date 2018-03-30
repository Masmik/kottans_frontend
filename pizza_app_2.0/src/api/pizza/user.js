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
                return res.json().then(answer => Promise.resolve({ answer, status: res.status }));
            } else {
                return res.json().then(answer => Promise.reject({ answer, status: res.status }));
            }
        });
    }

    loginUser(userData) {
        const LOGIN_URL = '/user/login';

        return fetch(BASE_API_URL + LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify({
                "username": userData.login,
                "password": userData.password
            }),
            headers: new Headers({ 'content-type': 'application/json' }),
        }).then(res => {
            if (res.ok) {
                return res.json().then(answer => Promise.resolve({ answer, status: res.status }));
            } else {
                return res.json().then(answer => Promise.reject({ answer, status: res.status }));
            }
        });
    }

    getUserInfo(token) {
        const USER_INFO_URL = '/user/my_info';

        return fetch(BASE_API_URL + USER_INFO_URL, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }),
        }).then(res => {
            if (res.ok) {
                return res.json().then(answer => Promise.resolve({ answer, status: res.status }));
            } else {
                return res.json().then(answer => Promise.reject({ answer, status: res.status }));
            }
        });
    }

}

export const User_Api = new UserApi();
