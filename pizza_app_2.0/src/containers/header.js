import {
    Component,
    Clock,
    Logo,
    LogIn
} from '../components';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('header');

        // init components
        this.clock = new Clock();
        this.logo = new Logo();
        this.login = new LogIn();
    }

    render() {
        return [
            this.el.appendChild(this.clock.update()),
            this.el.appendChild(this.logo.update()),
            this.el.appendChild(this.login.update()),
    ];

    }
}

export default Header;
