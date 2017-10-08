const yargs = require('yargs');
const axios = require('axios');

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
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios.get(geocodeUrl).then(function(response) {
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error("Unable to find the new address");
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/48014eff548cb9cc9ffcb3653af8c56a/${lat},%20${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then(function (response) {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch(function(e) {
  if (e.code === "ENOTFOUND") {
    console.log("Unable to connect to API server");
  }
  else {
    console.log(e.message);
  }
})
