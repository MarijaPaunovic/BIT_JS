// Write an array of months in a year. Using console.log display June, October and January from the array.

var a = ['Januar', 'Februar', 'March', 'April', 'May', 'June', 'July', 'Áugust', 'September', 'October', 'November', 'December']

console.log(a[5], a[9], a[0]);


// Write an arrays of days in a week. Using console.log display Sunday from the array.
 
var a = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(a[6]);


// Print all negative elements from the array [2, -4, 5, -2, -11].  

var a = [2, -4, 5, -2, -11]

for (var i = 0; i < a.length; i++) {
	if (a[i] < 0) {
		console.log(a[i]);
    }
}


// Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9]. 

var a = [5, 15, -5, 20, 12, 18, 72, 14, 9]

for (var i = 0; i < a.length; i++) {
    if (a[i] % 3 === 0) {
        console.log(a[i])
    }
}

/* What is the index of 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

Using console.log:
Display the 3rd element of the array,
Display the 2nd element of the 3rd element. */

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// (5) [Array(4), Array(4), Array(4), Array(4), Array(4)]

console.log(a[2]);
console.log(a[2][1]);
