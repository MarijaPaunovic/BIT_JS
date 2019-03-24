(function () {
    "use strict"

    class Genre {
        constructor(name) {

            this.name = name;
        }

        getData() {
            return `${this.name.charAt(0).toUpperCase()}${this.name[this.name.length - 1].toUpperCase()}`;
        };

    };

    class Movie {

        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;

        }
        getData() {
            return `${this.title} ${this.length} min ${this.genre.getData()}`;
        };
    };


    class Program {

        constructor(date) {
            this.date = new Date(date).toLocaleDateString();
            this.movieList = [];
            this.totalNumOfMovies = 0;

        };
        addMovie(movie) {
            this.movieList.push(movie);
            this.totalNumOfMovies++;
        };

        getData() {
            let movieLength = 0;
            let formatedStr = "";

            for (var i = 0; i < this.movieList.length; i++) {
                movieLength += this.movieList[i].length;
                formatedStr += this.movieList[i].getData() + "\n"

            };

            return `${this.date} program duration ${movieLength}  \n ${formatedStr}`;
        }
    }


    class Festival {

        constructor(name) {
            this.name = name;
            this.programList = [];

        };
        addProgram(program) {
            this.programList.push(program);

        };
        getData() {

            let sentence = 0;
            let sentenceTwo = "";
            for (var i = 0; i < this.programList.length; i++) {
                sentence += this.programList[i].totalNumOfMovies;
                sentenceTwo += this.programList[i].getData() + "\n";

            };
            console.log(`${this.name} has ${sentence} movie titles \n ${sentenceTwo}`)
        }

    }



    const action = new Genre("action");
    const drama = new Genre("drama");
    const adventure = new Genre("adventure")
    const comedy = new Genre("comedy");


    function createMovie(title, length, genre) {
        return new Movie(title, length, genre)
    }

    const firstMovie = new Movie("The Shawshank Redemption", 130, action);
    const secondMovie = new Movie("War for the Planet of the Apes", 140, drama);
    const thirdMovie = new Movie("Spider-Man: Homecoming", 133, adventure);
    const fourthMovie = new Movie("Deadpool", 108, comedy);

    function createProgram(date) {
        return new Program(date)
    }
    const firstProgram = new Program("08.10.2018");
    const secondProgram = new createProgram("11.12.2020");

    const fest = new Festival("Weekend");

    firstProgram.addMovie(firstMovie);
    firstProgram.addMovie(secondMovie);
    secondProgram.addMovie(thirdMovie);
    secondProgram.addMovie(fourthMovie);

    fest.addProgram(firstProgram);
    fest.addProgram(secondProgram);

    console.log(`${fest.getData()}`);

})()