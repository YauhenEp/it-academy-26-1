const person = { 
    name: "John", 
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    car: {
        make: "Toyota",
        model: "Corolla"
    }   
};

console.log(person.name);
console.log(person["age"]);