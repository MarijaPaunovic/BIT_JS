(function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function() {
            return this.name + " " + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = number || parseInt(10 * Math.random() * 100);
        this.category = category || "e";
        this.getSeating = function(){
            return this.number + this.category.toUpperCase();
        }
    };

    function Passenger(person, seat) {
        this.person;
        this.seat;

        this.getPassenger = function () {
            return '' + this.seat.getSeating() + this.person.getData();
        }
    };
    
    function Flight (relation, date, listOfPassengers) {
        this.flightRelation = relation;
        this.flightDate = new Date(date);
        this.listOfPassengers = function(list){
            var list = [];
            for( var i =0 ; i < this.passenger.getPassenger().length; i++) {
                list.push(this.passenger.getPassenger()[i])
            }
            return list;
        }   
        
        this.addPassenger = function () {
            return this.person.getData() + this.listOfPassengers;
        }
        this.getData = function(){
            return this.flightDate + ", "+ this.flightRelation+ "\n"+ this.listOfPassengers;
        }
    };

    function Airport (name, listOfFlights) {
        this.airportName = 'Nikola Tesla';
        this.listOfFlights = listOfFlights;

        this.addFlight = function () {
           var flights= [];
           for( var i = 0; i< this.flightRelation.length; i++){
               flights.push(this.flightRelation[i])
           } return flights;
        }   
        
    }
    (function creatFlight(flightRelation, flightDate){
        this.flightRelation = this.flight.flightRelation;
        this.flightDate = this.flight.flightDate;
        var flight = this.flight.flightRelation + this.flight.flightDate;
        return flight;
    })();

    (function createPassanger(name,lastName, seatNum, category){
        var passenger;
        this.name = this.person.name;
        this.lastName = this.person.surname;
        this.seatNum = this.seat.number;
        this.category = this.seat.category;
        return this.person.name + this.person.surname + this.seat.number + this.seat.category;
    })

    // var firstSeat = new Seat(25, "b");
    // var firstPassenger = new Passenger("firstPerson","25b");
    // console.log(firstPassenger.getData());


    var firstPerson = new Person("Pera", "Peric");
    console.log(firstPerson.getData());

    var firstFlight = new Flight('Belgrade - New York', 'Oct 25 2017');
    var secondFlight = new Flight('Belgrade - Barcelona', 'Oct 26 2017');



})();