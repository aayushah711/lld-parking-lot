class ParkingLot {
  constructor(capacityPerFloor, noOfFloors, chargesPerHour) {
    this.capacity = capacityPerFloor * noOfFloors;
    this.parkingSpace = new Map();
    this.availability = this.capacity;
    this.chargesPerHour = chargesPerHour;
    this.parkingSpots = this.create2DArray(noOfFloors, capacityPerFloor);
  }

  create2DArray(rows, columns) {
    return Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => 0)
    );
  }

  addVehicle(vehicle, inTime) {
    if (this.availability === 0) {
      console.log(`No space in parking lot for ${vehicle.name}`);
    } else {
      const parkingSpot = this.findAvailableSpot();
      this.availability--;

      this.parkingSpace.set(vehicle, { inTime, parkingSpot });
      console.log(
        `${vehicle.name} enters parkingSpot`,
        parkingSpot,
        `at ${inTime}PM`
      );

      this.getAvailability();
    }
  }

  findAvailableSpot() {
    let floors = this.parkingSpots.length;
    for (let floorNumber = 0; floorNumber < floors; floorNumber++) {
      let floor = this.parkingSpots[floorNumber];
      for (let spotNumber = 0; spotNumber < floor.length; spotNumber++) {
        let parkingSpot = floor[spotNumber];
        if (parkingSpot === 0) {
          this.parkingSpots[floorNumber][spotNumber] = 1;
          return { floorNumber, spotNumber };
        }
      }
    }
  }

  calculateParkingFees(vehicle, outTime) {
    let { inTime } = this.parkingSpace.get(vehicle);
    return (outTime - inTime) * this.chargesPerHour;
  }

  removeVehicle(vehicle, outTime) {
    if (!this.parkingSpace.has(vehicle)) {
      console.log(`${vehicle.name} is not parked!`);
    } else {
      let parkingFees = this.calculateParkingFees(vehicle, outTime);
      console.log(`${vehicle.name} paid ${parkingFees}`);
      this.emptyParkingSpot(vehicle);
      this.availability++;
      this.parkingSpace.delete(vehicle);
      console.log(`${vehicle.name} leaves parkinglot at ${outTime}PM`);
      this.getAvailability();
    }
  }

  emptyParkingSpot(vehicle) {
    const { parkingSpot } = this.parkingSpace.get(vehicle);
    console.log(`${vehicle.name} leaves parkingSpot`, parkingSpot);
    this.parkingSpots[parkingSpot.floorNumber][parkingSpot.spotNumber] = 0;
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
