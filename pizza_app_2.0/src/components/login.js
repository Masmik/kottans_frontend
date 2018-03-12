import {Component} from './';
import './login.scss';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('button');
        this.el.classList.add('logInBlock');
        this.el.setAttribute('type', 'button');
    }

    render() {
        return `<i class="fa fa-sign-in" aria-hidden="true"></i>
                Login / Signup`;
    }

}

export default LogIn;
