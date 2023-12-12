// Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}


Car.prototype.getMakeModel = function () {
  return this.make + ' ' + this.model;
};


function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inheriting the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
// Adding a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
