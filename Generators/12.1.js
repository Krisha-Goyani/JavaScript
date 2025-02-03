function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

// let one = generator.next();
// console.log(JSON.stringify(one));

// let two = generator.next();
// console.log(JSON.stringify(two));

// let three = generator.next();
// console.log(JSON.stringify(three));

// let four = generator.next();
// console.log(JSON.stringify(four));

for (let value of generator) {
  console.log(value); // 1, then 2
}

let sequences = [0, ...generateSequence()];
console.log(sequences); // 0, 1, 2, 3

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }
// function* generatePasswordCodes() {
//   yield* generateSequence(48, 57); // 0..9

//   yield* generateSequence(65, 90);    // A..Z

//   yield* generateSequence(97, 122);   // a..z
// }
// let str = "";
// for (let code of generatePasswordCodes()) {
//   str += String.fromCharCode(code);
// }
// console.log(str);

function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generator1 = gen();

let question = generator1.next().value; // <-- yield returns the value

generator1.next(4);

function* gen() {
  let ask1 = yield "2 + 2 = ?";
  console.log(ask1); // 4

  let ask2 = yield "3 * 3 = ?";
  console.log(ask2); // 9
}

let generator2 = gen();

console.log(generator2.next().value); // "2 + 2 = ?"
console.log(generator2.next(4).value); // "3 * 3 = ?"
console.log(generator2.next(9).done); // true

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
