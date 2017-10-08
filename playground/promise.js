var asyncAdd = function(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
      reject("Arguements must be numbers");
    }
  })
}
asyncAdd(5,'7').then(function(message) {
  console.log(message);
  return asyncAdd(message, 33);
}).then(function(message) {
  console.log("Res: ", message);
}).catch(function(errorMessage) {
  console.log(errorMessage);
})

// var somePromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Hey it worked");
//     //reject("Unable to fullfill promise");
//   },2500)
//
// });
// somePromise.then(function (message) {
//   console.log("Success:", message);
// }, function(errorMessage) {
//   console.log("Error:", errorMessage);
// });
