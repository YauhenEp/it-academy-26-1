let a = 'string example';
let b = "another string example";
let c = `template literal example`;

console.log('HEllo World!! ' + a + "!! " + b + '!!! ' + c + "!!!!");

console.log(`HEllo World!! ${a}!! ${b}!!! ${c}!!!!`);


console.log(a.charAt(0)); // Outputs: 's'
console.log(a[0]); // Outputs: 's'


let d = 'HEllo World!! ' + a + "!! " + b + '!!! ' + c + "!!!! World!";

console.log(d.length); // Outputs the length of the string
console.log(d.toUpperCase()); // Outputs the string in uppercase
console.log(d.toLowerCase()); // Outputs the string in lowercase
console.log(d.indexOf('World')); // Outputs the index of the first occurrence of 'World'
console.log(d.lastIndexOf('World')); // Outputs the index of the last occurrence of 'World'
console.log(d.slice(0, 5)); // Outputs: 'HEllo'
console.log(d.slice(6, 11)); // Outputs: 'HEllo'
console.log(d.replace('World', 'Universe')); // Replaces first occurrence of 'World' with 'Universe'
console.log(d.replaceAll('World', 'Universe')); // Replaces all occurrences of 'World' with 'Universe'
console.log(d.replace(/World/g, 'Universe')); // Replaces first occurrence of 'World' with 'Universe'
console.log(d.split(' ')); // Splits the string into an array of substrings based on spaces
console.log(d.split('')); // Splits the string into an array of substrings based on spaces


console.log(d.indexOf('Worldssdvds')); // Outputs the index of the first occurrence of 'World'
console.log(d.includes('Worldssdvds')); // Outputs the index of the first occurrence of 'World'
console.log(d.includes('World')); // Outputs the index of the first occurrence of 'World'