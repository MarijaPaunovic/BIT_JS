/* 1.Write a program that calculates the maximum of two given numbers. 
*/
function sumNumbers(a, b) {
    var sum = 0;
    sum = a + b;
    return sum;
}
console.log(sumNumbers(2, 3));

/*2.Write a program that checks if a given number is odd.
*/
function oddNumber(x) {
    if (x % 2 !== 0) {
        return true;
        //console.log("Given number is odd " + x);
    }
    else {
        // console.log("Given number is even " + x);
        return false;
    }
}
oddNumber(4);

/* 3.Write a program that checks if a given number is a three digit long number.
*/
function threeDigits(n) {
    if (100 <= n && n < 1000) {
        console.log("True given number is three digits long.");
    }
    else {
        console.log("False  given number is three digits long.");
    }
}
threeDigits(552);

/*4.Write a program that calculates an arithmetic mean of four numbers.
*/
function aritmeticMean(a, b, c, d) {
    var sum = 0;
    var product;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];

    } product = sum / arguments.length;
    return product;
} console.log(aritmeticMean(1, 2, 3, 4, 0));

/*7.Write a program that calculates a number of digits of a given number.
*/
function numberOfDigits(m) {
    var stringNum = "" + m;
    var result = 0;
    for (var i = 0; i < stringNum.length; i++) {
        result += 1
    }
    return result;
}
console.log(numberOfDigits(12345));

/* 8.Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/
function numberAppirence(a, e) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (e === a[i]) {
            result = result + 1;
        }
    } return result;
};
console.log(numberAppirence([2, 4, 7, 8, 7, 7, 1], 7))

/*9.Write a program that calculates the sum of odd elements of a given array.
*/
function sumOdd(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        var numI = a[i];
        var checkNum = oddNumber(numI);
        if (checkNum === true) {
            sum = sum + a[i];
        }
    } return sum;
}
console.log(sumOdd([2, 4, 7, 8, 7, 7, 1]) + "Rezultat");

/*10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

function letterInString(word) {
    var a = "a";
    var A = "A";
    var letterCount = 0;
    for (var i = 0; i < word.length; i++) {
        if ((word[i] === a) || (word[i] === A)) {
            letterCount += 1;
        }
    }
    return letterCount;
}
*/
function letterInString(word, letter) {
    var letterCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}


var word = "MarinaA"
console.log(letterInString(word, "a"));
console.log(letterInString(word, "A"));


/* 11.Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
*/
function letterConcatenat(bla, n) {
    var sumBla = "";
    for (var i = 1; i <= n; i++) {
        sumBla += bla;
    }
    return sumBla;
}

console.log(letterConcatenat("abc", 4)); 
/*5.
Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****

*/
function squareSize(number){
    result= "";
    for(var i = 1; i <= number; i++){
        for( var j = 1; j <= number; j++){
            if (i === 1 || i === number){
                result +="*";
            }
            else {
                if(j === 1 || j === number){
                result +="*";
                }
                else{
                    result +=" ";
                }
            }
        }
        result += "\n";
    }return result;
}  console.log(squareSize(7));

/*6.
Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/
function loopChar(n){
    resultFunction ="";
    for(var i = 1; i <= n; i++){
        resultFunction += "*";
    }
    return resultFunction;
}
function horizontalRepresenting(n1,n2,n3){
    stringResult = "";
    stringResult += loopChar(n1) + "\n" + loopChar(n2) + "\n" + loopChar(n3); 
    return stringResult;
}console.log(horizontalRepresenting(5,3,7));