console.log(5=="5"); // Output: true
console.log(5==="5"); // Output: false
console.log(0==false); // Output: true
console.log(0===false); // Output: false
console.log(null==undefined); // Output: true
console.log(null===undefined); // Output: false
//global scope: var, let, const
let name = "zabir ";//global scope
if(true){
console.log(name); // Output: "zabir"
}
for(let i=0; i<5; i++){
console.log(name); // Output: "zabir", "zabir", "zabir", "zabir", "zabir"
}
//block scope: let, const
if(true){
    let name2 = "zabir2";//block scope
    console.log(name2); // Output: "zabir2"
}
console.log(name2); // Output: ReferenceError: name2 is not defined
//function scope: var
function add(a,b){
let sum = a+b; //function scope
return sum;
}
console.sum();
console.log(add(5,10));
//var for function scope
//let and const for block scope 
 