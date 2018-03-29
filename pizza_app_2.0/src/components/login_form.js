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
                    <label class="form__label" for="username">Login</label>
                    <input type="text" id="username" name="username" class="form__input loginForm__input_name" 
                    maxlength="256" required>
                </div>
                <div class="inputGroup">
                    <label class="form__label" for="userName">Password</label>
                    <input type="password" name="password" id="password" class="form__input loginForm__input_password" 
                    class="password" pattern=".{8,}" required>
                </div>
                <div class="inputGroup inputGroup__buttonGroup">
		            <!--<a href="#/" class="button loginForm__button button__signIn">Sign in</a>-->
		            <button type="submit" class="button loginForm__button button__signIn">Sign in</button>
		            <a href="#/registration" class="button loginForm__button button__signUp"> Sign up</a>
	            </div>`
    }
}

export default LoginForm;

