import { Store_Api } from './pizza/store';
import { User_Api } from './pizza/user';
import { Pizza_Api } from './pizza/pizza';


class PizzaApi {
    constructor() {
        this.Store = Store_Api;
        this.User = User_Api;
        this.Pizza = Pizza_Api;
    }
}

export default PizzaApi = new PizzaApi();
