let a=3;
let b=1;
// let result = (a + b < 4) ? 'Below' : 'Over';
let result = ( a + b == 4) ? 'below' : 'over';
console.log(result);


let login = "Employee";
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
  console.log(message);
  