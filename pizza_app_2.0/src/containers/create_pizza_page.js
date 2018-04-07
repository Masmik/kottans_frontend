import {
    Component,
    Footer,
    PizzaComponent,
    PizzaCanvas
} from '../components';
import { Header } from './';
import PizzaApi from '../api/pizza_api';
import { bindAll, Auth, navigateTo } from '../utils';
import './create_pizza_page.scss';

class CreatePizzaPage extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'getPizzaIngredients');

        this.state = {
            ingredients: []
        };

        this.el = document.createElement('div');
        this.el.classList.add('wrapper');

        // // init components
        this.header = new Header();
        this.pizzaCanvas = new PizzaCanvas();
        this.createPizzaContainer = new PizzaComponent();
        this.footer = new Footer();

        this.getPizzaIngredients();
        this.getPizzaTags();
    }


    getPizzaIngredients() {
        return PizzaApi.Pizza.getPizzaIngredient(Auth.token).then(resp => {
            this.state.ingredients = resp.answer.results;
            console.log('ingr', this.state.ingredients);
            this.update();
        }).catch(err => {
            console.log(err);
        });
    }

    getPizzaTags() {
        return PizzaApi.Pizza.getPizzaTag(Auth.token).then(resp => {
            console.log("tags", resp.answer.results);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {

        let content = document.createElement('div');
        content.classList.add('content');
        content.appendChild(this.header.update());

        let main = document.createElement('main');
        main.classList.add('main_createPizzaPage');
        main.appendChild(this.pizzaCanvas.update());
        main.appendChild(this.createPizzaContainer.update(this.state));

        content.appendChild(main);
        content.appendChild(this.footer.update());


        return [
            content
        ];

    }
}

export default CreatePizzaPage;
