var app = angular.module('VolunteerApp', ['ngRoute', 'firebase', 'mm.foundation.offcanvas' ]);

app.config(function($routeProvider){
    $routeProvider
 
        .when('/opportunities', {
            templateUrl: 'app/templates/opportunities.html',
            controller: 'opportunitiesCtrl'
      })

      .when('/home', {
            templateUrl: 'app/templates/home.html',
            controller: 'homeCtrl'
      })
        .when('/login', {
            templateUrl: 'app/auth/login/login.html',
            controller: 'loginCtrl'
      })
        .when('/register', {
            templateUrl: 'app/auth/register/register.html',
            controller: 'loginCtrl'
      })
         .when('/users', {
            templateUrl: 'app/templates/users.html',
            controller:  'usersCtrl'

      }) 
         .when('/notifications', {
            templateUrl: 'app/templates/notifications.html',
            controller:  'notificationsCtrl'

      }) .when('/profile', {
            templateUrl: 'app/templates/profile.html',
            controller:  'profileCtrl'
      })
      .when('/post', {
            templateUrl: 'app/templates/post.html',
            controller:  'postCtrl'
      })
      .otherwise ({
            redirectTo: '/home'
            
        });
});

