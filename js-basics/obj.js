const person = { 
    name: "John", 
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    car: {
        make: "Toyota",
        model: "Corolla"
    },
    "Number of siblings": 2,
    _height: 180,
    hello: function() {
        console.log(`${this.name} says hello!`);
    }
};

console.log(person.name);
console.log(person["age"]);
person.greet();
console.log(person.eyeColor); // undefined
person["Number of siblings"] 

for (let key in person) {
    console.log(key + ": " + person[key]);
}

person.age = 26;
console.log(person["age"]);
console.log(person["country"]);
person.country = "USA";
console.log(person["country"]);
delete person.country
console.log(person["country"]);

const car = {}
const car1 = {};

console.log(car === car1)

const car2 = car;
console.log(car === car2)
console.log(car2)
console.log(car)

car.make = "Honda";
console.log(car2)


console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))


Object.defineProperty(person, 'weight', {
    value: 70,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(person.weight);
person.weight = 80;
console.log(person.weight);

delete person.weight;
console.log(person.weight);

for (let key in person) {
    console.log(key + ": " + person[key]);
}


person.hello();

const newPerson = {
    name: "Alice",
}

person.hello.call(newPerson);