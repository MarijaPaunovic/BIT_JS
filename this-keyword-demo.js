

function Coffee(type) {
    this.type = type + "_coffee"; // strong_coffee

    this.printCoffee = function () {
        console.log(type) // strong - constructor function parameter
        console.log(this.type) // strong_coffee - Coffee object property

        inner();

        console.log(this); // this is Coffee object

        var that = this; // that is Coffee object
        var thisObj = this; // thisObj is Coffee object

        function inner() {
            console.log(this); // window - Global object
            console.log(that); // that - Coffee object
            console.log(that.type); // strong_coffee - Coffee object property
        }
    }

    this.printCoffeeType = (function (that) {
        console.log(this); // window - Global object
        console.log(that.type);  // that - Coffee object
    })(this) // Pass this as argument to function call

}

var strong = new Coffee("strong");

strong.printCoffeeType;
strong.printCoffee();


