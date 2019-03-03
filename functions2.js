/*Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/
function isString(inputStr) {
    if (typeof inputStr === 'string') {
        return true;
    }
    return false;
}
console.log(isString("My random string"));

/* Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/
function isBlank(a) {
    if (a === " ") {
        return true;
    } return false;
}
console.log(isBlank(54));

/*Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/
function concatanateString(word, n) {
    var result = "";
    if (n > 1) {
        for (var i = 1; i <= n; i++) {
            result = result + word;
        }
        return result;
    }
    return word;
}
console.log(concatanateString(word, n));

/* Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
function letterOccurence(word, letter) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count += 1;
        }
    } return count;
}
console.log(letterOccurence("My random string", "n"));

/*Write a function to find the position of the first occurrence of a character in a string.
 The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
 */
function firstOccurence(word, character) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === character) {
            return i + 1;
        }
    } return -1;
}
console.log(firstOccurence("My random string", "e"));

/*6.
Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
*/
function lastOccurance(word, character) {
    for (var i = word.length - 1; i => 0; i--) {
        if (word[i] === character) {
            return i + 1;
        }
    } return -1;
}
console.log(lastOccurance("My random string", "g"));
/* 7.
Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
function convertString(sentence) {
    var stringArray = [];
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            stringArray[stringArray.length] = null;
        }
        else {
            stringArray[stringArray.length] = sentence[i];
        }
    }
    return stringArray;
}
console.log(convertString("My random string"));

/* 8.
Write a function that accepts a number as a parameter and checks if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return "The number is not prime";
        }

    }
    return "The number is prime";
}
console.log(isPrime(10));
/*9.
 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/
function replaceSpace(myString, separator) {
    var newString = "";
    for (var i = 0; i < myString.length; i++) {
        if (myString[i] === " ") {
            if (separator) {
                newString += separator;
            }
            else {
                newString += "-";
            }

        }
        else {
            newString += myString[i];
        }
    }
    return newString;
}
console.log(replaceSpace("My random string"));

/* 10. Write a function to get the first n characters and add “...” at the end of newly created string.
*/
function firstNCharacter(string, n) {
    var finalString = "";
    for (var i = 0; i < string.length; i++) {
        if (finalString.length === n) {
            finalString += "...";
            break;
        }
        else {
            finalString += string[i];
        }
    }
    return finalString;
}
console.log(firstNCharacter("Marija Prokic", 4));

/*11.
Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
function convertArrayOfString(array) {
    var finalArray = [];
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i])) {
            finalArray[finalArray.length] = parseFloat(array[i]);
        }
    }
    return finalArray;
}
console.log(convertArrayOfString(["1", "21", undefined, "42", "1e+3", Infinity]));
/*12.
 Write a function to calculate how many years there are left until retirement based on the year of birth.
  Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
*/
function retirement(yearOfBirth, gender) {
    var yearRetirement = 2019 - yearOfBirth;
    if ((yearRetirement < 65) && (gender === "men")) {
        return "For men year to retirement: " + (65 - yearRetirement);
    }
    else if ((yearRetirement < 60) && (gender === "women")) {
        return "For women to  retirement: " + (60 - yearRetirement);
    }
    return "You are already in retirement";
}
console.log(retirement(1980, "men"));
/* 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th

Hint: num % 100 >= 11 && num % 100 <= 13
*/
