app.controller('MainController', MainController)
function MainController($scope, $timeout, Facebook, User){
  $scope.events = {};

  $scope.eve = function() {
    Facebook.api('/me/events?access_token='+User.oauth_token+'&since=today&limit=200', 
      function(response){
        $scope.$apply(function(){
          $scope.events = response;
          debugger;
        });
      });
  };
  $scope.eve();
}