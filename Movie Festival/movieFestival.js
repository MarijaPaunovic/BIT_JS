    const {Genre} = require ("./genre");
    const {Movie} = require ("./movie");
    const {Program} = require("./program");
    const {Festival} = require("./festival");

   

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
