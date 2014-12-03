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


// our controller for the form
// =============================================================================
app.controller('registerCtrl', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
    
});