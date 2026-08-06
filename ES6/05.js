//callback function 
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. In JavaScript, callbacks are often used for asynchronous operations, such as reading files, making HTTP requests, or handling events.

function  sum(a, b, callback) {
    let result = a + b;
    callback(result);
}
function display(date){
console.log("Sum is : " + date);
}
sum(5, 10, display);
sum(20,30, display);
