import {
    Component,
    RegistrationForm,
    Footer
} from '../components';
import { Header } from './';
import  { bindAll } from '../utils';
import PizzaApi from '../api/pizza_api';
import './registration_page.scss';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'handleSubmit', 'getStoreList');
        this.el = document.createElement('div');
        this.el.classList.add('wrapper');
        this.el.addEventListener('submit', this.handleSubmit);


        this.state = {
            storeList: [],
            login: '',
            password: ''
        };

        this.getStoreList();


        // // init components
        this.header = new Header();
        this.registrationForm = new RegistrationForm();
        this.footer = new Footer();
    }

    handleSubmit(e) {
        e.preventDefault();
        var registrationObj = {
            login: e.target.login.value,
            password: e.target.password.value,
            confirm_password: e.target.confirm_password.value,
            email: e.target.email.value,
            store_id: Number(e.target.store.value),
            store_password: e.target.store_password.value
        };

        PizzaApi.User.createUser(registrationObj);
        this.updateState({ login: registrationObj.login, password: registrationObj.password });
        console.log(this.state);

    }

    getStoreList() {
        PizzaApi.Store.getStoreList().then(res => {
            this.state.storeList = res;
            this.update();
        });
    }

    render() {

        let content = document.createElement('div');
        content.classList.add('content');
        content.appendChild(this.header.update());

        let main = document.createElement('main');
        main.classList.add('main_loginPage');
        main.appendChild(this.registrationForm.update(this.state));

        content.appendChild(main);
        content.appendChild(this.footer.update());


        return [
            content
        ];

    }
}

export default RegistrationPage;
