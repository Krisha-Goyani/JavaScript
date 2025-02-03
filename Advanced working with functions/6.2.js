// Rest parameters and spread syntax

// When ... is at the [end of function parameters], it’s [“rest parameters” ]and gathers the rest of the list of arguments into an array.
// When ... [occurs in a function call] or alike, it’s called a[ “spread syntax”] and expands an array into a list.

function sumAll(...args) {     // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6


// spread
let arr = [3, 5, 1];
console.log( Math.max(...arr) ); 

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(1, ...arr1, 2, ...arr2, 25) );


// Copy an array/object
let arr3 = [1, 2, 3];
let arrCopy = [...arr3]; // spread the array into a list of parameters
                        // then put the result into a new array
alert(JSON.stringify(arr3) === JSON.stringify(arrCopy)); // true
alert(arr3 === arrCopy); // false (not same reference)
// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr3); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3