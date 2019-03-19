"use strict";

const $movieForm = document.querySelector('.movie-form');
const $movieTitle = document.getElementById("title");
const $movieLength = document.getElementById("length");
const $movieGenre = document.querySelector(".genre");
const $moviesList = document.querySelector(".movies-list");


class Genre {
    constructor(genre){
        this.genre = genre;
    }
    getData() {
        return `${this.genre[0].toUpperCase()}, ${this.genre[this.genre.length - 1].toUpperCase()}`;
    }
}
class Movie {
    constructor(title, length, genre){
        this.title = title;
        this.length = length;
        this.genre = genre;
    }
    getData() {
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
    }
}

function createMovie(title, length, genre) {
    const newGenre = new Genre(genre);
    return new Movie(title, length, newGenre);
}

function renderMovies(movies) {
    $moviesList.textContent = '';
    for (let i = 0; i < movies.length; i++) {
        let p = document.createElement('p');
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