import {
    Component,
    RegistrationForm,
    Footer
} from '../components';
import { Header } from './';
import './registration_page.scss';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('wrapper');


        // // init components
        this.header = new Header();
        this.registrationForm = new RegistrationForm();
        this.footer = new Footer();

    }

    render() {

        let content = document.createElement('div');
        content.classList.add('content');
        content.appendChild(this.header.update());

        let main = document.createElement('main');
        main.classList.add('main_loginPage');
        main.appendChild(this.registrationForm.update());

        content.appendChild(main);
        content.appendChild(this.footer.update());


        return [
            content
        ];

    }
}

export default RegistrationPage;
