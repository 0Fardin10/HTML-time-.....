//Pass by value to function
let name = "zabir ";
function myFunct(name) {
    console.log(name);
}
function myFunct(obj) {
    let name = "fardin zabir";
    console.log(name);
}
myFunct(name);