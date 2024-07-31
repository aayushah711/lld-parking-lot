const Vehicle = require("./Vehicle");

class Motorcycle extends Vehicle {
  constructor(numberPlate, name, color) {
    super(numberPlate);
    this.name = name;
    this.color = color;
    this.type = "motorcycle";
  }
}

module.exports = Motorcycle;
