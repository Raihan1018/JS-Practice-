/**
1. Complex Discount Calculator
Given a price and isMember (boolean), apply the following rules:

-> If member and price > 500 → 20% discount
-> If member and price <= 500 → 10% discount
-> If not member → no discount
-> Output the final price after discount.
 */

// bad way -> not recommended this way
// let price = 600;
// const isMember = true;

// if (isMember === true && price > 500) {
//   discountPrice = 0.2 * price;
//   newPrice = price - discountPrice;
//   console.log(newPrice);
// }
// if (isMember === true && price <= 500) {
//   discountPrice = 0.1 * price;
//   newPrice = price - discountPrice;
//   console.log(newPrice);
// }
// if (isMember === false) {
//   console.log(price);
// }

// Optimism way

// let discount = 0;
// if (isMember) {
//   discount = price > 500 ? 0.2 : 0.1;
// }
// const newPrice = price - price * discount;
// console.log(`After discount new price is:  ${newPrice}`);

/**
2. Nested Condition for Travel Eligibility
Given passport (boolean), visa (boolean), and ticket (boolean), check:

-> If all three are true → "Can travel"
-> If missing any one → print what’s missing
-> If none → "Not eligible for travel"
 */

// const passport = false;
// const visa = false;
// const ticket = false;

// if (passport && visa && ticket) {
//   console.log("Can travel");
// } else if (!passport && !visa && !ticket) {
//   console.log("Not eligible for travel");
// } else {
//   console.log("Missing:");
//   if (!passport) console.log("- Passport");
//   if (!visa) console.log("- Visa");
//   if (!ticket) console.log("- Ticket");
// }



// Qus:
  // Even or Odd Checker
  // Print numbers from 1 to 50. For each number, print whether it is "Even" or "Odd".

for(let i = 1; i<=50; i++){
  if(i %2 === 0){
    console.log(i, 'Even')
  }
  else{
    console.log(i, 'Odd')
  }
}