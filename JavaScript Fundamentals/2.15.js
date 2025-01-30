function sum(a,b){
    return a +b;
}
let result = sum(1,2)
console.log(result);

function checkAge(age){
    if (age >18){
        return true;
    }else {
        confirm("Do you have a permission?");
    }
}
let age = prompt("How old are ypu?")

if (checkAge(18)){
    alert("permission accept")
}else{
    alert(" Permission Denied");
}