/**
1. Complex Discount Calculator
Given a price and isMember (boolean), apply the following rules:

-> If member and price > 500 → 20% discount
-> If member and price <= 500 → 10% discount
-> If not member → no discount
-> Output the final price after discount.
 */

// bad way -> not recommended this way
let price = 600;
const isMember = true;

if (isMember === true && price > 500) {
  discountPrice = 0.2 * price;
  newPrice = price - discountPrice;
  console.log(newPrice);
}
if (isMember === true && price <= 500) {
  discountPrice = 0.1 * price;
  newPrice = price - discountPrice;
  console.log(newPrice);
}
if (isMember === false) {
  console.log(price);
}

// Optimism way

let discount = 0;
if (isMember) {
  discount = price > 500 ? 0.2 : 0.1;
}
const newPrice = price - price * discount;
console.log(`After discount new price is:  ${newPrice}`);
