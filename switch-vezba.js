/*  Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”. */

switch (prompt('Text representation of a day in a week')) {
    case "1":
    console.log('Monday');
    break;

    case '2':
    console.log('Tuesday');
    break;

    case '3':
    console.log('Wednesday');
    break;

    case '4':
    console.log('Thursday');
    break;

    case '5':
    console.log('Friday');
    break;

    case '6':
    console.log('Saturday');
    break;

    default:
    console.log('Sunday');
}

/* Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */

switch (prompt('Text representation of a day in a week')) {
    case "1":
    console.log('Monday');
    break;

    case '2':
    console.log('Tuesday');
    break;

    case '3':
    console.log('Wednesday');
    break;

    case '4':
    console.log('Thursday');
    break;

    case '5':
    console.log('Friday');
    break;

    case '6':
    console.log('Saturday');
    break;

    case '7':
    console.log('Sunday');
    break;

    default:
    console.log('Input must be a number between 1 and 7');
}

/* Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */

switch (prompt('Text representation of a day in a week')) {
    case "1":
    console.log('It’s weekday');
    break;

    case '2':
    console.log('It’s weekday');
    break;

    case '3':
    console.log('It’s weekday');
    break;

    case '4':
    console.log('It’s weekday');
    break;

    case '5':
    console.log('It’s weekday');
    break;

    case '6':
    console.log('It’s weekend');
    break;

    case '7':
    console.log('It’s weekend');
    break;

    default:
    console.log('Input must be a number between 1 and 7');
}

/* Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

switch (prompt('Month in a year')) {
    case "1":
    console.log('January');
    break;

    case '2':
    console.log('February');
    break;

    case '3':
    console.log('March');
    break;

    case '4':
    console.log('April');
    break;

    case '5':
    console.log('May');
    break;

    case '6':
    console.log('June');
    break;

    case '7':
    console.log('July');
    break;

    case '8':
    console.log('August');
    break;

    case '9':
    console.log('Septembar');
    break;

    case '10':
    console.log('October');
    break;

    case '11':
    console.log('November');
    break;

    case '12':
    console.log('December');
    break;

    default:
    console.log('Input must be a number between 1 and 12');
}

/* Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. 
All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. */


switch (prompt('Month in a year')) {
    case "1":
    console.log('Winter');
    break;

    case '2':
    console.log('Winter');
    break;

    case '3':
    console.log('Winter');
    break;

    case '4':
    console.log('Spring');
    break;

    case '5':
    console.log('Spring');
    break;

    case '6':
    console.log('Spring');
    break;

    case '7':
    console.log('Summer');
    break;

    case '8':
    console.log('Summer');
    break;

    case '9':
    console.log('Summer');
    break;

    case '10':
    console.log('Autumn');
    break;

    case '11':
    console.log('Autumn');
    break;

    case '12':
    console.log('Autumn');
    break;

    default:
    console.log('Input must be a number between 1 and 12');
}

/* Write a program that for a string input of a grade from “A”-“F” outputs a 
proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", 
C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade". */

switch (prompt('Grade')) {
    case "A":
    console.log("Good job");
    break;

    case 'B':
    console.log('Pretty good');
    break;

    case 'C':
    console.log('Passed');
    break;

    case 'D':
    console.log('Not so good');
    break;

    case 'F':
    console.log('Failed');
    break;

    default:
    console.log('Unknown grade');
}