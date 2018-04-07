import {
    Component,
    Clock,
    Logo,
    LogIn
} from '../components';
import { bindAll, Auth } from '../utils';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('header');

        this.state = {
            userName: Auth.claims.username,
        };

        // init components
        this.clock = new Clock();
        this.logo = new Logo();
        this.login = new LogIn();

        // this.getPizzaData();
    }

    // getPizzaData() {
    //     // return PizzaApi.User.getUserInfo(Auth.token)
    //     //     .then(userData => {
    //     //         console.log(userData)
    //     //     });
    // }

    render() {
        return [
            this.el.appendChild(this.clock.update()),
            this.el.appendChild(this.logo.update()),
            this.el.appendChild(this.login.update(this.state)),
        ];

    }
}

export default Header;
// this.updateState({ userData })
