function sayHi(type: string, name: string, desc?: string): string {
    return `${type}! ${name}, ${desc}!`
}

// console.log(sayHi('Hello', 'Masha'))


function add<T, B>(numA: T, numB: B): [T, B] {
  return [numA, numB]
}

console.log(add('1', 23))