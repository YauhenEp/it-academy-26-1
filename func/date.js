// console.log(new Date())

// console.log(new Date(Date.UTC(2000, 0, 1)))


const person = {
    name: "John",
    age: 30,
    city: "New York",
    sayHi: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    descr: function (one, tow , tree) {        
        console.log(`My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}. ${one} ${tow} ${tree}`);
    }
}

person.sayHi()
person.sayHi.apply(person, [])

const newPerson = {
    name: "Alex",
    age: 25,
    city: "Los Angeles"
}

person.sayHi.call(newPerson)
person.descr.call(newPerson, "one", "two", "tree")
person.descr.apply(newPerson, ["one", "two", "tree"])