
function Genre(genre) {
    this.name = genre;

    this.getData = function () {
        var id = this.name[0].toUpperCase() + this.name[name.length - 1].toUpperCase();
        console.log(id);
        return id;
    }
};

var newGenre = new Genre('Drama');