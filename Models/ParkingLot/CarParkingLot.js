const ParkingLot = require("./ParkingLot");

class CarParkingLot extends ParkingLot {
  constructor(capacityPerFloor, noOfFloors, chargesPerHour) {
    super(capacityPerFloor, noOfFloors, chargesPerHour);
  }

  checkVehicleType(vehicle) {
    return vehicle.type === "car";
  }
}

module.exports = CarParkingLot;
