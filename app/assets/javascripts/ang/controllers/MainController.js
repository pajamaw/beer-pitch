app.controller('MainController', MainController)
function MainController($scope, $timeout, Facebook, User){
  $scope.events = {};
  var current_user = User.get({id: 1})

  $scope.eve = function() {
    Facebook.api('/me/events?access_token=EAAPdcktnZCWsBAJQzp2PorKBZA7x1LqszbbmUcHpZBoEs9XI1w1ZCZCRu0dMpjJUu9VLQvizmZBFOQ7mZCbAPVPqQMt2njX2Or0vA6nZBDwNgm1IgUlzB8OLX9Cpd1NfNsdZCPsgkFYKgaW7u0oLdDHkqySbKKfDlifoZD&since=today&limit=200',
      function(response){
        $scope.$apply(function(){
          $scope.events = response.data;
          debugger;
        });
      }
  )}
  $scope.eve();
}
