// 2. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321
function number(num) {
    // var num;
    var result = num.toString().split('').reverse().join('');

    return parseInt(result);


}
console.log(number(12345));

// 3. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

function alpha(a) {

    return a.toLowerCase().split('').sort().join('');
}
console.log(alpha('Webmaster'));

// 4. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"



function alpha(text) {
    var words = text.split(" ");
    var transformedWords = [];

    for (var i = 0; i < words.length; i++) {
        var sortedWord = words[i].split('').sort().join('');
        transformedWords.push(sortedWord);
    }

    return transformedWords.join(' ');
}
console.log(alpha('Republic Of Serbia'));


// 5. Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> ['John', 'Snow']

function splitString(name) {
    var result = name.split(" ");
    return result;
}
console.log(splitString('John Snow'))

// 6. Write a function to convert a string to its abbreviated form. 

// "John Snow" -> 	"John S."

function convertString(name) {
    var result = name.slice(0, 6).concat('.');
    return result;
}
console.log(convertString("John Snow"));

//7///Write a function that can pad (left, right) a string to get to a determined length.
// '0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000

function padFunction() {


}

///8///
// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

function capitalizeLetters(word) {
    var a = word.slice(1);

    var sliceWord = word.slice(0, 1);
    var result = sliceWord.toUpperCase();

    var final = result.concat(a);

    return final;
}
console.log(capitalizeLetters("js string exercises"));

// 9.  Write a function to hide email addresses to protect them from unauthorized users.
//	"somerandomaddress@example.com" -> "somerand...@example.com"

function hideEmail (email){
    
    var b = email.split('');
    b.splice(8, 9, '...');
    return b.join('');
}
console.log(hideEmail("somerandomaddress@example.com"))

// 10.Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function swapsCharacter (input) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
    
    for (var i = 0; i < input.length; i++){

        if (UPPER.indexOf(input[i]) !== -1){
            result += input[i].toLowerCase();
         } else {
           result += input[i].toUpperCase();
         }
    }
    return result;
}
console.log(swapsCharacter("The Quick Brown Fox"));

