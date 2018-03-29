import {
    Component,
    LoginForm,
    Footer
} from '../components';
import { Header } from './';
import { AUTH_SERVICE } from '../utils';
import { bindAll } from '../utils';
import './login_page.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.el = document.createElement('div');
        this.el.classList.add('wrapper');
        this.el.addEventListener('submit', this.handleAuthentication);
        bindAll(this, 'handleAuthentication');

        // // init components
        this.header = new Header();
        this.loginForm = new LoginForm();
        this.footer = new Footer();
    }

    handleAuthentication(e) {
        e.preventDefault();

        // const userName = e.target.username.value;
        // const password = e.target.password.value;
        //
        // AUTH_SERVICE.login(userName, password);


    }


    render() {

        let content = document.createElement('div');
        content.classList.add('content');
        content.appendChild(this.header.update());

        let main = document.createElement('main');
        main.classList.add('main_loginPage');
        main.appendChild(this.loginForm.update());

        content.appendChild(main);
        content.appendChild(this.footer.update());


        return [
            content
        ];

    }
}

export default LoginPage;
