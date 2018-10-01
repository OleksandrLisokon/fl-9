function ShoppingCart (object) {
    this.name = object.name;
    this.owner = object.owner;
    this.maxCount = object.maxCount;
    let productList = [];
    let dateOfAddingToCart = [];
    let _logs = [];
    _logs.push(`${this.name} was created in ${new Date()}`);

    this.addNewProduct = function (product) {
        if (product instanceof Product) {
            if (productList.length === this.maxCount) {
                let minPrice = Infinity;
                let index;
                for (let i = 0; i < productList.length; i++) {
                    if (minPrice > productList[i].getPrice()) {
                        minPrice = productList[i].getPrice();
                        index = i;
                    }
                }
                productList.splice(index, 1).push(product);
            } else {
                productList.push(product);
            }
            product.add(this.name);
            dateOfAddingToCart.push(new Date());
            _logs.push(`${product.name} was added to ${this.name} on ${new Date()}`);
        } else {
            console.log(`Please try to add Product instance`);
        }

        return this;
    }

    this.removeProduct = function (product) {
        if (product instanceof Product) {
            for (let i = 0; i < productList.length; i++) {
                if (productList[i].name === product.name) {
                    _logs.push(`${productList[i].name} was removed from ${this.name} on ${new Date()}`);
                    productList[i].removeProduct(this.name);
                    productList.splice(i, 1);
                    dateOfAddingToCart.splice(i, 1);
                    return this;
                }
            }
        } else {
            console.log(`Please try to add Product instance`);
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

function Product (object) {
    this.name = object.name;
    this.description = object.description;
    let _price = object.price;
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

const banana = new Product({
    name: 'banana',
    description: {
      color: 'yellow',
      size: 'medium'
    },
    price: 45
  });
  
  const apple = new Product({
    name: 'apple',
    description: {
      color: 'red',
      size: 'small'
    },
    price: 30
  });

  const avocado = new Product({
    name: 'avocado',
    description: {
      color: 'green',
      size: 'small'
    },
    price: 20
  });
  
  const stevesShopCart = new ShoppingCart({
    name: 'stevesCart',
    owner: 'Steve',
    maxCount: 5
  });
  
  stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(apple)
    .removeProduct(banana)
    .addNewProduct(avocado);

console.log(stevesShopCart.getHistory());

console.log(banana.getHistory());

console.log('avarage price:', stevesShopCart.getAvaragePrice());
console.log('total price:', stevesShopCart.getTotalPrice());

stevesShopCart
.addNewProduct('apple string');

avocado
  .setPrice(10)
  .setPrice(100);

console.log(avocado.getHistory());

console.table(stevesShopCart.getFormattedListOfProducts());