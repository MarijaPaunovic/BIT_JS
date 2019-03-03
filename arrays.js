var arrayMonths = [];
//arrayMonths[0]=["January"];
arrayMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(arrayMonths[10]);
console.log(arrayMonths.length);

//2.
var arrayWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(arrayWeek[6]);

//3.
var realNumbers = [2, -4, 5, -2, -11];
var negativeNumber = [];
if (realNumbers[0] < 0) {
    negativeNumber[negativeNumber.length] = realNumbers[0];
};
if (realNumbers[1] < 0) {
    negativeNumber[negativeNumber.length] = realNumbers[1];
};
if (realNumbers[2] < 0) {
    negativeNumber[negativeNumber.length] = realNumbers[2];
};
if (realNumbers[3] < 0) {
    negativeNumber[negativeNumber.length] = realNumbers[3];
};
if (realNumbers[4] < 0) {
    negativeNumber[negativeNumber.length] = realNumbers[4];
};
console.log(negativeNumber);

//4.
var array1 = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log("Number of array witch index are divisible by 3 are: " + array1[3], array1[6]);

//5.
var array1 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(array1[0][3]);
console.log(array1[2], array1[2][1]);