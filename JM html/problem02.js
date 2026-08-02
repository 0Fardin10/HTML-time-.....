// number of sum exp: 7= 1+2+4+3+4+5+6+7=28
let sum = 0;
let number = 7;
function sumOfNumber(number){
    for(let i=1; i<=sum; i++){
        sum = sum + i;
        console.log("i is i=>>",i);
    }
return sum;
}
console.log(sumOfNumber(7));