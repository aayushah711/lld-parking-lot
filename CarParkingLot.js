const ParkingLot = require("./ParkingLot");

class CarParkingLot extends ParkingLot {
  constructor(capacity, chargesPerHour) {
    super(capacity, chargesPerHour);
  }
}

module.exports = CarParkingLot;
