//0.
var result = 0;
var i = 0;
while (i <= 10) {
    result = i * i
    console.log(result);
    i++;
};

//1.

var i = 0;
while (i <= 15) {
    if (i % 2 === 0) {
        console.log(i + " -even");
    } else {
        console.log(i + " -odd");
    } i++;
};

//2.
var a = 0;
sum = 0;
while (a < 1000) {
    if (a % 3 === 0 && a % 5 === 0) {
        sum = sum + a;
    } a++;
} console.log(sum);

//3.
var begin = 1;
var sum2 = 0;
var prod = 1;
while (begin <= 100) {
    sum2 = sum2 + begin;
    prod = prod * begin;
    begin++;
} console.log("Sum is " + sum2);
console.log("Product is " + prod);
//4.
var i = 0;
var print = " ";
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
while (i < x.length) {
    print = print + " " + x[i];
    i++;
}; console.log(print);

//5.
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var i = 0;
var j = 0;
while (i < a.length) {
    while (j < a[i].length) {
        console.log(a[i][j]);
        j++;
    } j = 0;
    i++;
};
// 6.
var number = 0;
var sum = 0;
while (number <= 20) {

    sum = sum + (number * number);
    number++;
}; console.log(sum);
//7.
var grades = [80, 77, 88, 95, 68];
var average = 0;
var i = 0;
var mark;
while (i < grades.length) {
    average = grades[i] + average;
    i++;
} mark = average / grades.length;
console.log(mark);
if (mark < 60) {
    console.log("Grade is F");
} else if (60 <= mark && mark < 70) {
    console.log("Grade is D");
} else if (70 <= mark && mark < 80) {
    console.log("Grade is C");
} else if (80 <= mark && mark < 90) {
    console.log("Grade is B");
} else if (90 <= mark && mark < 100) {
    console.log("Grade is A");
};
//8.
var nuts = 0;
var i = 1;
while (i < 100) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0) {
        console.log("Fizz");
    } else if (i % 3 === 0) {
        console.log("Buzz");
    }
    else console.log(i);
    i++;
}
