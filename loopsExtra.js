/*
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
var number = 3;
var array1 = [5, 4, 2, 9, 7];
for (var i = 0; i < array1.length; i++){
    if(array1[i] === number){
        console.log("yes");
        break;
    }
    else if (i === (array1.length -1)){
        console.log("no");
    }
}

/*2.Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
var array2 = [-3, 11, 5, 3.4, -8];
var result2 = [];
for ( var i = 0; i < array2.length; i++ ){
    if (array2[i] > 0){
        result2[result2.length] = array2[i] * 2;
    }
    else{
        result2[result2.length] = array2[i];
    }
} console.log(result2);

/* 3.Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
var array3 = [4, 2, 2, -1, 6];
var minNumber = array3[0];
var index = 0;
for ( var i = 1; i < array3.length; i++){
    if (array3[i] < minNumber){
        minNumber = array3[i];
        index = i;
    }
}console.log(minNumber,index);

/*4.Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2

var array4 = [4, 2, 2, -1, 6];
var sortArray=[], minInex1,  minIndex2;
if(array4[0] < array4[1]){
    minInex1 = 0;
    minIndex2 = 1;
}else{
    minInex1 = 1;
    minIndex2 = 0;
}
var minInex1 = 0;
var minIndex2 = 1;
for (var i = 2; i < array4.length; i++){
    if((array4[i] < array4[minInex1]) && (array4[i] < array4[minIndex2])){
        minIndex2 = minInex1;
        minInex1 = i ;
   }
    else if(array4[i] > array4[minInex1] && (array4[i] < array4[minIndex2])){
        minIndex2 = i;
   }
}console.log(array4[minIndex2]);
*/
var array4 = [4, 2, 2, -1, 6, 1];
var minIndex1 = 0;
var minIndex2 = 0;
for ( var i = 1; i < array4.length; i++){
    if (array4[i] < array4[minIndex1]){
        minIndex1 = i;
    }
}
for ( var j = 1; j < array4.length; j++){
    if ((array4[j] < array4[minIndex2]) && (minIndex1 !== j)){
        minIndex2 = j;
    }
}console.log(array4[minIndex2]);

/* 5.
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
var array5 = [3, 11, -5, -3, 2];
var resultSum = 0;
for( var i = 0; i < array5.length; i++){
    if (array5[i] > 0){
        resultSum += array5[i]; 
    }
}console.log(resultSum);

/*6.Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
 */
var arraySimetric = [3, 4, 12, 8,9,10,8,12,4,3];
resultSimetric ="The array is symmetric";
for( var i = 0; i < (arraySimetric.length - 1)/2; i++){
   if(arraySimetric[i] === arraySimetric[arraySimetric.length - 1 - i]){
       continue;
   }
   else{
       resultSimetric = "The array isn’t symmetric";
       break;
   }
}
console.log(resultSimetric);

/*7.Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
firstArray = [4, 5, 6, 2];
secondArray = [3, 8, 11, 9];
arrayResult = [];
if (firstArray.length == secondArray.length){
    for( var i = 0; i < firstArray.length; i++){
        arrayResult[arrayResult.length] = firstArray[i];
        arrayResult[arrayResult.length] = secondArray[i];
    }
    console.log(arrayResult);
}
else{
    console.log("Arrays are not the same length.")
}

/* 8.Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
var array_1 = [4, 5, 6, 2, 9];
var array_2 = [3, 8, 11, 9, 8, 5, 7];
var concatenatArrays = array_1;

for( var i = 0; i < array_2.length; i++){
    concatenatArrays[concatenatArrays.length] = array_2[i];
}
console.log(concatenatArrays);

/*9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] 
*/
/*
var e = 2;
var a = [4, 6, 2, 8, 2, 8,2];

for( var i = 0; i < a.length; i++){
    if ( a[i] === e){
        delete a[i];
    }
}console.log(a);
console.log(a[2]);
*/
var e = 2;
var a = [4, 6, 2, 8, 2, 8,2];
var newA = [];
for(var i = 0; i < a.length; i++){
    if (a[i] !== e){
        newA[newA.length] = a[i];
    }
}console.log(newA);


/*10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
var arrayA =  [2, -2, 33, 12, 5, 8];
var eNum = 78 ; 
var pIndex = 3;
var newArray = [];

if( pIndex < arrayA.length){
    for( var i = 0; i < arrayA.length ; i++){
        if(i === pIndex){
            newArray[newArray.length] = eNum;
            newArray[newArray.length] = arrayA[i];
        }
        else{
            newArray[newArray.length] = arrayA[i];
        }
    }console.log(newArray);
}
else{
    console.log("Error, the value of the position is greater than the array length.");
}

