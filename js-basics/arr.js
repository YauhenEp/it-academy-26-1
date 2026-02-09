const arr = [123, 234, 345, 456, 567, 1, 10, 100, 1000];
const arr1 = ['sdfdf', 123.45, true, null, undefined, {}, []];

console.log(arr[0])
console.log(arr[arr.length -1])

for (let i = 0; i < arr.length; i++) {
    console.log(`Element at index ${i}: ${arr[i]}`);
}

for (let i of arr) {
    console.log(`Element: ${i}`);
}

arr.push(678);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.join(', '));

console.log(arr.concat([678, 789], [890, 901]));

console.log(arr.slice(1, 4));

console.log(arr.indexOf(345));
console.log(arr.indexOf(999));

console.log(arr.includes(456));

console.log(arr.reverse());

console.log(arr.sort((a, b) => a - b)); // Ascending
console.log(arr.sort((a, b) => b - a)); // Descending
console.log(arr.sort((a, b) => a - b)); 

const mappedArr = arr.map(function (objectParameter) { return objectParameter * 2; });
const mappedArr1 = arr.map(objectParameter => objectParameter * 2);
console.log(mappedArr);

const filteredArr = arr.filter(objectParameter => objectParameter > 200);
console.log(filteredArr);

const reducedValue = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10000);
console.log(reducedValue);