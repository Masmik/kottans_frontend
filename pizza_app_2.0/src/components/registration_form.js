import { Component } from './';
import './form.scss'
import './registration_form.scss';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('form');
        this.el.classList.add('form');
        this.el.classList.add('registrationForm');
        this.el.setAttribute('method', 'post');
    }


    render() {
        return `<div class="inputGroup inputGroup_login">
                    <label class="form__label" for="login">Login</label>
                    <input type="text" id="login" class="form__input loginForm__input_name" class="login" 
                    maxlength="256" placeholder="email@domain.com" required>
                </div>
                <div class="inputGroup inputGroup_password">
                    <label class="form__label" for="password">Password</label>
                    <input type="password" id="password" class="form__input loginForm__input_password" class="password" pattern=".{8,}" required>
                </div>
                 <div class="inputGroup">
                    <label class="form__label" for="confirm_password">Confirm password</label>
                    <input type="password" id="confirm_password" class="form__input loginForm__input_password" 
                    class="password" pattern=".{8,}" required>
                </div>
                  <div class="inputGroup inputGroup_phone">
                    <label class="form__label" for="phone_number">Phone number</label>
                    <input type="tel" id="phone_number" class="form__input loginForm__input_password" 
                    class="phone_number" required>
                </div>
                 <div class="inputGroup inputGroup_email">
                    <label class="form__label" for="email">Email</label>
                    <input type="tel" id="email" class="form__input loginForm__input_password" 
                    class="email" required>
                </div>
                <div class="inputGroup inputGroup__buttonGroup">
		            <a href="#/login" class="button loginForm__button button__signIn">Sign in</a>
		            <a href="#/" class="button loginForm__button button__signUp"> Sign up</a>
	            </div>`
    }
}

export default RegistrationForm;
