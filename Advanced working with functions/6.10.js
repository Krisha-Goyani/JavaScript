// a wrapper
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};
setTimeout(() => user.sayHi(), 1000);

// bind
let user1 = {
  firstName: "Doe",
};
function func(phrase) {
  console.log( phrase + ", " + this.firstName);
}
let funcUser = func.bind(user1);
funcUser("Hello");
