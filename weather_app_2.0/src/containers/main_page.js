import {
    Component,
    AutoLocationComp,
    AddToFavoriteComp,
    SearchInputComp,
    WeatherTodayComp,
    WeatherWeeklyComp,
    WeatherPlaceListComp
} from "../components";
import {isAllowedGEOLocation} from "../utils/auto_location";
import {AutoGEOLocation, bindAll, getLocalStorage, setLocalStorage, setUniqueLocalStorage, temperatureConverter} from '../utils';
import {SuggestionApi, getWeather, getLocationName} from '../api'
import './reset.scss';
import './main.scss';

const lsHistoryKey = 'history';
const lsFavoriteKey = 'favorite';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.el = props.el || document.createElement('div');
        this.el.classList.add('wrapper');

        bindAll(
            this,
            'handlerAutoGEOLocationClick',
            'searchWeatherButton',
            'GoogleApiLoaded',
            'handleSuggestion',
            'afterRender',
            'getWeatherForecast',
            'handlerClickFavorite',
            'handlerTemperatureChange'
        );

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
            forecast: null,
            temperatureType: 'fahrenheit',
            temperature: 0
        };

        // init components
        this.autoLocationComp = new AutoLocationComp(this.state.autoLocation);
        this.addToFavoriteComp = new AddToFavoriteComp({
            handlerClickFavorite: this.handlerClickFavorite
        });
        this.searchInputComp = new SearchInputComp();
        this.weatherTodayComp = new WeatherTodayComp({
            handlerTemperatureChange: this.handlerTemperatureChange
        });
        this.weatherWeeklyComp = new WeatherWeeklyComp();
        this.weatherHistoryListComp = new WeatherPlaceListComp();
        this.weatherFavoriteListComp = new WeatherPlaceListComp();

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
            this.state.location.lat = locationObj.lat;
            this.state.location.long = locationObj.long;
            getLocationName(this.state.autoLocation.lat, this.state.autoLocation.long).then(address => {
                this.state.address = address;
                this.getWeatherForecast();
                this.update(this.state);
            });
            this.update(this.state);
        }, (err) => {
            console.warn(err);
            this.state.autoLocation.isAllowed = false;
            this.update(this.state);
        });
    }

    handlerClickFavorite(e) {
        e.preventDefault();
        console.log('clickFavorite');
        setUniqueLocalStorage(lsFavoriteKey, {
            name: this.state.address,
            url: window.location.href
        });
        this.update(this.state);

    }

    searchWeatherButton(e) {
        e.preventDefault();
        this.getWeatherForecast();
    }

    handlerTemperatureChange(temperatureType) {
        this.state.temperatureType = temperatureType;
        this.state.temperature = temperatureConverter(this.state.temperatureType, this.state.forecast.currently.temperature);
        this.update(this.state);
    }


    getWeatherForecast() {

        getWeather(this.state.location.lat, this.state.location.long).then(resp => {
            this.state.forecast = resp;
            this.handlerTemperatureChange(this.state.temperatureType);
            setLocalStorage(lsHistoryKey, {
                name: this.state.address,
                url: window.location.href
            });
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
            this.getWeatherForecast();
            this.update(this.state);
        }, (err) => {
            console.warn(err);
        });
    }


    afterRender() {
        this.handleSuggestion();
    }

    render() {
        const {forecast, address} = this.state;

        let title = document.createElement('div');
        title.classList.add('appsName');
        title.innerHTML = `<h1 class="title">Weather App</h1>`;

        let searchContainer = document.createElement('div');
        searchContainer.classList.add('searchContainer');

        let additionalBtn = document.createElement('div');
        additionalBtn.classList.add('additionalBtn');

        additionalBtn.appendChild(this.autoLocationComp.update(this.state.autoLocation));
        additionalBtn.appendChild(this.addToFavoriteComp.update());

        additionalBtn.appendChild(this.searchInputComp.update({
            searchWeatherButton: this.searchWeatherButton,
            address: address
        }));

        searchContainer.appendChild(additionalBtn);

        let weatherInfoContainer = document.createElement('section');

        if (forecast != null) {

            weatherInfoContainer.classList.add('weatherInfo');

            weatherInfoContainer.appendChild(this.weatherTodayComp.update({
                forecast: forecast,
                address: address,
                temperatureType: this.state.temperatureType,
                temperature: this.state.temperature,
                handlerTemperatureChange: this.handlerTemperatureChange
            }));

            let detailedInfo = document.createElement('div');
            detailedInfo.classList.add('detailedInfo');

            detailedInfo.appendChild(this.weatherWeeklyComp.update({
                forecast: forecast,
                temperatureType: this.state.temperatureType
            }));

            detailedInfo.appendChild(this.weatherHistoryListComp.update({
                list: getLocalStorage(lsHistoryKey),
                title: 'Recently viewed'
            }));
            detailedInfo.appendChild(this.weatherFavoriteListComp.update({
                list: getLocalStorage(lsFavoriteKey),
                title: 'Favorite'
            }));


            weatherInfoContainer.appendChild(detailedInfo);

        }

        return [
            title,
            searchContainer,
            weatherInfoContainer
        ];


    }
}

export default MainPage;
