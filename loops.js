
//1.
for(var i = 0; i < 15; i++ ){
    if(i % 2 === 0){
        console.log("Even number " + i)
    }
    else{
        console.log("Odd number " + i)
    }
};

//2.
var sumArray = [];
var result= 0;
for (var i=0; i < 1000; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        sumArray[sumArray.length] = i;
        result = result + i;
    }
}
console.log("Resenje je " + result);
console.log(sumArray); 

//3.
var arrayGiven =[1,2,3,4,5];
var sumAr = 0;
var productAr = 1;
if (arrayGiven.length > 0){
    for( var i = 0; i < arrayGiven.length; i++ ){
        sumAr = sumAr + arrayGiven[i];
        productAr = productAr * arrayGiven[i];
    }
    console.log(sumAr, productAr);
}
else{
    console.log("Niz je prazan!");
};


//4.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var result ="";
for( var i = 0; i < x.length; i++){
    result = result + " " + x[i];
} console.log(result);

//5.
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];
for( var i = 0; i < a.length; i++){
    for(var j = 0; j < a[i].length; j++){
        console.log( a[i][j] );
    }
};

//6.
var sumSquares = 0;
for( var i = 1; i < 21; i++){
   sumSquares += i * i;
}
console.log(sumSquares);

//7.
var averageArray =[80, 77, 88, 95, 68];
var suma = 0;
var average = 0;
for( var i = 0; i < averageArray.length; i++){
    suma += averageArray[i];
}
average = suma / averageArray.length;
if(average < 60){
    console.log("F");
};
if((average > 60) && (average < 70)){
    console.log("D");
};
if((average > 70) && (average < 80)){
    console.log("C");
};
if((average > 80) && (average < 90)){
    console.log("B");
};
if((average > 90) && (average < 100)){
    console.log("A");
};

//8.
for( var i = 1; i < 101; i++ ){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log( i + " je FizzBuzz");
    }
    else if( i % 3 === 0){
        console.log(i + " je Fizz");
    }
    else if( i % 5 === 0){
        console.log( i + " je Buzz");
    }
};
