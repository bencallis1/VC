var app = angular.module('VolunteerApp');

app.service('firebaseService', function ($firebase) {
  var firebaseUrl = 'https://volunteer-connection.firebaseapp.com/';

  this.getUser = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
  };

  this.addUser = function(userId) {
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId )).$asObject();
  };

  this.editUser = function(userId) {
    return $firebase(new Firebase(firebaseUrl  + usersID)).$asObject();
  };


});