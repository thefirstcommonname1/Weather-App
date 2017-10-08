console.log("Starting app");

setTimeout(function () {
  console.log("Inside of call back");
}, 2000);

setTimeout(function () {
  console.log("Second timeout function running");
},0);

console.log("Finishing up");
