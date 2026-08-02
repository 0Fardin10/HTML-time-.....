//data type are 2 type : 1. primitive data type: string, number, boolean, null, undefined, symbol
let name = "John"; // string
let name2 = name; 
let age =20; // number
let isStudent = true; // boolean 
let address = null; // null
let phoneNumber; // undefined
let id = Symbol("id"); // symbol
console.log(typeof name , typeof age, typeof isStudent, typeof address, typeof phoneNumber, typeof id); // Output: string number boolean object undefined symbol   
// 2. non-primitive data type: function, object, array
function greet() {
    console.log("Hello");
}
let person = {
    name: "John",
    age: 20
};
let numbers = [1, 2, 3, 4, 5];
console.log(typeof greet, typeof person, typeof numbers); // Output: function object object
//non-primitive data type  can change same memory location but primitive data type can not change same memory location
