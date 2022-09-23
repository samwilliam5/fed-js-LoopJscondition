//if condition
let a=12;
if (a<10) {
    console.log(`IF condition:`,'A is less than  10');
} 
else if(a===10){
    console.log(`IF condition:`,'A is equal to 10');
}
else if(a>10){
    console.log(`IF condition:`,'A is greater than 10');
}

//ternary operators
let b=12;
console.log(`Ternary operators:`,b<=10 ? 'B is less than equal to ten':'B is greater than 10' );

//for loop

for(let i=1;i<5;i++){
    console.log(`For loop:`,i);

}

// while
let i=1;
while (i<=5) {
    console.log(`While loop:`,i);
    i++;
}

//do while
let i1 = 1;
const n = 5;

do {
    console.log(`do while:`,i1);
    i1++;
} while(i1 <= n);



function fact (n){
  return (n!=1) ? n * fact(n-1) : 1;
}

console.log(`Factorial of numbers :`,fact(5));

