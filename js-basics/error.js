try {
    console.log(a)
    let a = 10
} catch (err) {
    console.log(err)
}

// console.log(a)
// let a = 10

console.log(25)
try {
    if(10/0 === Infinity) {
        throw new Error(`You can't divide by zero`)
    }
    console.log(`Everything is OK`)
} catch(err) {
    console.log(err)
} finally {
    console.log(`I am always here`)
}

console.log(25)