import { Component } from './';
import './logo.scss';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('a');
        this.el.setAttribute('href', '#');
        this.el.classList.add('logo');
    }

    render () {
        return `<img src="src/images/pizza_logo.png" alt="pizza logo">`;
    }
}

export default Logo;
