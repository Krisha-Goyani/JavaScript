// Constructor, operator "new"

function User(name) {
  (this.name = name), (this.age = 30);
}
let user = new User("Krii", 25);

console.log(user.name);
console.log(user.age);

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

let john = new User("kitty");

john.sayHi(); // My name is: John


// CALCULATOR
function calculator() {
  this.read = function () {
    this.a = 2;
    this.b = 7;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calc = new calculator();
calc.read();

console.log(calc.sum());
console.log(calc.mul());


