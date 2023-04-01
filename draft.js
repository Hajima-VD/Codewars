// напиши решение на js  и подробно поясни на русском языке
function minMax(arr){
  const rezult = arr.sort(function(a, b) {
         return a - b;});
   return newArray = [rezult[0],rezult[rezult.length-1]];
 }
console.log(minMax([23 , 11 ,-11,-3 , 3  ]));


To create a new array in JavaScript containing the first and last elements of an existing array, you can use the slice() method. First, you can create a variable to store the original array, then use the slice() method to return a new array containing the first and last elements. Here's an example of how to do this:
let originalArray = [1, 2, 3, 4, 5];
let newArray = [originalArray[0], originalArray.slice(-1)[0]];
console.log(newArray); // [1, 5]

In this example, originalArray[0] retrieves the first element of originalArray, while originalArray.slice(-1)[0] retrieves the last element. The slice() method with a negative index argument starts slicing from the end of the array, so slice(-1) returns an array with only the last element, and [0] retrieves that element from
length