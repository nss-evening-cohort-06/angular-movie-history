'use strict';

app.controller("RatedCtrl", function($rootScope, $scope, MovieService){
  $scope.movies = [];

 const getMovies = () => {
  MovieService.getRatedMovies($rootScope.uid).then((results) =>{
    $scope.movies = results;
  }).catch((err) =>{
    console.log("error in getRatedMovies", err);
  });
 };

 getMovies();

  $scope.deleteMovie = (movieId) => {
    MovieService.deleteMovie(movieId).then((result) =>{
      getMovies();
    }).catch((err) =>{
      console.log("error in deleteMovie", err);
    });
  };
});