'use strict';

app.controller("NavCtrl", function($location, $rootScope, $scope, $window, AuthService){
  $scope.logoutUser = () => {
    $window.localStorage.clear();
    AuthService.logout();
    $location.path('/auth');
  };
});