export function getWeather(lat, long) {
    const API_URL = 'https://api.darksky.net/forecast/';
    const API_KEY = '92bd3e58604d7e3e7b32e86b71f4be3d';


    return new Promise((resolve, reject) => {

        $.ajax({
            url: `${API_URL}${API_KEY}/${lat},${long}`,
            dataType: "jsonp", // JSONP its ability to make a cross-domain request, that is why it works.
            success: function (forecast) {

                if (typeof forecast == "undefined") {
                    reject(new Error("Forecast is undefined"));
                    return;
                }

                resolve(forecast)
            },
            error: function () {
                reject(new Error("Error occurred while get Forecast"));
            }

        });

    });




}
