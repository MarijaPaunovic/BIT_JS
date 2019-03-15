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