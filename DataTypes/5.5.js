let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]

let arr1 = ["I", "study", "JavaScript", "right", "now"]; // remove 3 first elements and replace them with another
arr1.splice(0, 3, "Let's", "dance");
console.log(arr1); // now ["Let's", "dance", "right", "now"]

let arr2 = ["I", "study", "JavaScript", "right", "now"]; // remove 2 first elements
let removed = arr2.splice(0, 2);
console.log(removed); // "I", "study" <-- array of removed elements

let arr4 = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");
console.log(arr4); // "I", "study", "complex", "language", "JavaScript"

let arr5 = ["t", "e", "s", "t"];
console.log(arr5.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr5.slice(-2)); // s,t (copy from -2 till the end)

let arr6 = [1, 2];
let arrayLike = {
  0: "something",
  length: 1,
};
console.log(arr6.concat(arrayLike)); // 1,2,[object Object]

let arr7 = [1, 2];
let arrayLikes = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
console.log(arr7.concat(arrayLikes)); // 1,2,something,else

// forEach
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

//   find
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
console.log(users.findIndex((user) => user.name == "Pete")); // 0
let user = users.find((item) => item.id == 1);
console.log(user.name); // John

// filter
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers.length); // 2

// map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // 5,7,6

// thisArg
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};
let users1 = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

function camelize(str) {
  return str
    .split("-") // Split the string into an array by '-'
    .map(
      (word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter except for the first word
    )
    .join(""); // Join back into a single string
}

// Example usage:
console.log(camelize("my-short-string")); // Output: "myShortString"
console.log(camelize("background-color")); // Output: "backgroundColor"
console.log(camelize("list-style-image")); // Output: "listStyleImage"
console.log(camelize("hello-world-again")); // Output: "helloWorldAgain"
console.log(camelize("singleword")); // Output: "singleword"
