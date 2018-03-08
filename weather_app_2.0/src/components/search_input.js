import { Component } from './';
import { bindAll } from '../utils';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'componentReceivedProps');
        this.el = document.createElement('div');

        // handle events
        // this.el.addEventListener('click', props.searchWeatherButton);
    }

    componentReceivedProps(props) {

    }


    render () {
        let html = `<input type="text" class="enterWeather" id="city-search" placeholder="Enter City">
        <button class="searchWeather__button" id="getWeather">Search</button>`;

        return html;
    }

}

export default SearchInput;
