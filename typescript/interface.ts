interface ICar {
    color: string,
    fuelType: string,
    capacity: number,
    maxSpeed?: number,
    run: (speed: number, direction: string) => void,
    owner: IOwner,
    previosOwners: IOwner[],
}

interface IOwner {
    name: string,
    lastName: string,
    age: number,
    ownYears: number,
}

const car: ICar = {
    color: 'Black',
    fuelType: 'Gas',
    capacity: 5,
    run: function(speed: number, direction: string): void {
        console.log(`I am running with speed ${speed} to the ${direction}`)
    },
    owner: {
        name: 'Mike',
        lastName: 'Ivanow',
        age: 34,
        ownYears: 2
    },
    previosOwners: [],
    maxSpeed: 170
}

// class Car implements ICar {

// }

interface IBus extends ICar {
   driverName: string 
}

type TravelTransport = ICar | IBus;