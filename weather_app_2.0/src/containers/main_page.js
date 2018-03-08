import {Component, AutoLocation, SearchInput} from "../components";
import {isAllowedGEOLocation} from "../utils/auto_location";
import {AutoGEOLocation, bindAll} from '../utils';
import './reset.scss';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.el = props.el || document.createElement('div');
        this.el.classList.add('wrapper');

        bindAll(this, 'handlerAutoGEOLocationClick', 'searchWeatherButton');

        // origin state
        this.state = {
            autoLocation: {
                isAllowed: isAllowedGEOLocation(),
                lat: null,
                long: null,
                handlerClick: this.handlerAutoGEOLocationClick
            },
        };

        // init components
        this.autoLocation = new AutoLocation(this.state.autoLocation);
        this.searchInput = new SearchInput();


        // this.autoLocation.updateState(this.state);
    }

    handlerAutoGEOLocationClick(e) {
        e.preventDefault();

        this.state.autoLocation.isAllowed = false;
        console.log(this.state);
        this.update();

        AutoGEOLocation().then((locationObj) => {
            this.state.autoLocation.isAllowed = true;
            this.state.autoLocation.lat = locationObj.lat;
            this.state.autoLocation.long = locationObj.long;
            this.update();
        }, (err) => {
            console.warn(err);
            this.state.autoLocation.isAllowed = false;
            this.update();
        });
    }

    searchWeatherButton(e) {
        e.preventDefault();


    }

    render() {

        let title = document.createElement('div');
        title.classList.add('appsName');
        title.innerHTML = `<h1 class="title">Weather App</h1>`;

        let searchContainer = document.createElement('div');
        searchContainer.classList.add('searchContainer');
        searchContainer.appendChild(this.autoLocation.update(this.state.autoLocation));
        searchContainer.appendChild(this.searchInput.update());


        return [
            title,
            searchContainer
        ];


    }
}

export default MainPage;
