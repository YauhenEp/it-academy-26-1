class Person {
    private readonly name
    constructor(name: string) {
        this.name = name;
    }

    // changeName(newName: string): void {
    //     this.name = newName
    // }

    private getName(): string {
        return this.name;
    }

    public sayHi(): string {
        return `He ${this.getName()}`
    }

    protected print(car: string): string {
        return `Car is ${car}`
    }
}


class Man extends Person {
    private readonly surname = 'Man'
    constructor(name: string) {
        super(name)
    }

//     sayHello() {
//         return `Hello, ${this.getName}`
//     }

    public getCar() {
        return this.print('BMW')
    }
}

const person = new Person('Dasha')
// console.log(person.name)
// person.print('Honda')

const man = new Man('Alex');
console.log(man.getCar())
// man.print('Toyota')

enum Fuels {
    Gas, 
    Electricity,
    Disele,
    Kierosine
}


abstract class Vehicle {
    capacity
    fuelType
    constructor(capacity: number, fuelType: Fuels) {
        this.capacity = capacity
        this.fuelType = fuelType
    }
}

// const vehicle = new Vehicle()

class Bus extends Vehicle {
    constructor(capacity: number, fueltype: Fuels.Disele) {
        super(capacity, fueltype)
    }
}