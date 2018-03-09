import {Component, AutoLocation, SearchInput} from "../components";
import {isAllowedGEOLocation} from "../utils/auto_location";
import {AutoGEOLocation, bindAll} from '../utils';
import {SuggestionApi, getWeather} from '../api'
import './reset.scss';
import './main.scss';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.el = props.el || document.createElement('div');
        this.el.classList.add('wrapper');

        bindAll(this, 'handlerAutoGEOLocationClick', 'searchWeatherButton', 'GoogleApiLoaded', 'handleSuggestion', 'afterRender');

        window.GoogleApiLoaded = this.GoogleApiLoaded;

        // origin state
        this.state = {
            autoLocation: {
                isAllowed: isAllowedGEOLocation(),
                lat: null,
                long: null,
                handlerClick: this.handlerAutoGEOLocationClick
            },
            googleApiLoaded: false,
            location: {
                lat: null,
                long: null
            },
            address: "",
            forecast: null
        };

        // init components
        this.autoLocation = new AutoLocation(this.state.autoLocation);
        this.searchInput = new SearchInput();
    }

    handlerAutoGEOLocationClick(e) {
        e.preventDefault();

        this.state.autoLocation.isAllowed = false;
        this.update(this.state);

        if (this.state.autoLocation.lat) {
            // get location from cache
            this.state.autoLocation.isAllowed = true;
            this.state.location.lat = this.state.autoLocation.lat;
            this.state.location.long = this.state.autoLocation.long;
            this.state.address = "Current Location";
            this.update(this.state);
            return;
        }

        AutoGEOLocation().then((locationObj) => {
            this.state.autoLocation.isAllowed = true;
            this.state.autoLocation.lat = locationObj.lat;
            this.state.autoLocation.long = locationObj.long;
            this.state.address = "Current Location";
            this.update(this.state);
        }, (err) => {
            console.warn(err);
            this.state.autoLocation.isAllowed = false;
            this.update(this.state);
        });
    }

    searchWeatherButton(e) {
        e.preventDefault();
        console.log('weather');

        getWeather(this.state.location.lat, this.state.location.long).then(resp => {
            this.state.forecast = resp;
            this.update(this.state);
        }, err => {
            console.error(err);
        });
    }


    GoogleApiLoaded() {
        this.state.googleApiLoaded = true;
        this.update(this.state);
    }

    handleSuggestion() {

        if (!this.state.googleApiLoaded) {
            return;
        }
        let inputEl = this.el.querySelector("#city-search");

        SuggestionApi(inputEl).then((locationObj) => {
            this.state.location.lat = locationObj.lat;
            this.state.location.long = locationObj.long;
            this.state.address = locationObj.address;
            this.update(this.state);
        }, (err) => {
            console.warn(err);
        });
    }

    afterRender() {
        this.handleSuggestion();
    }

    render() {

        let title = document.createElement('div');
        title.classList.add('appsName');
        title.innerHTML = `<h1 class="title">Weather App</h1>`;

        let searchContainer = document.createElement('div');
        searchContainer.classList.add('searchContainer');

        let additionalBtn = document.createElement('div');
        additionalBtn.classList.add('additionalBtn');

        additionalBtn.appendChild(this.autoLocation.update(this.state.autoLocation));
        additionalBtn.appendChild(this.searchInput.update({
            searchWeatherButton: this.searchWeatherButton,
            address: this.state.address
        }));

        searchContainer.appendChild(additionalBtn);


        return [
            title,
            searchContainer
        ];


    }
}

export default MainPage;
