app.factory('User', User);

function User($resource){
  
  var User = $resource('/api/users/:id/', {id: '@id'}, {
    update: {method: 'PUT'}, 
    query: {method: 'GET'}, 
    delete: {method: 'DELETE'}
  });
  return User;
}
