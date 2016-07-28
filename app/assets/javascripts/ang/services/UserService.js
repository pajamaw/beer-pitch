app.factory('User', User)

function User($q, $timeout, $http){
  return {
  //var User = $resource('/api/user/:id', {id: '@id'}, {
    get: function(id){
      return $http.get(`/api/user/${id}`)
    }
//    update: {method: 'PUT'},
  //  delete: {method: 'DELETE'}
  //}
  //return User;
  }
};
