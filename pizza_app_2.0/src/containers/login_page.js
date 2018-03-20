import {
    Component,
    LoginForm,
    Footer
} from '../components';
import {Header} from './';
import './reset.scss';
import './login_page.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.el = props.el || document.createElement('div');
        this.el.classList.add('wrapper');


        // // init components
        this.header = new Header();
        this.loginForm = new LoginForm();
        this.footer = new Footer();

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
