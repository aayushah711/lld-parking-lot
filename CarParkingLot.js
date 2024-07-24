const ParkingLot = require("./ParkingLot");

class CarParkingLot extends ParkingLot {
  constructor(capacityPerFloor, noOfFloors, chargesPerHour) {
    super(capacityPerFloor, noOfFloors, chargesPerHour);
  }
}

module.exports = CarParkingLot;
