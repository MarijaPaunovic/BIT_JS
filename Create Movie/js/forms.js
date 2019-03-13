"use strict";

var $movieForm = document.querySelector('.movie-form');
var $movieTitle = document.getElementById("title");
var $movieLength = document.getElementById("length");
var $movieGenre = document.querySelector(".genre");
var $moviesList = document.querySelector(".movies-list");


function createMovie(title, length, genre) {
    var newGenre = new Genre(genre);
    return new Movie(title, length, newGenre);
}

function Genre(genre) {
    this.name = genre;

    this.getData = function () {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    }
}



function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;

    this.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}


function renderMovies(movies) {
    $moviesList.textContent = '';
    for (var i = 0; i < movies.length; i++) {
        var p = document.createElement('p');
        p.textContent = movies[i].getData() + "\n";
        $moviesList.appendChild(p);
    }
}

function resetMovieForm() {
    $movieTitle.value = "";
    $movieLength.value = "";
    $movieGenre.value = "-";

    $movieTitle.style.borderColor = "inherit";
}

function getMovieData() {
    if ($movieTitle.value !== "" && $movieLength !== "") {
        return {
            title: $movieTitle.value,
            length: $movieLength.value,
            genre: $movieGenre.value
        }
    }
}