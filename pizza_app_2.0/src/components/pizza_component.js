import { Component } from './';
import './pizza_component.scss';

class PizzaComponent extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('section');
        this.el.classList.add('pizzaComponent__Section');
    }

    render() {

        const { ingredients }  = this.props;

        return `<form>
                <label for="pizza_name">Pizza name</label>
                <input type="text" id="pizza_name" name="pizza_name" class="pizzaComponent__name">
                <p class="pizzaComponent__description">Pizza description</p>
                <section class="pizzaComponent__tags">
                <h3>Tags</h3>
                </section>
                <section class="pizzaComponent__ingredients">
                <h3>ingredients</h3>
                </section>
                </form>`;
    }

}

export default PizzaComponent;


