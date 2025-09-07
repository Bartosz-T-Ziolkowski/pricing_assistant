// Coding Challenge 2a

// Code Goes Here

const productName = "Lucky Charms Cereal";
let costPerUnit = 2.00;
let basePrice = 5.00;
let discountRate = 0.20;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 2000;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log(productName);
console.log(discountedPrice);
console.log(finalPriceWithTax);
console.log(profitPerUnit);
console.log(breakEvenUnits);
console.log(isProfitablePerUnit);
