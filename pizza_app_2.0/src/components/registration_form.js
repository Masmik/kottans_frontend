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
        const { storeList, registrationValidationErrors } = this.props;

        let storeListEl = '';
        if (storeList.length > 0) {
            for (let store of storeList) {
                storeListEl += `<option ${store.id == 17 ? 'selected' : ''} value="${store.id}">${store.name}</option>`
            }
        }

        let errorsEl = '';
        if (registrationValidationErrors.length > 0) {
            errorsEl = '<ul class="validation__block">';
            for (let error of registrationValidationErrors) {
                errorsEl += `<li class="error_text">${error}</li>`
            }
            errorsEl += '</ul>';
        }


        return `<div class="inputGroup inputGroup_login">
                    <label class="form__label" for="login">Login</label>
                    <input type="text" id="login" class="form__input loginForm__input_name" 
                    maxlength="256" name="login">
                </div>
                <div class="inputGroup inputGroup_password">
                    <label class="form__label" for="password">Password</label>
                    <input type="password" id="password" name="password" class="form__input loginForm__input_password" 
                    pattern=".{8,}">
                </div>
                 <div class="inputGroup">
                    <label class="form__label" for="confirm_password">Confirm password</label>
                    <input type="password" id="confirm_password" name="confirm_password" class="form__input loginForm__input_password" 
                    pattern=".{8,}">
                </div>
                  <div class="inputGroup inputGroup_phone">
                    <label class="form__label" for="phone_number">Phone number</label>
                    <input type="tel" id="phone_number" name="phone_number" class="form__input loginForm__input_password">
                </div>
                 <div class="inputGroup inputGroup_email">
                    <label class="form__label" for="email">Email</label>
                    <input type="tel" id="email" name="email" class="form__input loginForm__input_password" >
                </div>
                  <div class="inputGroup inputGroup_store">
                    <label class="form__label" for="store">Store</label>
                    <select name="store" class="form__input form__input_select">
                        ${storeListEl}
                    </select>
                </div>
                  <div class="inputGroup inputGroup_storePassword">
                     <label class="form__label" for="store_password">Password</label>
                    <input type="password" id="store_password" name="store_password" class="form__input loginForm__input_password" 
                   pattern=".{8,}">
                </div>
                
                  ${errorsEl}
                
                <div class="inputGroup inputGroup__buttonGroup">
		            <a href="#/login" class="button loginForm__button button__signIn">Sign in</a>
		            <button type="submit" class="button loginForm__button button__signUp">Sign up</button>
	            </div>`
    }
}

export default RegistrationForm;
