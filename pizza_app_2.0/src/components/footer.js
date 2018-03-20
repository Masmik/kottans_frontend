import { Component } from './';
import './footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('footer');
    }

    render () {
        return `<p class="orgNameAndLocation"><span class="organization">Kottans,</span>Kottans&nbsp;Str.&nbsp;1</p>
        <a class="phoneNumber" href="tel:577-788-87">tel:&nbsp;577&nbsp;-&nbsp;788&nbsp;-&nbsp;87</a>
        <small class="copyright">Pizza Manager&nbsp;&copy;&nbsp;2018</small>`;

    }

}

export default Footer;
