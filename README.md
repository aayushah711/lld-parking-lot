# Smart Parking Lot System

## Overview

This project implements a low level design system for a smart parking lot. The system efficiently manages vehicle entry and exit, parking space allocation, and fee calculation. It is designed to handle multiple floors and various parking spots, accommodating different vehicle sizes such as motorcycles, cars, and buses.

## Features

- Automatic Parking Spot Allocation: Assigns parking spots based on vehicle size and availability.
- Vehicle Check-In and Check-Out: Records entry and exit times of vehicles.
- Parking Fee Calculation: Calculates parking fees based on duration and vehicle type.
- Real-Time Availability Update: Updates and broadcasts the availability of parking spots in real-time.

## Tech Stack

Backend: Node.js

## Setup

1. Clone the repository:

```
git clone https://github.com/aayushah711/lld-parking-lot.git
cd lld-parking-lot
```

2. Add parking lot configuration in runner.js:

```
  let carParkingLot = new CarParkingLot(2, 1, 40);

```

3. Add vehicles

```
  let car1 = new Car("1", "Innova", "red");
  let car2 = new Car("2", "Swift", "blue");
  let car3 = new Car("3", "Alto", "grey");
```

4. Add the check in & check out details:

```
  carParkingLot.addVehicle(car1, 1);
  carParkingLot.addVehicle(car2, 2);
  carParkingLot.addVehicle(car3, 3);
  carParkingLot.removeVehicle(car1, 3);
  carParkingLot.addVehicle(car3, 3);
```

5. Run the runner:

```
node runner.js
```
