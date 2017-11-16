'use strict';

app.controller("WishlistCtrl", function($rootScope, $scope, MovieService){
  
  MovieService.getWishlistMovies($rootScope.uid).then((results) =>{
    $scope.movies = results;
  }).catch((err) =>{
    console.log("error in getRatedMovies", err);
  });
});