'use strict';

app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthService){
  $scope.authenticate = () => {
    AuthService.authenticateGoogle().then((result) =>{
      $scope.$apply(() =>{
        $location.path("/search");
      });
    }).catch((err) =>{
      console.log("error in authenticateGoogle", err);
    });
  };
});