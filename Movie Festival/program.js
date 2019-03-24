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
module.exports.Program = Program;