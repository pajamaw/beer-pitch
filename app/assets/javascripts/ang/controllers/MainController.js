app.controller('MainController', MainController)
function MainController($scope, $timeout, Facebook, User){
  $scope.events = {};
  $scope.euser = {};
  var current_user;
  var url;
  var oauth;
  User.get({id: '1'}), function(data){
    $scope.current_user = data;
  };
  //oauth = current_user.user.oauth_token;
  url = '/me/events?access_token='+ oauth+ '&since=today&limit=200';
  $scope.events = function() {
    debugger;
    //EAAPdcktnZCWsBAJQzp2PorKBZA7x1LqszbbmUcHpZBoEs9XI1w1ZCZCRu0dMpjJUu9VLQvizmZBFOQ7mZCbAPVPqQMt2njX2Or0vA6nZBDwNgm1IgUlzB8OLX9Cpd1NfNsdZCPsgkFYKgaW7u0oLdDHkqySbKKfDlifoZD
    //$scope.current_user = User.get({id: 1});
    //change to url once i get it to set
    Facebook.api('/me/events?access_token=EAAPdcktnZCWsBAJQzp2PorKBZA7x1LqszbbmUcHpZBoEs9XI1w1ZCZCRu0dMpjJUu9VLQvizmZBFOQ7mZCbAPVPqQMt2njX2Or0vA6nZBDwNgm1IgUlzB8OLX9Cpd1NfNsdZCPsgkFYKgaW7u0oLdDHkqySbKKfDlifoZD&since=today&limit=200',//url,
      function(response){
        $scope.$apply(function(){
          $scope.events = response.data;
          debugger;
        });
      })
    //  var event_id = $scope.events.
};
$scope.euser = function(){
  Facebook.api('/468029196741743',
    function(response){
      $scope.$apply(function(){
        $scope.euser = response.data;
        debugger;
    });
  })
};
$scope.euser();
  $scope.events();
  debugger;
}
