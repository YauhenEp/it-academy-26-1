let a = 5 && 0 && 3 && 'string' && {} && [];

console.log(a); // Outputs: []

if(a) {
    console.log("Truthy"); // This will be logged
} else {
    console.log("Falsy");
}


let b = 0 || '' || null || 10 || undefined;
console.log(b); 
if(b) {
    console.log("Truthy b "); // This will be logged
} else {
    console.log("Falsy b");
}


console.log(0 == false) 
console.log(0 === false)


console.log('dfsd'/12)
console.log(10/0)