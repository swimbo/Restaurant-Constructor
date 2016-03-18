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
    function DrinkItem(name, description, price, ingredients, photo) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.ingredients = ingredients;
      this.photo = photo;
    }

    // Plate constructor
    function Plate(name, description, price, ingredients, photo) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.ingredients = ingredients;
      this.photo = photo
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

    //  Function to push a plate onto the order array when button is clicked
    RC.addPlate = function(plate){
      RC.No1.orderArray.push(plate)
      console.log(RC.No1)
    }

    RC.removePlate = function(plate){
      RC.No1.orderArray.pop(plate)
      console.log(RC.No1)
    }
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // All prototype functions that turn the objects built by our constructors into a coherent string
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    FoodItem.prototype.stringify = function() {
      return this.name + ', contains ' + this.calories + ' calories , vegan =' + this.vegan + ', gluten free =' + this.glutenFree + ', citrus free = ' + this.citrusFree
      }


    //-------------------------------------------------------------------

    DrinkItem.prototype.stringify = function() {
        return this.name + ' ' + this.description + ', costs $' + this.price + ', and contains ' + this.ingredients.join(', ') + '.'
      }
      // console.log(coke.stringify());

    //-------------------------------------------------------------------

    Plate.prototype.stringify = function() {
        return this.name + ': ' + this.description + ', costs $' + this.price + ', and contains ' + this.ingredients.join(', ') + '.'
      }
      // console.log(lunchSpecial.stringify());

    //-------------------------------------------------------------------

    Order.prototype.stringify = function() {
        return 'Your order contains ' + this.orderArray.join(', ') + '.'
      }
      // console.log(No1.stringify());

    //-------------------------------------------------------------------

    Plate.prototype.stringify = function() {
        return this.name + ': ' + this.description + ', costs $' + this.price + ', and contains ' + this.ingredients.join(', ') + '.'
      }
      // console.log(lunchSpecial.stringify());

    //-------------------------------------------------------------------

    Restaurant.prototype.stringify = function() {
        return 'Welcome to ' + this.name + '!' + this.description + ' Please, peruse our menu: ' + this.menu + '.'
      }
      // console.log(newRestaurant.stringify());

    //-------------------------------------------------------------------


    Menu.prototype.stringify = function() {
      var stringifiedMenu = ''
      this.menuArray.forEach(function(element) {
        stringifiedMenu += element.name + ', '
      })
      return stringifiedMenu.slice(0, -2)
    }

   //-------------------------------------------------------------------
    Order.prototype.stringify = function() {
      var stringifiedOrder = ''
        this.orderArray.forEach(function(element) {
          stringifiedOrder += element.name + ', '
        })
        return stringifiedOrder
      }

   //-------------------------------------------------------------------


      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      // Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      // boolean isVegan
      Plate.prototype.isVegan = function(){
        for(var i = 0; i < this.ingredients.length; i++){
        return this.ingredients[i].vegan
        }
      }

      // boolean isGlutenFree
      Plate.prototype.isGlutenFree = function(){
        for(var i = 0; i < this.ingredients.length; i++){
        return this.ingredients[i].glutenFree
        }
      }
      // boolean isCitrusFree
      Plate.prototype.isCitrusFree = function(){
        for(var i = 0; i < this.ingredients.length; i++){
        return this.ingredients[i].citrusFree
        }
      }


      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      // Our three food items, built by our FoodItem constructor
      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    RC.bacon = new FoodItem('bacon', 250, false, true, false)



    RC.hotPocket = new FoodItem('hot pocket', 1000, false, false, false)


    RC.potato = new FoodItem('potato', 100, true, true, true)


    RC.water = new FoodItem('water', 0, true, true, true)
    RC.highFructoseCornSyrup = new FoodItem('High Fructose Corn Syrup', 100, true, true, true)

    RC.coke = new DrinkItem('coke', 'rots your teeth', 1, [RC.water, RC.highFructoseCornSyrup])



    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
    // Instantiate a Menu that contains each of the instantiated Plates and Drinks.
    // Instantiate a Restaurant that contains the instantiated Menu.
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    RC.burritoPlate = new Plate('Bo\'s Burrito', 'A gut bomb full of guac', 12, [RC.bacon, RC.potato, RC.hotPocket], "http://2.bp.blogspot.com/-HQzNiJWGIGM/Ug4r9Qi5GMI/AAAAAAAAY20/lu0_4XzJphs/s1600/enchirito.jpg")

    RC.guacamolePlate = new Plate('Guillermo\'s Guac', 'The great green guac to put in the gut bomb', 10, [RC.bacon, RC.potato, RC.hotPocket], "http://www.puregoodness.net/wp-content/uploads/2011/02/guac.jpg")

    RC.margaritaDrink = new DrinkItem('Mamma\'s Marg', 'Be warned, Mamma likes her booze', 9, [RC.bacon, RC.potato, RC.hotPocket, RC.coke], "http://s3-media3.fl.yelpcdn.com/bphoto/vpB04tTNpxq-ZLQzdGt5tg/348s.jpg")
console.log(RC.margaritaDrink.photo);

    RC.lunchSpecial = new Plate('Glutenful Special', 'Bread, bread and more bread', 19, [RC.bacon, RC.potato, RC.hotPocket], "http://graphics8.nytimes.com/images/2015/10/28/health/well_moldy/well_moldy-tmagArticle.jpg")

    RC.lunchSpecial.isVegan()
    RC.lunchSpecial.isGlutenFree()
    RC.lunchSpecial.isCitrusFree()

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Creating our orders and menu that contain the plates
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // var restMenu = boMenu.stringify()

    RC.No1 = new Order([])
    console.log(RC.No1.orderArray);

    RC.jim = new Customer('Jim', true)

    RC.boMenu = new Menu([RC.lunchSpecial, RC.burritoPlate, RC.guacamolePlate, RC.margaritaDrink])

    RC.newRestaurant = new Restaurant("Bo's Diner", " We are a family owned restaurant, owned and operated since 1985!", RC.boMenu.stringify())

    RC.willOrder = new Order([RC.lunchSpecial, RC.margaritaDrink])
    RC.willOrder.stringify()
      // Define a stringify method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the stringify method of the contained objects. (e.g. the Menu object should call stringify on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).


      // Call the Restaurant's stringify method to have it print out all its information.
console.log(RC.newRestaurant.stringify())



  }
})();
