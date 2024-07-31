const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  constructor(numberPlate, name, color) {
    super(numberPlate);
    this.name = name;
    this.color = color;
    this.type = "car";
  }
}

module.exports = Car;
