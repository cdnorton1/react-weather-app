var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f0d4ab5bf10a6b58b72a8fc2b1449b23&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location); // takes our plain text string and encodes it properly for browswer
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}