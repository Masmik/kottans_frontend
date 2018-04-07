import {
    Component,
    LoginForm,
    Footer
} from '../components';
import { Header } from './';
import PizzaApi from '../api/pizza_api';
import { bindAll, Auth, navigateTo } from '../utils';
import './login_page.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'handleAuthentication');

        this.state = {
            username: '',
            password: '',
            loginValidationErrors: ''
        };

        this.el = document.createElement('div');
        this.el.classList.add('wrapper');
        this.el.addEventListener('submit', this.handleAuthentication);


        // // init components
        this.header = new Header();
        this.loginForm = new LoginForm();
        this.footer = new Footer();
    }

    handleAuthentication(e) {
        e.preventDefault();
        let loginObj = {
            login: e.target.login.value,
            password: e.target.password.value
        };

        PizzaApi.User.loginUser(loginObj).then(resp => {
            Auth.token = resp.answer.token;
            navigateTo('/');
        }).catch(err => {
            this.state.loginValidationErrors = err.answer.error;
            this.update();
        });
    }


    render() {

        let content = document.createElement('div');
        content.classList.add('content');
        content.appendChild(this.header.update());

        let main = document.createElement('main');
        main.classList.add('main_loginPage');
        main.appendChild(this.loginForm.update(this.state));

        content.appendChild(main);
        content.appendChild(this.footer.update());


        return [
            content
        ];

    }
}

export default LoginPage;
