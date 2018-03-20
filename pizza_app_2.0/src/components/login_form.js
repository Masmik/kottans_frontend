import {Component} from './';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('form');
        this.el.classList.add('loginForm');
        this.el.setAttribute('method', 'post');
    }


    render() {
        return `<div class="inputGroup">
                    <label class="loginForm__label" for="userName">Email</label>
                    <input type="text" id="userName" class="loginForm__input loginForm__input_name" class="email" maxlength="256" placeholder="email@domain.com" required>
                </div>
                <div class="inputGroup">
                    <label class="loginForm__label" for="userName">Password</label>
                    <input type="password" id="password" class="loginForm__input loginForm__input_password" class="password" pattern=".{8,}" required>
                </div>
                <div class="inputGroup inputGroup__buttonGroup">
		            <input type="submit" class="button loginForm__button button__signIn" value="Sign in">
		            <a href="" class="button loginForm__button button__signUp"> Sign up</a>
	            </div>`

    }
}

export default LoginForm;


