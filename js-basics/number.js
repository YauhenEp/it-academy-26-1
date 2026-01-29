let a = '1234a'
console.log(+a)
console.log(typeof +a); // Outputs: 1234 (number)

console.log(Number(a))
console.log(typeof Number(a)); 

console.log(parseInt(a, 10))
console.log(typeof parseInt(a, 10));

console.log(+(parseInt(a, 10)).toString(2))

console.log(+(0.1 + 0.2).toFixed(1) === +((0.3).toFixed(1))); // Outputs: false

Math.max(10, 20, 30, 5, 15) // Outputs: 30
Math.min(10, 20, 30, 5, 15) // Outputs: 5       
Math.round(4.6) // Outputs: 5
Math.ceil(4.1)  // Outputs: 5
Math.floor(4.9) // Outputs: 4
Math.random()   // Outputs: A random number between 0 and 1

console.log(Math.floor(Math.random() * (1000 - 100) + 100));