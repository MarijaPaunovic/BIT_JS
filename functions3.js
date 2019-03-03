/*1.
Write a program to insert a string within a string at a particular position(default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/
function stringWithinStringPosition(sentence, word, position) {
    var finalString = "";
    if (!position) {
        finalString += word + " ";
    }
    for (var i = 0; i < sentence.length; i++) {
        if (position === i) {
            finalString += word;
            finalString += sentence[i];
        }
        else {
            finalString += sentence[i];
        }
    }
    return finalString;
}
console.log(stringWithinStringPosition("My random string", "JS "));

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
Write a function that reverses a number. The result must be a number. */

function reverseNumber(number) {
    var result = '';
    var stringOfNumber = '' + number;
    for (var i = 0; i < stringOfNumber.length; i++) {
        result = stringOfNumber[i] + result;
    }
    return parseInt(result);
}
console.log(reverseNumber(12345));

/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */

function lastElementOfArray(array, n) {
    var result = [];
    if (n > 0) {
        var j = n - 1;
        for (var i = array.length - 1; i => 0; i--) {
            result[j] = array[i];
            j--;
            if (j === -1) {
                return result;
            }
        }
    }
    else {
        result = array[array.length - 1];
    }
    return result;
}
console.log(lastElementOfArray([7, 9, 0, -2], 3));
