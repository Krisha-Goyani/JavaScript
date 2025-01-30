let x = 5;
// console.log(x = -x);

// String concatenation with binary +
// console.log(2 + '1');
// console.log('2' + 1);
// console.log('2' + '2' + 1);
// console.log(2 + 2 + '1');
// console.log(2 + '2' + '1');
// console.log('2'+ 2 + '1');


// console.log('2' - '2' - 1);
// console.log(2 - 2 - '1');

// increment decrement
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log(( counter )); // 3

let counter1 = 2;
counter1--;        // works the same as counter = counter - 1, but is shorter
console.log(( counter1 )); // 1

let counter3 = 1;
let a = ++counter3; // (*)
console.log(`counter3 becomes: ${counter3} and 'a' becomes: ${a}`) ;

let counter4 = 1;
let a2 = counter4++;
console.log(`counter4 becomes: ${counter4} and 'a2' becomes: ${a2}`);

let counter5 = 0;
counter5++;
++counter5;
console.log(counter5);//2


// Comma
let a7 = (1 + 2, 3 + 4);
console.log(a7); // 7 (the result of 3 + 4)
