import {
    Component,
} from '../components';
import { Header } from './';
import './reset.scss';
import './pizza_list_page.scss';

class PizzaListPage extends Component {
    constructor(props) {
        super(props);
        this.el = props.el || document.createElement('div');
        this.el.classList.add('wrapper');

        // // init components
        this.header = new Header();
    }


    render() {
        let content = document.createElement('div');
        content.classList.add('content');
        content.appendChild(this.header.update());

        return [
            content
        ];

    }
}

export default PizzaListPage;
