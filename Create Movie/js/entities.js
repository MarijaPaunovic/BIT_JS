"use strict";

var $createMovie = document.querySelector('.movie-form #button');
$createMovie.addEventListener('click', onCreateMovie);

var movies = [];

function onCreateMovie(event) {
    event.preventDefault();
    if (!$movieTitle.value || !$movieLength.value){
        return alert('ERROR! The field is empty');
    }

    var movieData = getMovieData();
    var newMovie = createMovie(movieData.title, movieData.length, movieData.genre);
    movies.push(newMovie);

    renderMovies(movies);
    resetMovieForm();
};


