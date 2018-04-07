import { Component } from './';
import { DOMAIN } from '../api/pizza/const';
import './pizza_component.scss';

class PizzaComponent extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('section');
        this.el.classList.add('pizzaComponent__Section');
        this.el.classList.add('pizza__Section');
    }

    render() {

        const { ingredients, tags }  = this.props;
        console.log("ingredients", ingredients);

        return `<form id="create">
                <label class="pizzaComponent__label pizzaComponent__label_name" for="pizza_name">Pizza name</label>
                <input type="text" id="pizza_name" name="pizza_name" class="form__input pizzaComponent__name">
                
                <label class="pizzaComponent__label" for="pizza_description">Pizza description</label>
                <input type="text" id="pizza_description" name="pizza_description" class="form__input pizzaComponent__description">
      
                <p class="pizzaComponent__description">Pizza description</p>
                <section class="pizzaComponent__size">
                <h3>Size</h3>
                <label for="30">30</label>
                <input type="radio" name="size" id="30">
                 <label for="45">45</label>
                <input type="radio" name="size" id="45">
                 <label for="60">60</label>
                <input type="radio" name="size" id="60">
                </section>
                <section class="pizzaComponent__tags">
                <h3>Tags</h3>
                
                ${tags.reduce((html, tag) => {
            html += `
                                <label title="${tag.name}">
                                ${tag.name}
                                    <input type="checkbox">
                                </label>
                            `
            return html
        }, "")}
                </section>
                <section class="pizzaComponent__ingredients">
                <h3>ingredients</h3>
                  ${ingredients.reduce((html, ingredient) => {
            html += `
                                <label title="${ingredient.name}">
                                 <img src="${DOMAIN}/${ingredient.image_url}" alt="${ingredient.name}">
                                    <input type="checkbox">
                                </label>
                            `
            return html
        }, "")}
                </section>
                </form>`;
    }

}

export default PizzaComponent;


