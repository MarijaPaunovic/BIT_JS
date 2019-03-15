//example 1 
function add(a){

   //closure
   return function(b){
       return a+b;
   }
}

console.log(add(8)(13));


//example 2 - in callbacks
function selection(array, filter){
   var filteredArray = [];

   for(var i = 0; i < array.length; i++){
       if(filter(array[i])){
           filteredArray.push(array[i]);
       }
   }

   return filteredArray;
}

function lessThanFilter(number){
  
   //closure
   return function(x){
       return x < number;
   }
}

var a = [2, 1, 6, 44, 9, 12, 6, 1];
var n = 13;

var filteredArray = selection (a, lessThanFilter(n));

console.log(filteredArray);


//example 3 - private properties of the objects
function Person(personName){
   var name;

   name = personName;

   this.getName = function(){
       return name;
   }
  
   this.changeName = function(newName){
       name = newName;
   }
}

var pera = new Person('Pera');
//property name is private - it cannot be accessed
//console.log(pera.name);
console.log(pera.getName());
pera.changeName('Perica');
console.log(pera.getName());


