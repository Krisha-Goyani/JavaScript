// If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it.

setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
   console.log("error is caught here!");
  }
}, 1000);

let json = "{ bad json }";
try {
  let user = JSON.parse(json); // <-- when an error occurs...
  console.log( user.name ); // doesn't work
} catch (err) {
  // ...the execution jumps here
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( err.name );
  console.log( err.message );
}