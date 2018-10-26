function Store (price) {
    this.pizzaSlicePrice = price,
    this.weekendDiscount = 0,
    this.nightDiscount = 0,
    this.bonus = 0,
    this.buyPizzaSlice = function () {
        return `Price after discount is ${this.pizzaSlicePrice - this.pizzaSlicePrice * 
this.weekendDiscount - this.pizzaSlicePrice * this.nightDiscount} and you have ${this.bonus} bonuses`;
    };
}

const getDiscount = (store) => {
    let date = new Date();
    if (date.getHours() >= 23 && date.getHours() < 6) {
        store.nightDiscount = 0.05;
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        store.weekendDiscount = 0.03;
    }
};

const setBonus = (store) => {
    if (store.pizzaSlicePrice > 10) {
        store.bonus = Math.floor(store.pizzaSlicePrice / 10); 
    }
};

let pizza = new Store(50);
getDiscount(pizza);
setBonus(pizza);
console.log(pizza.buyPizzaSlice());