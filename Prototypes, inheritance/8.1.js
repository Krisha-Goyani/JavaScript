let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};
rabbit.walk(); // Animal walk
longEar.walk(); // Animal walk
console.log(rabbit.eats);
console.log(longEar.jumps);
console.log(longEar.eats);


// Writing doesn’t use prototype
//The prototype is only used for reading properties. Write/delete operations work directly with the object.
let animal1 = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  },
};
let rabbit1 = {
  __proto__: animal1,
};
rabbit1.walk = function () {
  console.log("Rabbit! Bounce-bounce!");
};
rabbit1.walk();


// for in loop
let animal2 = {
  eats: true,
};
let rabbit2 = {
  jumps: true,
  __proto__: animal2,
};
// Object.keys only returns own keys
console.log(Object.keys(rabbit2)); // jumps
// for..in loops over both own and inherited keys
for (let prop in rabbit2) console.log(prop);
