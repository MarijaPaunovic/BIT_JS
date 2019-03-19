"use strict";

const $createMovie = document.querySelector('.movie-form #button');
$createMovie.addEventListener('click', onCreateMovie);

const movies = [];

function onCreateMovie(event) {
    event.preventDefault();
    if (!$movieTitle.value || !$movieLength.value){
        return alert('ERROR! The field is empty');
    }

    let movieData = getMovieData();
    let newMovie = createMovie(movieData.title, movieData.length, movieData.genre);
    movies.push(newMovie);

    renderMovies(movies);
    resetMovieForm();
};


