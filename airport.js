(function () {
    "use strict";

    console.log('Hi')

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getPersonData = function () {
            return this.name + " " + this.surname;
        }

    }

    function Seat(number, category) {
        this.number = (number == undefined) ? Math.round((90 * Math.random() + 10)) : number;
        this.category = (category == undefined) ? 'e' : category;

        this.getSeatData = function () {
            return this.number + ", " + this.category;
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getPassengerData = function () {
            return this.seat.getSeatData().toUpperCase() + " " + this.person.getPersonData();
        }
    }

    function Flight(date, relation) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];

        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }

        this.getFlightData = function () {
            var data = this.date.getDate() + ". " + this.date.getMonth() + ". " + this.date.getFullYear() + " " + this.relation + "\n\t";
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                data += this.listOfPassengers[i].getPassengerData() + "\n\t";
            }

            return data;
        }
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }

        this.getData = function () {
            var data = ''
            var totalPassengers = 0;
            for (var i = 0; i < this.listOfFlights.length; i++) {
                totalPassengers += this.listOfFlights[i].listOfPassengers.length;
                data += this.listOfFlights[i].getFlightData() + "\n"
            }
            return "Airport: " + this.name + ", total passengers: " + totalPassengers + "\n" + data;
        }
    }

    function createFlight(date, relation) {
        return new Flight(date, relation);
    }

    function createPassenger(name, surname, seatNumber, category) {
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, category)

        return new Passenger(person, seat);
    }

    var pass1 = createPassenger("John", "Snow", 1, "b");
    var pass2 = createPassenger("Cercei", "Lannister", 2, "b");
    var pass3 = createPassenger("Daenerys", "Targaryen", 14);
    var pass4 = createPassenger("Tyrion", "Lannister");

    var date1 = new Date("Oct 25 2017");
    var date2 = new Date("Nov 11 2017");
    var flightOne = createFlight(date1, "Belgrade - New York");
    var flightTwo = createFlight(date2, "Barcelona - Belgrade");

    flightOne.addPassenger(pass1);
    flightOne.addPassenger(pass2);
    flightTwo.addPassenger(pass3);
    flightTwo.addPassenger(pass4);

    var airport = new Airport();
    airport.addFlight(flightOne);
    airport.addFlight(flightTwo);

    console.log(airport.getData());
})();


