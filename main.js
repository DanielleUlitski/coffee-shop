const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 12},
    americano: {beanRequirement: 5, price: 6},
    doubleShot: {beanRequirement: 15, price: 17},
    frenchPress: {beanRequirement: 12, price: 13}
  },

  money: 100,

  buyBeans: function (numBeans) {
    let beanCost = 0.5;
    this.money -= beanCost * numBeans;
    this.beans += numBeans;
  },

  makeDrink: function (drinkType) {
    this.beans -= this.drinkRequirements[drinkType].beanRequirement;
  },

  buyDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType]) {
      return alert("Sorry, we don't make" + drinkType);
    }
    if (this.drinkRequirements[drinkType].beanRequirement > this.beans) {
      return alert("Sorry, we're all out of beans!");
    }
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
  }
}
coffeeShop.buyBeans(10);
coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
