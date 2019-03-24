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

module.exports.Festival = Festival;