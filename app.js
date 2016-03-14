(function (arguments) {



angular.module('restaurantObjects',[])
    .controller('restaurantController', restaurantController)

function restaurantController(){
  var RC = this
}


// Part I
// Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
// FoodItem
// string name
// number calories
// boolean vegan
// boolean glutenFree
// boolean citrusFree


function FoodItem(name, calories, vegan, glutenFree, citrusFree){
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}

// FoodItem('bacon', 250, false, true, false)

var bacon = new FoodItem('bacon', 250, false, true, false)




// Define a stringify method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. stringify should not have any side effects.

FoodItem.prototype.stringify = function(){
  console.log(this.name + ', contains ' + this.calories + ' calories , vegan =' + this.vegan + ', gluten free =' + this.glutenFree + ', citrus free = ' +  this.citrusFree)
}
console.log(bacon)
console.log(bacon.stringify())




// Instantiate three different FoodItems and store each in a separate variable. Call stringify on each instance and print the result to the console.

var hotPocket = new FoodItem('hot pocket', 1000, false, false, false )
console.log(hotPocket.stringify())

var potato = new FoodItem('potato', 100, true, true, true )
console.log(potato.stringify())



// Part II
// Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
// Drink
// string name
// string description
// number price
// Array of FoodItem ingredients
// Plate
// string name
// string description
// number price
// Array of FoodItem ingredients
// Order
// Array of Plate plates
// Menu
// Array of Plate plates
// Restaurant
// string name
// string description
// Menu menu
// Customer
// string dietaryPreference
// Define a stringify method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the stringify method of the contained objects. (e.g. the Menu object should call stringify on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).
// Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
// boolean isVegan
// boolean isGlutenFree
// boolean isCitrusFree
// Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
// Instantiate a Menu that contains each of the instantiated Plates and Drinks.
// Instantiate a Restaurant that contains the instantiated Menu.
// Call the Restaurant's stringify method to have it print out all its information.
})();
