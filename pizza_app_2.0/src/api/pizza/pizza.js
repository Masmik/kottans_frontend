import { BASE_API_URL } from './const';

class PizzaApi {
    constructor() {
    }


    getPizzaIngredient(token) {
        const INGREDIENT_URL = '/ingredient/list';
        return fetch(BASE_API_URL + INGREDIENT_URL, {
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


    getPizzaTag(token) {
        const Tag_URL = '/tag/list';
        return fetch(BASE_API_URL + Tag_URL, {
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

export const Pizza_Api = new PizzaApi();
