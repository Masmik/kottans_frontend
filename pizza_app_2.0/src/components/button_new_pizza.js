import { Component } from './';
import './button_new_pizza.scss'

class Btn extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('button');
        this.el.classList.add('button');
        this.el.classList.add('button_add');

    }

    render () {
        return `<i class="fa fa-plus" aria-hidden="true"></i>
                <span class="button_text">Add new pizza</span>`;
    }

}

export default Btn;
