// console.log(string)

var number = 10;
let string = "Hello, World!";
const boolean = true;
const array = [1, 2, 3, 4, 5];
const object = { name: "Alice", age: 30 };

// boolean = false; // This will cause an error because 'boolean' is a constant

let newNumber = 10;

{
    let newNumber = 20; // This 'newNumber' is scoped to this block
    console.log(newNumber); // Outputs: 20
}

console.log(newNumber);


var newNumber1 = 100;

{
    var newNumber1 = 200; // This 'newNumber' is scoped to this block
    console.log(newNumber1); // Outputs: 200
}

console.log(newNumber1); // Outputs: 200

string = 10;
console.log(typeof string); // Outputs: 10

const n = null;
let a;

console.log(typeof a); // Outputs: "undefined"