const Vehicle = require("./Vehicle");

class Bus extends Vehicle {
  constructor(numberPlate, name, color) {
    super(numberPlate);
    this.type = "bus";
  }
}

module.exports = Bus;
