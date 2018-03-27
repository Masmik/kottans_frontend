import { Component } from './';
import './login.scss';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('a');
        this.el.setAttribute('href', '#/login');
        this.el.classList.add('logInBlock');
        this.el.setAttribute('type', 'button');
    }

    render() {
        return `<i class="fa fa-sign-in" aria-hidden="true"></i>
                Sign in / Sign up`;
    }

}

export default LogIn;
