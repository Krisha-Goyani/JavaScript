// The “name” property
let sayHi = function () {
  console.log("Hi");
};
console.log(sayHi.name);

function sayHello() {
  console.log("Hello");
}
console.log(sayHello.name);

// The “length” property
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2
