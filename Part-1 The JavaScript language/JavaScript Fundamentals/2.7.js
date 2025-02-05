// String Conversion
// let value = true;
// console.log(typeof(value));

// value = String(value); 
// console.log(typeof(value));

// Numeric Conversion
// console.log("10" / "2");

// let str = "123";
// console.log(typeof(str));

// let num = Number(str);
// console.log(`str 123 is ${typeof(num)} 123`);

// let str1 = "hello";
// let num1 = Number(str1);
// console.log(`${num1} type of num1 is ${typeof(num1)}`)

let num2 = undefined;  //undefined becomes NaN when we convert it into Number
let sol = Number(num2);
console.log(`undefined becomes NaN when we convert it into Number : ${sol}`);

// Boolean  Conversion

console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(`null : ${Boolean(null)}`);
console.log(`undefined : ${Boolean(undefined)}`);
console.log(`NaN : ${Boolean(NaN)}`);
