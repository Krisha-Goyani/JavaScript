// While the condition is truthy, the code from the loop body is executed.
let i= 3;
while(i>=0){
    // console.log(i);
    i--;    
}
let j=0
// while(j<4){
    // console.log(j);
    // j++    
// }

// do while
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
// let j=0;
// do{
//     console.log(j);
//     j++;   
// }while(j<5)

// let sum=0;
// for(let k=0; k<10; k++){
//     sum +=k;    
// }
// console.log(sum);

let k = 10;
nextPrime :
for (let i = 2; i<= k ;i++){
    for (let j=2 ; j< i; j++){
        if (i % j == 0) continue nextPrime;
    }
    console.log(i);
}
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   console.log(i);
// }