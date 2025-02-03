// A closure is a function that remembers its outer variables and can access them.

function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + " " + lastName;
  }
  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

function sum(a) {
  return function (b) {
    return a + b; // takes "a" from the outer lexical environment
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4
