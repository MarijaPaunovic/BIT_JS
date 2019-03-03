/* Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/
var stringInput = "My random string";
function checkIfString(writeString) {
    if (typeof writeString === "string") {
        return true
    } else {
        return false
    }
} console.log(checkIfString(stringInput));
/* 2. Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/
var stringInput = " ";
function checkIfString(writeString) {
    if (writeString === " ") {
        return true
    } else {
        return false
    }
} console.log(checkIfString(stringInput));
/* 3. Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/
var string = "Ha";
function concatString(inputString, inputNumber) {
    var concTotal = ''
    for (var i = 1; i <= inputNumber; i++) {
        concTotal += string;
    }
    return console.log(concTotal);
}
concatString(string, 5)
/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
var string = "My random string m";
function countNummberOfLetter(inputString, inputNumber) {
    var a = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === inputNumber) {
            a = a + 1;
        }
    } return a
}
console.log(countNummberOfLetter(string, "m"));
/* 5. Write a function to find the position of the first occurrence of a character
 in a string. The result should be in human numeration form. If there are no occurrences
  of the character, the function should return -1.
*/
var string = "My random string m";
function countNummberOfLetter(inputString, inputLetter) {
    var a = 0;
    newArray = [];
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === inputLetter) {
            var a = i;
            break
        } else {
            return -1;
        }
    } return a
}
console.log(countNummberOfLetter(string, "m"));
/* 6. Write a function to find the position of the last occurrence of a character
 in a string. The result should be in human numeration form. If there are no 
 occurrences of the character, function should return -1.
 */
var string = "My rangdom string mg";
function countNummberOfLetter(inputString, inputLetter) {
    var a = 0;
    newArray = [];
    for (var i = inputString.length - 1; i < inputString.length; i--) {
        if (inputString[i] === inputLetter) {
            var a = i;
            break
        } else {
            return -1;
        }
    } return a
}
console.log(countNummberOfLetter(string, "l"));
/* 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
var myString = "My random string";
function convertStringToArray(inputString) {
    newArrayLetters = [];
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ') {
            newArrayLetters[newArrayLetters.length] = null;
        } else {
            newArrayLetters[newArrayLetters.length] = inputString[i]
        }

    }
    return newArrayLetters;
};
console.log(convertStringToArray(myString));
/*8 Write a function that accepts a number as a parameter and checks if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
