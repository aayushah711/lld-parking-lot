const CarParkingLot = require("./CarParkingLot");
const Car = require("./Car");

function main() {
  console.log(
    "------------------------------START------------------------------"
  );
  let carParkingLot = new CarParkingLot(2, 1, 40);

  let car1 = new Car("1", "Innova", "red");
  let car2 = new Car("2", "Swift", "blue");
  let car3 = new Car("3", "Alto", "grey");

  carParkingLot.addVehicle(car1, 1);
  carParkingLot.addVehicle(car2, 2);
  carParkingLot.addVehicle(car3, 3);
  carParkingLot.removeVehicle(car1, 3);
  carParkingLot.addVehicle(car3, 3);

  console.log(
    "------------------------------END------------------------------"
  );
}

main();
