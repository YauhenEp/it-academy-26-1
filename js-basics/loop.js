
const sentense = 'hello world from javascript';

// for (let i = 0; i < sentense.length; i++) {
//     console.log(`index ${i} - letter ${sentense[i]}`)
// }



// for (let letter of sentense) {
//     console.log(`letter is ${letter}`)
// }

let a = 0;
while(a < 20) {
    console.log('While')
    a++
    if(a % 2 === 0) {
        continue;
    }
    console.log(a);
}

// do{
//     console.log('DO While')
//     console.log(a)
//     a++
// } while(a < 20)

// console.log(a)