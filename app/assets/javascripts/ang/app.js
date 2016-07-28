var app = angular.module('app', ['facebook', 'ngResource', 'Devise'])
app.run(['Auth', function(Auth){
    Auth.currentUser().then(function(){
      console.log("Current User set");
    })
}]);
app.config(['FacebookProvider',
  function(FacebookProvider){
    var myAppId = '1087907891248491'

    FacebookProvider.init(myAppId);
  }]);
