// problem1 
let statu = "Order placed "
for(let i = 0; i <=3; i++){
    let statu = "Order placed "+i;
    console.log(statu);
}
 console.log("Final Status:", statu);
 //[problem2]
/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/
let reciptGenerator = (item, price, qty) => {
    return `${item} x${qty} = ${price * qty} Taka`;
};
console.log(reciptGenerator("Pen", 20, 3));