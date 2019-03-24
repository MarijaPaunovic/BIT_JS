(function () {
    'use strict'
        console.log('Hi');

    function Genre(name) {
        this.name = name;
        this.getDataGenre = function (name) {
            var nameId = (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
            return nameId;
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getDataMove = function (title, length) {
            return this.title + ", " + this.length + "min" + ", " + this.genre.getDataGenre();
        }
    }

    function Program(date, totalNumOfMovie) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumOfMovie = totalNumOfMovie;
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
        }
        this.addData = function () {
            
        }
    }

    function Festival(festivalName, numberOfMoviesAllPrograms) {
        this.festivalName = festivalName;
        this.listOfPrograms = [];
        this.numberOfMoviesAllPrograms = numberOfMoviesAllPrograms;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
    }


    var action = new Genre("Action");
    var drama = new Genre("Drama");
    var comedy = new Genre("Comedy");
    var shawshank = new Movie("The Shawshank Redemption", action, 130);

    var foreignProgram = new Program('12.04.2019.', 20); // kod datuma sa tackom: prvo ide mesec pa dan pa godina
    var domesticProgram = new Program('03.06.2019.', 10);
    domesticProgram.addMovie(shawshank);
    foreignProgram.addMovie(shawshank);
    //console.log(foreignProgram.listOfMovies.length);
    var belgradeFestival = new Festival('Belgrade Festival', 14);
    belgradeFestival.addProgram(foreignProgram);
    belgradeFestival.addProgram(domesticProgram);
    console.log(belgradeFestival.listOfPrograms);

    //console.log(shawshank.getDataMove());
    //console.log(action.getDataGenre());


}
)();
