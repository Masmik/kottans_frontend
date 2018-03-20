import {
    Component,
    Btn,
    PizzaItem,
    Footer
} from '../components';
import {Header} from './';
import './reset.scss';
import './pizza_list_page.scss';

class PizzaListPage extends Component {
    constructor(props) {
        super(props);
        this.el = props.el || document.createElement('div');
        this.el.classList.add('wrapper');


        // origin state
        this.state = {
            pizzaItemInfo: [
                {
                    imgSrc: '../../src/images/pizza_im.jpg',
                    timerTime: '12:43:32',
                    queueNumber: 1,
                    cookedTime: 5,
                    price: 5
                },
                {
                    imgSrc: '../../src/images/pizza_im.jpg',
                    timerTime: '12:43:32',
                    queueNumber: 2,
                    cookedTime: 8,
                    price: 7
                },
                {
                    imgSrc: '../../src/images/pizza_im.jpg',
                    timerTime: '12:43:32',
                    queueNumber: 3,
                    cookedTime: 4,
                    price: 9
                },
                {
                    imgSrc: '../../src/images/pizza_ph.jpg',
                    timerTime: '12:43:32',
                    queueNumber: 4,
                    cookedTime: 3,
                    price: 11
                },
                {
                    imgSrc: '../../src/images/pizza_ph.jpg',
                    timerTime: '12:43:32',
                    queueNumber: 5,
                    cookedTime: 3,
                    price: 12
                },
                {
                    imgSrc: '../../src/images/pizza_ph.jpg',
                    timerTime: '12:43:32',
                    queueNumber: 6,
                    cookedTime: 3,
                    price: 14
                }
            ]
        };

        // // init components
        this.header = new Header();
        this.btn = new Btn();
        this.pizzaItem = new PizzaItem();
        this.footer = new Footer();
    }


    render() {
        let content = document.createElement('div');
        content.classList.add('content');
        content.appendChild(this.header.update());

        let main = document.createElement('main');
        main.appendChild(this.btn.update());

        main.appendChild(this.pizzaItem.update({items: this.state.pizzaItemInfo}));
        content.appendChild(main);

        content.appendChild(this.footer.update());

        return [
            content
        ];

    }
}

export default PizzaListPage;
