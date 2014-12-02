angular.module('VolunteerApp').controller('loginCtrl',function ($scope, authService, $location, $rootScope){
$scope.login = function () {
    return authService.login($scope.user, function(user){
      $scope.$apply(function(){
        $location.path('/opportunities');
      });
    });
  };
});