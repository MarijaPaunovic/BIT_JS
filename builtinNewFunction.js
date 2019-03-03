/* 1 .Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/
// Nemanja
var input = ["1", "21", undefined, "42", "1e+3", Infinity]

function arrNum(a) {
    var arr = []
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === "string") {
            arr[arr.length] = parseFloat(a[i])
        } else {
            continue
        }
    } return arr
}
var res = arrNum(input)
console.log(res)
/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/
var input = [NaN, 0, 15, false, -22, '', undefined, 47, null]

function numArr(a) {
    var arr = ""
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== undefined && a[i] !== null && a[i] !== Infinity && !isNaN(a[i])) {
            arr += a[i]
        }
    } return arr
}
var res = numArr(input)
console.log(res)

/* 3.  Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
 */

var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null]

function falsyArr(a) {
    var arr3 = [];
    for (var i = 0; i < a.length; i++) {
        var truthyElement = a[i]


        if (truthyElement) {
            arr3[arr3.length] = truthyElement;
        }
    }

    return arr3
}

var result = falsyArr(arr);
console.log(result)
/* 4. Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/
var arr = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
function integerValue(b) {
    var arr4 = 0;
    for (var i = 0; i < b.length; i++) {
        var truthyElement = b[i];
        if (Number.isInteger(b[i])) {
            arr4 = arr4 + 1;
        }
    } return arr4
} var result = integerValue(arr);
console.log(result);
/* 5. Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/
var arr = [NaN, 23.1, 15, false, -22.5, '', "4.1", 7, null];
function countFloatValues(inputArr) {
    var outputArr = [];
    var floatCount;
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 1 !== 0 && !isNaN(inputArr[i])) {
            outputArr[outputArr.length] = inputArr[i];
            floatCount = outputArr.length;
        }
    }
    return floatCount
}

var result = countFloatValues(arr);
console.log(result);

