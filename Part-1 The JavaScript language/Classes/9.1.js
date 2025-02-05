class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
let user = new User("Jacob");
user.sayHi();


function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}
let user1 = makeClass("Heyyy");
new user1().sayHi();


// Computed names […]
class User {
  ["say" + "Hi"]() {
    console.log("Hello");
  }
}
new User().sayHi();
