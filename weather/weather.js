const request = require('request');

var getWeather = function(lat, lng, callback) {
  request({
    url: `https://api.darksky.net/forecast/48014eff548cb9cc9ffcb3653af8c56a/${lat},%20${lng}`,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });

    }
    else {
      callback("Unable to fetch weather");
    }
  });
};

module.exports = {
  getWeather
}
