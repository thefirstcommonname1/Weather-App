var getUser = function(id, callback) {
  var user = {
    id: id,
    name: "Vikram Sharma"
  };
  setTimeout(function(){
    callback(user);
  }, 3000)
}
getUser(31, function(user) {
  console.log(user);
});
