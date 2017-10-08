const yargs = require('yargs');

const geocode= require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
  a: {
    demand: true,
    describe: 'Address to fetch weather for',
    alias: "address",
    string: true
  }
}).help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, function(errorMessage, results) {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, function (error, results) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}`);


      }
    });
  }
});
