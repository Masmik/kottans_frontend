import {Component} from './';
import './login_form.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('form');
        this.el.classList.add('form');
        this.el.classList.add('loginForm');
        this.el.setAttribute('method', 'post');
    }


    render() {
        return `<div class="inputGroup">
                    <label class="form__label" for="userName">Login</label>
                    <input type="text" id="userName" class="form__input loginForm__input_name" class="email" maxlength="256" placeholder="email@domain.com" required>
                </div>
                <div class="inputGroup">
                    <label class="form__label" for="userName">Password</label>
                    <input type="password" id="password" class="form__input loginForm__input_password" class="password" pattern=".{8,}" required>
                </div>
                <div class="inputGroup inputGroup__buttonGroup">
		            <a href="#/" class="button loginForm__button button__signIn">Sign in</a>
		            <a href="#/registration" class="button loginForm__button button__signUp"> Sign up</a>
	            </div>`
    }
}

export default LoginForm;

