"use strict";

var $movieTitle = document.querySelector('.movie-form .title');
var $movieLength = document.querySelector('.movie-form .length');
var $movieGenre = document.querySelector('.movie-form .genre');

var $movieForm = document.querySelector('.movie-form');
var $createMovie = document.querySelector('.movie-form button');

var movies = [];
$movieTitle.value = "";
$movieLength.value = "";

$createMovie.addEventListener('click', onCreateMovie);

function onCreateMovie(event) {
    event.preventDefault();

     var newMovie = createMovie(
        $movieTitle.value,
        $movieLength.value,
        $movieGenre.value,
    );
    
    
    movies.push(newMovie);

    renderMovies(movies);
};

function createMovie(title, length, genre) {
    var newGenre = new Genre(genre);
    return new Movie(title, length, newGenre)
};


function Genre(genre) {
    this.name = genre;

    this.getData = function () {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    }
};

function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;

    this.getData = function () {
        return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
    }
};

function renderMovies(movies) {
    for (var i = 0; i < movies.length; i++) {
        var p = document.createElement('p');
        p.textContent = movies[i].getData();

        $movieForm.appendChild(p);
    
    }
};


