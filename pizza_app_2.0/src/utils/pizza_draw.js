import { CRUST_PIZZA_IMG, DOMAIN } from '../api/pizza/const';
import  { bindAll } from '../utils';

class PizzaDrawService {
    constructor(props) {
        bindAll(this, 'loadImage', 'loadResources');
        this.el = this.props.el;
        this.ingredients = this.props.ingredients;
        this.loadResources().then((resources) => {
            resources.forEach(resource => this.images[resource.name] = resource.image);
            console.log(this.images);
        })
    }

    loadImage(name, url) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = () => resolve({name, image});
            image.onerror = (err) => reject(err);
            image.src = url;
        })
    }

    loadResources() {
        let promises = [];
        promises.push(this.loadImage('pizza',CRUST_PIZZA_IMG));
        promises.concat(Object.keys(this.ingredients))
    }

}

export const PIZZA_DRAW = new PizzaDrawService();
