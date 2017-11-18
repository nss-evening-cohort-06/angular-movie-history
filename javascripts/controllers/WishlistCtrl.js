'use strict';

app.controller("WishlistCtrl", function($rootScope, $scope, MovieService){
  
  const getMovies = () => {
    MovieService.getWishlistMovies($rootScope.uid).then((results) =>{
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


  $scope.switchWatched = (movie) => {
    movie.isWatched = true;
    console.log("movie", movie);
    MovieService.updateMovie(movie, movie.id).then((result) =>{
      console.log("result", result);
    }).catch((err) =>{
      console.log("error in updateMovie", err);
    });
  };
});