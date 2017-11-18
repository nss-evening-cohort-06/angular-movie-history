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
    let updatedMovie = MovieService.createMovieObject(movie);
    MovieService.updateMovie(updatedMovie, movie.id).then((result) =>{
      getMovies();
    }).catch((err) =>{
      console.log("error in updateMovie", err);
    });
  };
});