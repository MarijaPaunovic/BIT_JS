function maxNumber(a, b) {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }

}

maxNumber(2, 5);
// 2
function odd(x) {
    if (x % 2 === 0) {
        console.log("The number is not odd")
    } else {
        console.log("The number is odd")
    }
}
odd(5);
// 3
function threeDigitNum(a) {
    if ((a < 100) || (a > 999)) {
        console.log('It`s not three digit');
    } else {
        console.log('Its a three digit');
    }
}

threeDigitNum(1544)

// 4
function arithmeticMean(a, b, c, d) {
    var sum = a + b + c + d;
    var result = sum / 4;
    console.log(result);
}
arithmeticMean(5, 3, 14, 6);

// 7

function numOfDigit(x) {
    var a = '' + x;
    var sum = a.length;
    console.log(sum);
}

numOfDigit(14896)

// 8
function numberOfApp(a, e) {

    var x = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            x = x + 1;
        }

    } return x;
}
console.log(numberOfApp([2, 4, 7, 8, 7, 7, 1], 7))


// 9

function sumOfOdd(a) {
    var oddNumber = 0;
    for (var i = 0; i < a.length; i++) {
        if (!(a[i] % 2 === 0)) {
            //   console.log(a[i]);
            oddNumber = oddNumber + a[i];
        }

    } return oddNumber;

}


console.log(sumOfOdd([3, 5, 8, 43, 4, 10]))


