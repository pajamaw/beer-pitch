app.controller('MainController', MainController)
function MainController($scope, $timeout, Facebook, User, Auth){
  $scope.events = {};
  $scope.euser = {};
  const preUrl = '/me/events?access_token=';

  Auth.currentUser().then(function(user){
    const id = user.id;
  })
  User.get('1').then(function(resp){
    $scope.current_user = resp.data;
    let oauth = resp.data.oauth_token
    let userUrl = '/me/events?access_token='+ oauth + '&since=today&limit=200';
    getEvents(userUrl, oauth);
    //debugger;
  });


  //debugger;
  //oauth = current_user.user.oauth_token;
  function getEvents(url, auth){
    $scope.events = function() {
      Facebook.api(url,
        function(response){
          $scope.$apply(function(){
            $scope.events = response.data;
          //  debugger;
          });
        })
      //  var event_id = $scope.events.
    };
      $scope.events();
      hostInfo(auth);
    //  debugger;
    }

    var hostInfo = function(auth){
      return Facebook.api(`/1701993896731313?access_token=${auth}?fields=owner`,
        function(response){
          if (response && !response.error){
            $scope.euser = response;
          }
          //console.log(response.error)
        debugger;

        })
    }
  debugger;
  }
