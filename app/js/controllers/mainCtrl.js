app.controller('mainCtrl', function ($scope, authService) {
   $scope.goToRegistration = function() {
    $location.path('/register');
  };

  $scope.goToLogin = function() {
    $location.path('/login');
  };
});