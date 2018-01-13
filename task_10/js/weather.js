"use strict";

var weather = {

    requestParams: {
        url: "https://api.darksky.net/forecast/",
        key: "92bd3e58604d7e3e7b32e86b71f4be3d",
        lat: "",
        long: ""
    },

    currentLocation: {
        lat: "",
        long: "",
        isAllowed: false
    },

    currentCityForecast: {},


    init: function () {

        // @todo store lat and long from request url param hash
        weather.getLatLongFromURL();

        weather.insertGoogleScript();
        weather.getAutoLocation();
        // @todo add event listener for button get current location
    },

    actionGetCurrentLocation: function () {
        if (!weather.currentLocation.isAllowed) {
            return;
        }

        weather.requestParams.lat = weather.currentLocation.lat;
        weather.requestParams.long = weather.currentLocation.long;
        weather.getWeather();
    },

    getAutoLocation: function () {

        if (!navigator.geolocation) {
            console.log("not allowed");
            weather.currentLocation.isAllowed = false;
            return;
        }

        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            weather.currentLocation.lat = lat.toFixed(4);
            weather.currentLocation.long = long.toFixed(4);
            weather.currentLocation.isAllowed = true;

            console.log("devicelocation", position);

            // @todo: unlock button "get current geolocation"
        }, function (err) {
            console.warn('err', err);
            weather.currentLocation.isAllowed = false;
            // @TODO popup cant find your location
        }, {
            enableHighAccuracy: true,
            timeout: 6000,
            maximumAge: 0
        })
    },

    getWeather: function () {

        var api_call = weather.requestParams.url + weather.requestParams.key + "/" + weather.requestParams.lat + "," + weather.requestParams.long;
        console.log(api_call);

        $.ajax({
            url: api_call,
            dataType: "jsonp",
            success: function (data) {
                console.log("data", data);
                weather.currentCityForecast.tempFahr = data.currently.temperature;
                weather.currentCityForecast.weatherIcon = data.currently.icon;
                weather.currentCityForecast.locationName = data.timezone;
                console.log("weather.currentCityForecast", weather.currentCityForecast);

                window.location.hash = "lat=" + weather.requestParams.lat + "&long=" + weather.requestParams.long;

            }
        });
    },

    fahrenToCelsius: function (fahrenheit) {
        var celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
        return celsius;
    },


    getLatLongFromURL: function () {
        var hash = window.location.hash.substr(1);

        var result = hash.split('&').reduce(function (result, item) {
            var parts = item.split('=');
            result[parts[0]] = parts[1];
            console.log(result);
            return result;
        }, {});

        if (typeof result.lat == "undefined" || typeof result.long == "undefined") {
            return;
        }

        weather.requestParams.lat = result.lat;
        weather.requestParams.long = result.long;
        weather.getWeather();
    },


    // Report City & AutoFill Coords

    insertGoogleScript: function () {
        var google_api = document.createElement('script'),
            api_key = 'AIzaSyCFYRuRgQBjP2G2YWvL7jg72DJ43kOLmN4';

        google_api.src = "https://maps.googleapis.com/maps/api/js?key=" + api_key + "&libraries=places,geometry&callback=weather.initGoogleAPI";

        document.body.appendChild(google_api);
    },
//
//
// // SearchBox Method
//
    initGoogleAPI: function () {
        var autocomplete = new google.maps.places.SearchBox(document.querySelector("#city-search"));

        autocomplete.addListener('places_changed', function () {
            var place = autocomplete.getPlaces()[0];
            if (typeof place == "undefined") {
                return;
            }

            var lat = place.geometry.location.lat();
            var long = place.geometry.location.lng();
            weather.requestParams.lat = lat.toFixed(4);
            weather.requestParams.long = long.toFixed(4);
            weather.getWeather();
        });
    }


};

document.addEventListener('DOMContentLoaded', function () {
    weather.init();
});




