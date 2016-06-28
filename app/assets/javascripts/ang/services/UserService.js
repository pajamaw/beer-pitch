app.factory('User', User)

function User($resource){

  var User = $resource('/api/user/:id:.format', {id: '@id'}, {
    get: {method: 'GET'},
    update: {method: 'PUT'},
    delete: {method: 'DELETE'}
  })
  return User;
}
