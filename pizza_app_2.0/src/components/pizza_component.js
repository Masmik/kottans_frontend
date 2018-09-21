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
        console.log("ingredients", tags);

        return `<form id="create">
                <input type="text" id="pizza_name" name="pizza_name" class="form__input form__input_pizzaComponent pizzaComponent__input" 
                placeholder="Pizza name">
                <input type="text" id="pizza_description" name="pizza_description" placeholder="Pizza description" class="form__input form__input_pizzaComponent pizzaComponent__input pizzaComponent_description">
                <section class="pizzaComponent__section pizzaComponent__size">
                    <h3 class="pizzaComponent__title">Size</h3>
                    <input type="radio" name="size" id="size30" checked>
                    <label for="size30">30</label>
                    <input type="radio" name="size" id="size45">
                    <label for="size45">45</label>
                    <input type="radio" name="size" id="size60">
                    <label for="size60">60</label>
                </section>
                <section class="pizzaComponent__section pizzaComponent__tags">
                    <h3 class="pizzaComponent__title">Tags</h3>
                
                ${tags.reduce((html, tag) => {
            html += ` <input type="checkbox" id="tag${tag.id}">
                              <label for="tag${tag.id}"  title="${tag.name}">${tag.name}</label>
                               `
            return html
        }, "")}
                </section>
                <section class="pizzaComponent__section pizzaComponent__ingredients">
                    <h3 class="pizzaComponent__title">ingredients</h3>
                  ${ingredients.reduce((html, ingredient) => {
            html += `
                                <label for="ingredient${ingredient.id}" title="${ingredient.name}">
                                 <img src="${DOMAIN}/${ingredient.image_url}" alt="${ingredient.name}">
                                 <input type="checkbox" id="ingredient${ingredient.id}">
                                </label>
                            `
            return html
        }, "")}
                </section>
                <div class="pizzaComponent__order">
                    <div class="pizzaComponent__section pizzaComponent__price">
                 <span class="price_text">Price is</span>
                        <span class="price_sum">14<span class="price_unit">$</span></span>
                       
                    </div>
                    <div class="inputGroup__buttonGroup_pizzaComponent">
                        <button class="button loginForm__button button__signIn">Create</a>
                    </div>
                </div>
                </form>`;
    }

}

export default PizzaComponent;


