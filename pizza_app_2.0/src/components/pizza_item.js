import {Component} from './';
import './pizza_item.scss';

class PizzaItem extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('section');
        this.el.classList.add('pizzaSection');

    }


    render() {
        const {items} = this.props;

        let pizzaItemRender = items.map(item => {
            return `<figure class="pizzaItem">
                        <img src="${item.imgSrc}" alt="pizza img" class="pizzaItemImg">
                        <figcaption>
                            <time class="pizzaItem__timer" datetime="12:43:32">${item.timerTime}</time>
                            <p class="pizzaItem__queue"><span class="pizzaItem__queue_hash">#</span>${item.queueNumber}</p>
                            <p class="pizzaItem__cookedTime">ETA:
                                <time>${item.cookedTime}&nbsp;min</time>
                            </p>
                            <p class="pizzaItem__price"><span class="pizzaItemPrice_moneyUnit">$</span>${item.price}</p>
                        </figcaption>
                    </figure>`

        });

        return pizzaItemRender.join('');
    }

}

export default PizzaItem;
