"use strict";

var $movieForm = document.querySelector('.movie-form');
var $movieTitle = document.getElementById("title");
var $movieLength = document.getElementById("length");
var $movieGenre = document.querySelector(".genre");
var $moviesList = document.querySelector(".movies-list");

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