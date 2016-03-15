(function(arguments) {



  angular.module('restaurantObjects', [])
    .controller('restaurantController', restaurantController)

  function restaurantController() {
    var RC = this


    // a Object constructors that build food items, DrinkItems, Plates, Orders, Menus, Restaurants, and Customers

    // FoodItem constructor
    function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
      this.name = name;
      this.calories = calories;
      this.vegan = vegan;
      this.glutenFree = glutenFree;
      this.citrusFree = citrusFree;
    }

    // DrinkItem constructor
    function DrinkItem(name, description, price, ingredients) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.ingredients = ingredients;
    }

    // Plate constructor
    function Plate(name, description, price, ingredients) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.ingredients = ingredients;
      this.isVegan = function(){
        if(this.ingredient.fooditem.vegan === true){
          this.isVegan = true
        }
        else {
          this.isVegan = false
        }

      }
    }

    // Order constructor
    function Order(orderArray) {
      this.orderArray = orderArray;
    }

    // Menu constructor
    function Menu(menuArray) {
      this.menuArray = menuArray;
    }

    // Restaurant constructor
    function Restaurant(name, description, menu) {
      this.name = name;
      this.description = description;
      this.menu = menu
    }

    // Customer constructor
    function Customer(name, dietaryPreference) {
      this.name = name;
      this.dietaryPreference = dietaryPreference;
    }
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // All prototype functions that turn the objects built by our constructors into a coherent string
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    FoodItem.prototype.stringify = function() {
      console.log(this.name + ', contains ' + this.calories + ' calories , vegan =' + this.vegan + ', gluten free =' + this.glutenFree + ', citrus free = ' + this.citrusFree)
    }


    //-------------------------------------------------------------------

    DrinkItem.prototype.stringify = function() {
        console.log(this.name + ' ' + this.description + ', costs $' + this.price + ', and contains ' + this.ingredients.join(', ') + '.')
      }
      // console.log(coke.stringify());

    //-------------------------------------------------------------------

    Plate.prototype.stringify = function() {
        console.log(this.name + ': ' + this.description + ', costs $' + this.price + ', and contains ' + this.ingredients.join(', ') + '.')
      }
      // console.log(lunchSpecial.stringify());

    //-------------------------------------------------------------------

    Order.prototype.stringify = function() {
        console.log('Your order contains ' + this.orderArray.join(', ') + '.')
      }
      // console.log(No1.stringify());

    //-------------------------------------------------------------------

    Plate.prototype.stringify = function() {
        console.log(this.name + ': ' + this.description + ', costs $' + this.price + ', and contains ' + this.ingredients.join(', ') + '.')
      }
      // console.log(lunchSpecial.stringify());

    //-------------------------------------------------------------------

    Restaurant.prototype.stringify = function() {
        console.log('Welcome to ' + this.name + '!' + this.description + ' Please, peruse our menu: ' + this.menu + '.')
      }
      // console.log(newRestaurant.stringify());

    Menu.prototype.stringify = function() {
      this.menuArray.forEach(function(element) {
        console.log(element.name);
      })
    }

    Order.prototype.stringify = function() {
        this.orderArray.forEach(function(element) {
          console.log(element.name);
        })
      }
      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      // Our three food items, built by our FoodItem constructor
      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    var bacon = new FoodItem('bacon', 250, false, true, false)
    console.log(bacon)
    bacon.stringify()

    var hotPocket = new FoodItem('hot pocket', 1000, false, false, false)
    hotPocket.stringify()

    var potato = new FoodItem('potato', 100, true, true, true)
    potato.stringify()

    var water = new FoodItem('water', 0, true, true, true)
    var highFructoseCornSyrup = new FoodItem('High Fructose Corn Syrup', 100, true, true, true)

    var coke = new DrinkItem('coke', 'rots your teeth', 1, [water, highFructoseCornSyrup])
    console.log(coke);

    var lunchSpecial = new Plate('Glutenful Lunch Special', 'Bread, bread and more bread', 19, ['bread', 'croissont', 'foccacia'])
    console.log(lunchSpecial);

    var No1 = new Order([lunchSpecial, lunchSpecial])
    console.log(No1);

    var No2 = new Order(lunchSpecial)

    var newRestaurant = new Restaurant("Bo's Diner ", "We are a family owned restaurant, owned and operated since 1985!", lunchSpecial)

    var jim = new Customer('Jim', true)

    var boMenu = new Menu([lunchSpecial, lunchSpecial])
    boMenu.stringify()

    var willOrder = new Order([lunchSpecial, lunchSpecial])
    willOrder.stringify()
      // Define a stringify method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the stringify method of the contained objects. (e.g. the Menu object should call stringify on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).

      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      // Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

      //
      // boolean isVegan
      // boolean isGlutenFree
      // boolean isCitrusFree
      // Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
      // Instantiate a Menu that contains each of the instantiated Plates and Drinks.
      // Instantiate a Restaurant that contains the instantiated Menu.
      // Call the Restaurant's stringify method to have it print out all its information.
  }
})();
