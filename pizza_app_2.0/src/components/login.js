import { Component } from './';
import './login.scss';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('logInBlock');
    }

    render() {

        const { userName } = this.props;

        let userProfile = '';

        if (userName) {
            userProfile = `<a type="button" class="login__item" href="#/profile" >${userName}</a>
                &nbsp;/&nbsp;
                <a type="button" class="login__item" href="#/logout">Log out</a>`
        } else {
            userProfile = `<a type="button" class="login__item" href="#/login" >Sign in</a>
                &nbsp;/&nbsp; 
                <a type="button" class="login__item" href="#/registration">Sign up</a>`
        }

        return `<i class="fa fa-sign-in" aria-hidden="true"></i>
                ${userProfile}
                `;
    }
}

export default LogIn;
