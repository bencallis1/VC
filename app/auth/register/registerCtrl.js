var app = angular.module('VolunteerApp');
app.controller('registerCtrl', function ($scope, authService, $location, $rootScope) {


  $scope.register = function () {
    $scope.user = 
      {
        users: [],
        messages: []
      };
    return authService.register($scope.user, function(user){
      $scope.$apply(function(){
        $location.path('/opportunities');
      });
    });
  };
});