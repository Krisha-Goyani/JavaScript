console.log(null || 5 || 1); //return first truthy

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous");

console.log(1 && 5);
console.log(null && 5);
console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);


let userName = "Admin";
let pass = "TheMaster";

if (userName === "Admin") {
  if (pass === "TheMaster") {
    console.log("Welcome!");
  } else if (pass === "" || pass === null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if (userName === "" || userName === null) {
  console.log("Canceled");
} else {
  console.log("Canceled");
}

//|| returns the first truthy value.
// ?? returns the first defined value.