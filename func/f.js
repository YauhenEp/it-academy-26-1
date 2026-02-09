const array = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  return array.reverse();
}

function reverseWithForAndPush(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseWithWhileAndPop(array) {
  const reversed = [];
  while (array.length > 0) {
    reversed.push(array.pop());
  }
  return reversed;
}

function reverseWithReduce(array) {
  return array.reduce((reversed, element) => {
    reversed.unshift(element);
    return reversed;
  }, []);
}

function reverseWithReduceRight(array) {
  return array.reduceRight((reversed, element) => {
    reversed.push(element);
    return reversed;
  }, []);
}

//[...array] -> copy of the array
console.log(reverseArray([...array]));
console.log(reverseWithForAndPush([...array]));
console.log(reverseWithWhileAndPop([...array]));
console.log(reverseWithReduce([...array]));
console.log(reverseWithReduceRight([...array]));