class Vehicle {
    public nummberOfWheels: number;
    color: string;
    parktronic: boolean
    constructor(nummberOfWheels: number) {
        this.nummberOfWheels = nummberOfWheels;
        this.color = 'white';
        this.parktronic = false
    }

    get wheelsNumber(): number {
        return this.nummberOfWheels
    }

    set wheelsNumber(nummberOfWheels: number) {
        this.nummberOfWheels = nummberOfWheels;
    }

    protected setColor(carColor: string) {
        this.color = carColor;
    }

    private addParkTronic() {
        this.parktronic = true;
    }

    public startTuning() {
        this.addParkTronic()
    }
}

class Car extends Vehicle {
    constructor(nummberOfWheels: number) {
        super(nummberOfWheels)
    }

    changeCar(carColor: string) {
        this.setColor(carColor)
        // this.addParkTronic()
    }
}

let vehicle = new Vehicle(4);

console.log(vehicle.nummberOfWheels)
// vehicle.setColor('blue')

let car = new Car(4);
car.changeCar('blue')
console.log(car.color)

// car.addParkTronic()
// vehicle.addParkTronic()