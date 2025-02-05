let str = "stringify";

// these are same for substring
console.log(str.substring(2, 6) ); // "ring"
console.log(str.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log(str.slice(2, 6) ); // "ring" (the same)
console.log(str.slice(6, 2) ); // "" (an empty string)

console.log(str.substr(-4, 2) ); 

console.log("Z".codePointAt(0) ); // 90
console.log("z".codePointAt(0) ); // 122
console.log("z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal console.log(

console.log( String.fromCodePoint(90) ); // Z
console.log( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)