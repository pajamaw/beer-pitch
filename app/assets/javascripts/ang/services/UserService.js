app.factory('User', User);

function User($resource){

  var User = $resource('/api/user/:id', {id: 'id'}, {
    get: {method: 'GET'},
    update: {method: 'PUT'},
    delete: {method: 'DELETE'}
  });
  return User;
}
