function cashRegister() {
    let total = 0;
    console.log(total);
    return function (price) {
        total += price;
        return total;
    }
}
let cashier = cashRegister();
let juceShop = cashRegister();
console.log("Coffe shop : " + cashier(200));   
console.log("Coffe shop : " + cashier(100));  
console.log("Coffe shop : " + cashier(80));  
console.log("Juce shop : " + juceShop(200));
let resturant = cashRegister();
console.log("Resturant : " + resturant(500));
console.log("Resturant : " + resturant(100));
console.log("Coffe shop : " + cashier(200));
