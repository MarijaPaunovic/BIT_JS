/* Write a for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even, 
and display a message to the screen. */

for (var a = 0; a <= 15; a++) {
    if (a % 2 === 0) {
    console.log('even', a);
} else {
    console.log('odd');
}
}

// Write a program to sum the multiples of 3 and 5 under 1000.

for (var a = 0; a <= 1000; a++) {
    if ((a % 3 === 0) && (a % 5 === 0)) {
        console.log(a)
    }
}

// Write a program to compute the sum and product of an array of integers.

var a = [2, 4, 5, 6];
var resultSum = 0;
var resultProduct = 1;

for (var i = 0; i < a.length; i++) {
    resultSum = resultSum + a[i];
    resultProduct = a[i] * resultProduct;
}

console.log(resultSum)
console.log(resultProduct)


// Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var result = '';

for (var i = 0; i < x.length; i++) {
    result = result + x[i];
  //  console.log(typeof result)
}

console.log (result)

// Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];    // a[0][0]
var result = 0;

for (var i = 0; i <= 2; i++) {
    for (var j = 0; j < 4; j++) {
      console.log(a[i][j]);
      result = a[i][j] + result;
      console.log(result, 'i=', i, 'j=', j)
    }
}
console.log(result + ' krajnji')

// Write a program that outputs the sum of squares of the first 20 numbers. 

var a;
var result = 0;

for (var i = 0; i < 20; i++) {
    a = i * i;
    console.log(a + '    ' + i)
    result = a + result;
}
 console.log(result)

// Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 

var a = [80, 77, 88, 95, 68];
var average = 0;
var averageMark;

for (var i = 0; i <= 4; i++) {
    average = a[i] + average;
}
averageMark = average / 5;

console.log(averageMark)

if (averageMark < 60) {
    console.log('F');
} else if (averageMark < 70) {
    console.log('D');
} else if (averageMark < 80){
    console.log('C');
} else if (averageMark < 90) {
    console.log('B');
} else if (averageMark < 100) {
    console.log ('A');
}

/* Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

for (var a = 1; a <= 100; a++) {
    console.log (a);
    if (a % 3 === 0)  {
        console.log('Fizz ' + a);
    }
    if ((a % 5 === 0) && !(a % 3 === 0)) {
        console.log('Buzz ' + a);
    }
    if ((a % 5 === 0) && (a % 3 === 0)) {
        console.log('FizzBuzz ' + a);
    }
}

