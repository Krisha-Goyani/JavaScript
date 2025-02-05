function sayHi(phrase, who) {
  console.log(phrase + ", " + who);
}
// setTimeout(sayHi, 1000, "Hello", "John");

let timerId = setInterval(() => console.log("tick"), 2000);
setTimeout(() => {
  clearInterval(timerId);
  console.log("stop");
}, 5000);
