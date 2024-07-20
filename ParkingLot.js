class ParkingLot {
  constructor(capacity, chargesPerHour) {
    this.capacity = capacity;
    this.parkingSpace = new Map();
    this.availability = capacity;
    this.chargesPerHour = chargesPerHour;
  }

  addVehicle(vehicle, inTime) {
    if (this.availability === 0) {
      console.log(`No space in parking lot for ${vehicle.name}`);
    } else {
      this.availability--;
      this.parkingSpace.set(vehicle, inTime);
      console.log(`${vehicle.name} enters parkinglot at ${inTime}PM`);
      this.getAvailability();
    }
  }

  calculateParkingFees(vehicle, outTime) {
    let inTime = this.parkingSpace.get(vehicle);
    return (outTime - inTime) * this.chargesPerHour;
  }

  removeVehicle(vehicle, outTime) {
    if (!this.parkingSpace.has(vehicle)) {
      console.log(`${vehicle.name} is not parked!`);
    } else {
      let parkingFees = this.calculateParkingFees(vehicle, outTime);
      console.log(`${vehicle.name} paid ${parkingFees}`);
      this.availability++;
      this.parkingSpace.delete(vehicle);
      console.log(`${vehicle.name} leaves parkinglot at ${outTime}PM`);
      this.getAvailability();
    }
  }

  getAvailability() {
    const message =
      this.availability === 1
        ? "Currrently 1 spot is available"
        : `Currrently ${this.availability || "no"} spots are available`;
    console.log(message);
    return this.availability;
  }
}

module.exports = ParkingLot;
