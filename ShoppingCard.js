(function () {
    "use strict";

    console.log('Hi');

    function Product(name, price, expDate) {
        this.productID = parseInt(Math.random() * 100000)
        this.name = name
        this.price = parseFloat(price)
        this.expirationDate = new Date(expDate)
        this.getInfo = function () {
         return this.name[0].toUpperCase() + this.name[name.length-1].toUpperCase() + this.productID + ', ' + this.name + ', ' + this.price;
        }
    };

    function ShoppingBag() {
        this.isEmpty = true;
        this.productList = [];

        this.addProduct = function(product) {
            var date = new Date();
            if (product.expirationDate > date) {
                this.productList.push(product);
                console.log(product.name+" is added to bag");
            }
            else {
                console.log("Date has expired");
            }
        };
        this.averagePrice = function() {
            var sum = 0;
            for (var i=0; i < this.productList.length; i++) {
                sum += this.productList[i].price;
            }
            return (sum/this.productList.length).toFixed(3);
        }
        this.getMostExpensive = function () {
            var maxPrice = this.productList[0].price;
            var maxPriceName = this.productList[0].name;
            this.productList.forEach(function (element) {
                if (element.price > maxPrice) {
                    maxPrice = element.price;
                    maxPriceName = element.name;
                }
            });
            return "Most expencive product is " + maxPriceName + " its price is: " + maxPrice;
        }
        this.calculateTotalPrice = function () {
            var calculateTotal = 0;
            this.productList.forEach(function (everyelement) {
                calculateTotal += everyelement.price;
            })
            return calculateTotal;
        }
    };

    function PaymentCard(balance, validUntil) {
        this.balance = parseFloat(balance)
        this.expDate = new Date(validUntil)
        this.isActive = function () {
            return this.expDate.getTime() > Date.now()
        }
    };

    function checkoutAndBuy(shoppingBag, card) {
        var haveEnoughMoney = card.balance > shoppingBag.calculateTotalPrice();
         if (card.isActive() && haveEnoughMoney) {
            card.balance -= shoppingBag.calculateTotalPrice();
            console.log("Success Buy");
            console.log("Total cost " + shoppingBag.calculateTotalPrice());
            console.log("Remaining balance " + card.balance);
        } else {
            console.log("Unable to finish shopping");
        }
    };
 
    
   var visa = new PaymentCard(1000.00, "1/1/2020")

   var banana = new Product("Banana", 123.50, "12/12/2020")
   var kiwi = new Product("Kiwi", 623.50, "12/12/2020")
   var myBag = new ShoppingBag()

   myBag.addProduct(banana)
   myBag.addProduct(kiwi)

   console.log(myBag.getMostExpensive());
   checkoutAndBuy(myBag, visa)

})();