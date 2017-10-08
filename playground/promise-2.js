const request = require('request');
var geocodeAddress = function(address) {
  return new Promise(function (resolve, reject){
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, function(error, response, body) {
      if (error) {
        reject("Unable to connect to the Google Servers");
      }
      else if (body.status === "ZERO_RESULTS") {
        reject("Unable to find that address");
      }
      else if (body.status === "OK") {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('19416').then(function(location){
  console.log(JSON.stringify(location));
}, function(errorMessage) {
  console.log(errorMessage);
});
