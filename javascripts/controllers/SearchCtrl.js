'use strict';

app.controller("SearchCtrl", function ($location, $rootScope, $scope, AuthService, MovieService, tmdbService) {
  $scope.movies = [];

  $scope.enterPush = (event) => {
    if (event.keyCode === 13) {
      tmdbService.searchMovies(event.target.value).then((results) => {
        $scope.movies = results.data.results;
      }).catch((err) => {
        console.log("error in searchMovies", err);
      });
    }
  };

  $scope.saveRated = (tmdbMovie) => {
    tmdbMovie.uid = AuthService.getCurrentUid();
    tmdbMovie.isWatched = true;
    tmdbMovie.rating = 0;
    let newMovie = MovieService.createMovieObject(tmdbMovie);
    MovieService.postNewMovie(newMovie).then(() =>{
      $location.path('/rated');
    }).catch((err) =>{
      console.log("error in postNewMovie", err);
    });
  };

  $scope.saveWishlist = (tmdbMovie) => {
    tmdbMovie.uid = AuthService.getCurrentUid();
    tmdbMovie.isWatched = false;
    tmdbMovie.rating = 0;
    let newMovie = MovieService.createMovieObject(tmdbMovie);
    MovieService.postNewMovie(newMovie).then(() =>{
      $location.path('/wishlist');
    }).catch((err) =>{
      console.log("error in postNewMovie", err);
    });
  };
});