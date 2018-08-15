let price = parseFloat(prompt('Please enter the price: '));
let discount = parseFloat(prompt('Please enter the discount: '));
isNaN(price) || isNaN(discount) || price <= 0 || discount <0 || discount >100 ? console.log('Invalid data') : 
console.log('Price without discount: ' + price + '\nDiscount: ' + discount + '%\nPrice with discount: ' + 
+(price - price * (discount/100)).toFixed(2) + '\nSaved: ' + +(price * (discount/100)).toFixed(2));