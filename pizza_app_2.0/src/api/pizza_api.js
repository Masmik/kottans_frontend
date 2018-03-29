import { Store_Api } from './pizza/store';
import { User_Api } from './pizza/user';


class PizzaApi {
    constructor() {
        this.Store = Store_Api;
        this.User = User_Api;
    }
}

export default PizzaApi = new PizzaApi();
