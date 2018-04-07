import { Component } from './';

class PizzaCanvas extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('section');
        this.el.classList.add('pizzaCanvas__Section');
        this.el.classList.add('pizza__Section');
    }

    render() {

        return `<div class="canvasImage"></div>`;
    }

}

export default PizzaCanvas;
