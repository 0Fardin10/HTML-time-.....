//even and odd number 
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}
// with function 
function checkEvenOdd(number){
    if(number % 2 === 0){
        return("its a even number");
    } else {
        return("its a odd number");
    }
}
console.log(checkEvenOdd(10));