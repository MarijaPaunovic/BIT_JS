/*1.Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/
function convertStrings(arrayStr) {
    var result = [];
    for (var i = 0; i < arrayStr.length; i++) {
        if (isFinite(arrayStr[i])) {
            result[result.length] = parseFloat(arrayStr[i]);
        }
    } return result;
} console.log(convertStrings(["1", "21", undefined, "42", "1e+3", Infinity]));

/* 2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/
function joinElements(arrayString) {
    var finalString = "";
    for (var i = 0; i < arrayString.length; i++) {
        if (isFinite(arrayString[i]) && arrayString[i] != null && arrayString[i] != undefined) {
            finalString += arrayString[i];
        }
    }
    return finalString;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*3.Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/
function noFalsy(arrayInput) {
    var newArray = [];
    for (var i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i]) {
            newArray[newArray.length] = arrayInput[i];
        }
    }
    return newArray;
}
console.log(noFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/*4.
Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/

function numberOfInteger(numArray) {
    var countIntegers = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (parseInt(numArray[i]) === numArray[i]) {
            countIntegers += 1;
        }
    }
    return countIntegers;
}
console.log(numberOfInteger([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/*5.
Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/
function numberOfFloat(numArray) {
    var countFloat = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (parseFloat(numArray[i]) === numArray[i] && parseInt(numArray[i]) !== numArray[i]) {
            countFloat += 1;
        }
    }
    return countFloat;
}
console.log(numberOfFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));