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

    weeklyForecast: [],

    // recentHistory: [],


    init: function () {

        // @todo store lat and long from request url param hash
        weather.getLatLongFromURL();

        weather.insertGoogleScript();
        weather.getAutoLocation();

        // @todo add event listener for button get current location

        $(".findLocation").click(function (e) {
            e.preventDefault();
            weather.actionGetCurrentLocation();
        });

        weather.recentHistory();

    },

    actionGetCurrentLocation: function () {
        if (!weather.currentLocation.isAllowed) {
            return;
        }

        weather.requestParams.lat = weather.currentLocation.lat;
        weather.requestParams.long = weather.currentLocation.long;

        console.log("Current location", weather.currentLocation.lat);
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
            timeout: 10000,
            maximumAge: 0
        })
    },

    getWeather: function () {

        var api_call = weather.requestParams.url + weather.requestParams.key + "/" + weather.requestParams.lat + "," + weather.requestParams.long;


        $.ajax({
            url: api_call,
            dataType: "jsonp",
            success: function (forecast) {

                if (typeof forecast == "undefined") {
                    return;
                }
                weather.handleSuccessRequest(forecast);
            }

        });


    },

    handleSuccessRequest: function (forecast) {

        console.log("forecast", forecast);
        weather.currentCityForecast.locationName = forecast.timezone;
        weather.currentCityForecast.tempF = forecast.currently.temperature;
        weather.currentCityForecast.description = forecast.currently.summary;
        weather.currentCityForecast.icon = forecast.currently.icon;


        // Loop through daily forecasts
        for (var i = 0, l = forecast.daily.data.length; i < l - 1; i++) {

            var dailyObj = {
                icon: forecast.daily.data[i].icon,
                temperatureMax: forecast.daily.data[i].temperatureMax,
                temperatureMin: forecast.daily.data[i].temperatureMin,
                date: new Date(forecast.daily.data[i].time * 1000)
            };
            weather.weeklyForecast.push(dailyObj);
        }

        console.log("weather.currentCityForecast", weather.currentCityForecast);
        weather.showWeather();
        // weather.skycons();
        window.location.hash = "lat=" + weather.requestParams.lat + "&long=" + weather.requestParams.long;
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
    },

    //Show Weather

    showWeather: function () {
        weather.renderToday();
        weather.skycons();

    },

    renderToday: function () {
        $('.currentCityName').text(weather.currentCityForecast.locationName.split('/')[1]);
        $('.currentRegion').text(weather.currentCityForecast.locationName.split('/')[0]);
        $('.temperatureValue').text(weather.currentCityForecast.tempF);
        $('.description').text(weather.currentCityForecast.description);

    },

    skycons: function () {

        var skycons = new Skycons({
            "color": "#FFFFFF"
        });
        var weatherIcon = $(".weatherIcon")[0];
        skycons.add(weatherIcon, weather.currentCityForecast.icon);

        skycons.play();
    },

    recentHistory: function () {
        //RecentHistory
        $('#getWeather').click(function () {
            weather.recentHistory.push($('#city-search').val());
        });
    }


};

document.addEventListener('DOMContentLoaded', function () {
    weather.init();
});




