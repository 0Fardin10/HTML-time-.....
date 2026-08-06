//map method  is to modify the array elements and return a new array with modified elements. It does not change the original array.
let arr = [1, 2, 3, 4, 5];
let double =arr.map(arr=>arr*2);
console.log(double);
//forEach method is to iterate over the array elements and perform some operation on each element. It does not return a new array and does not change the original array.
let arr2 = [1, 2, 3, 4, 5];
arr2.forEach(arr2=>console.log(arr2*2));
//filter method is to filter the array elements based on a condition and return a new array with the filtered elements. It does not change the original array.
let arr3 = [1, 2, 3, 4, 5];
let even = arr3.filter(arr3=>arr3%2==0);
console.log(even);
//find method is to find the first element in the array that satisfies a condition and return that element. It does not change the original array.
let arr4 = [1, 2, 3, 4, 5];
let find = arr4.find(arr4=>arr4>3);
console.log(find);