var app = angular.module('app', ['facebook', 'ngResource'])

app.config(['FacebookProvider', 
  function(FacebookProvider){
    var myAppId = '1087907891248491'
    var accessToken = 'dd08b09eb7081ed83a91685838215392'
    var fbPage = 'me'


    FacebookProvider.init(myAppId);
  }])