let price = parseFloat(prompt('Please enter the price: '));
let discount = parseFloat(prompt('Please enter the discount: '));
let priceWithDiscount = +(price - price * (discount/100)).toFixed(2);

if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0 || discount > 100) {
    console.log('Invalid data');
} else {
    console.log('Price without discount: ' + price + 
                '\nDiscount: ' + discount + 
                '%\nPrice with discount: ' + priceWithDiscount +
                '\nSaved: ' + +(price - priceWithDiscount).toFixed(2));
        } 
