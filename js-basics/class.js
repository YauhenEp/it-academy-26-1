class Vehicle {
    #region = 'Private Fields' 
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    #move() {
        console.log(`${this.make} ${this.model} is moving.`);
    }

    get Region() {
        return this.#region;
    }

    set Region(value) {
        this.#region = value;
    }

    static vehicleInfo() {
        return "Vehicles are used for transportation.";
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, doors, batteryCapacity) {
        super(make, model, year, doors);
        this.batteryCapacity = batteryCapacity;
    }   
}

class FuelCar extends Car {
    
    constructor(make, model, year, doors, fuelType) {
        super(make, model, year, doors);
        this.fuelType = fuelType;
    }

    move() {
        console.log(`${this.make} ${this.model} is driving on ${this.fuelType}.`);
    }

    getMove() {
        return this.move();
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }   
}

class Truck extends Vehicle {
    constructor(make, model, year, bedLength) {
        super(make, model, year);
        this.bedLength = bedLength;
    }       
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 4, "100 kWh");
console.log(myElectricCar);

const myFuelCar = new FuelCar("Toyota", "Camry", 2021, 4, "Gasoline");
console.log(myFuelCar);
myFuelCar.move();

console.log(myFuelCar.Region)

myFuelCar.Region = "Updated Region";
console.log(myFuelCar.Region)


const vehicleObject = new Vehicle("Generic", "Vehicle", 2000);
console.log(Vehicle.vehicleInfo());