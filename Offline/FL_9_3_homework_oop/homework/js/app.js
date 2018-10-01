function ShoppingCart (name, owner, maxCount) {
    this.name = name;
    this.owner = owner;
    this.maxCount = maxCount;
    let productList = [];
    let dateOfAddingToCart = [];
    let _logs = [];
    _logs.push(`${this.name} was created in ${new Date()}`);

    this.addNewProduct = function (product) {
        if (!productList.includes(product)) {
            if (product instanceof Product) {
                if (productList.length === this.maxCount) {
                    let minPrice = Infinity;
                    let id;
                    for (let i = 0; i < productList.length; i++) {
                        if (minPrice > productList[i].getPrice()) {
                            minPrice = productList[i].getPrice();
                            id = i;
                        }
                    }
                    this.removeProduct(id);
                }
                productList.push(product);
                product.add(this.name);
                dateOfAddingToCart.push(new Date());
                _logs.push(`${product.name} was added to ${this.name} on ${new Date()}`);
            } else {
                console.log(`Please try to add Product instance`);
            }
        }

        return this;
    }

    this.removeProduct = function (id) {
        if (id >= 0 && id <= productList.length) {
            _logs.push(`${productList[id].name} was removed from ${this.name} on ${new Date()}`);
            productList[id].removeProduct(this.name);
            productList.splice(id, 1);
            dateOfAddingToCart.splice(id, 1);
            return this;
        } else {
            console.log(`Please set the product ID`);
        }

        return this;
    }

    this.getAvaragePrice = function () {
        let sum = this.getTotalPrice();

        return Math.round(sum / productList.length);
    }

    this.getProducts = function () {

        return productList;
    }

    this.getFormattedListOfProducts = function () {
        let formattedList = [];
        for (let i = 0; i < productList.length; i++) {
            formattedList.push(`${productList[i].name} - is on ${this.name} from ${dateOfAddingToCart[i]}.`
            +` Detailed product description: ${JSON.stringify(productList[i].description)}`);
        }

        return formattedList;
    }

    this.getTotalPrice = function () {
        let sum = 0;
        for (let i = 0; i < productList.length; i++) {
            sum += productList[i].getPrice();
        }

        return sum;
    }

    this.getHistory = function () {

        return _logs;
    }
}

function Product (name, description, price) {
    this.name = name;
    this.description = description;
    let _price = price;
    let cartName = ``;
    let _logs = [];

    this.getPrice = function () {

        return _price;
    }

    this.setPrice = function (newPrice) {
        if (newPrice > 0) {
            if (newPrice > _price) {
                _logs.push(`change price from ${_price} to ${newPrice}`);
                _price = newPrice;
            } else {
                _logs.push(`try to change price from ${_price} to ${newPrice}`);
            }
        } else {
            console.log(`Please set to price only finite number`);
        }

        return this;
    } 

    this.add = function (name) {
        cartName = name;
        _logs.push(`${this.name} is added to ${cartName} on ${new Date()}`);

        return this;
    }

    this.removeProduct = function (name) {
        cartName = ``;
        _logs.push(`${this.name} was removed from ${name} on ${new Date()}`);

        return this;
    }
    
    this.getHistory = function () {

        return _logs;
    }
}

const banana = new Product(
    'banana',
    {
        color: 'yellow',
        size: 'medium'
    },
    45
);
  
const apple = new Product(
    'apple',
    {
        color: 'red',
        size: 'small'
    },
    30
);

const avocado = new Product(
    'avocado',
    {
        color: 'green',
        size: 'small'
    },
    20
);

const mellon = new Product(
    'mellon',
    {
        color: 'yellow',
        size: 'large'
    },
    40
);

const kiwi = new Product(
    'kiwi',
    {
        color: 'green',
        size: 'small'
    },
    15
);

const peach = new Product(
    'peach',
    {
        color: 'yellow',
        size: 'small'
    },
    35
);

const stevesShopCart = new ShoppingCart(
    'stevesCart',
    'Steve',
    5
);
  
stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(mellon)
    .addNewProduct(peach)
    .addNewProduct(kiwi)
    .addNewProduct(apple)
    .addNewProduct(avocado);

console.log(stevesShopCart.getProducts());

console.log(stevesShopCart.getHistory());

console.log(kiwi.getHistory());

console.log('avarage price:', stevesShopCart.getAvaragePrice());
console.log('total price:', stevesShopCart.getTotalPrice());

stevesShopCart
    .removeProduct(1);

stevesShopCart
    .addNewProduct('apple string');

avocado
  .setPrice(10)
  .setPrice(100);

console.log(avocado.getHistory());

console.table(stevesShopCart.getFormattedListOfProducts());