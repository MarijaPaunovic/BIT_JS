class Genre {
    constructor(name) {

        this.name = name;
    }

    getData() {
        return `${this.name.charAt(0).toUpperCase()}${this.name[this.name.length - 1].toUpperCase()}`;
    };

};

module.exports.Genre = Genre;