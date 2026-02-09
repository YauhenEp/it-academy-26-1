const arr = [123, 234, 345, 456, 567, 1, 10, 100, 1000];
const newArr = [...arr, 678, 789];

arr.sort((a, b) => a - b); // Ascending
// console.log(arr);

// const mapArr = newArr.map(x => x * 2);
// console.log(mapArr);
// console.log(newArr);

// const strArr = newArr.join(', ');
// console.log(strArr);
// console.log(newArr);

const pushArr = newArr.push(890);
console.log(pushArr);
console.log(newArr);

const popArr = newArr.pop();
console.log(popArr);
console.log(newArr);

