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
module.exports.Movie = Movie;