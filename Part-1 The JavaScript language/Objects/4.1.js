let user = {
  name: "john",
  age: 30,
  "like birds": "Yess", // multiword property name must be quoted
};
console.log(user.age);
// console.log(user.name);
// console.log(user['like birds']);

// delete user.age;
// console.log(user.age);
// console.log("name" in user);

// let key = "like birds";
// console.log(user[key]); // same as user["likes birds"] = 'Yess';

let key1 = "name";
// console.log(user[key1]);
console.log(`key1 in user : ${key1 in user}`);
// console.log(user.key1);  //undefined

let fruit = "apple";
let bag = {
  [fruit]: 5,
};
console.log(bag[fruit]);
console.log(bag.fruit);

function makeUser(name, age, name1, age2) {
  return {
    name: name,
    age1: age,
    name1,
    age2,
  };
}
let user1 = makeUser("herry", 5, "keii", 25);
console.log(user1.name);
console.log(user1.age2);

let obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__);

let user2 = {};
console.log(user2.noSuchProperty === undefined);

for (let keyss in user) {
  console.log(`keyss : ${keyss}`);
  console.log(`user[keyss] : ${user[keyss]}`);
}

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 4
}

let codes1 = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes1) {
  console.log(+code); // 49, 41, 44, 1
}

user.surname = "smith";
for (let detail in user) {
  console.log(detail);
}

let users = {
  name: "kriii",
  age: 20,
  surname: "xyz",
};
users.name = "pete";
console.log(users.name);
delete users.name;
console.log(users.name);

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let salary in salaries) {
  sum += salaries[salary];
}
console.log(`sum of salry is : ${sum}`);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let keys in obj) {
    if (typeof obj[keys] == "number") {
      obj[keys] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
