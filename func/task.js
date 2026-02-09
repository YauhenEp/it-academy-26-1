let ssa = [
    {name: "a", width: "10", height: "12"},
    {name: "b", width: "12", height: "14"},
    {name: "c", width: "15", height: "11"}
]

let ssa1 = [
    {name: "a", width: "10", height: "12"},
    {name: "b", width: "12", height: "14"},
    {name: "c", width: "15", height: "11"},
    {name: "d", width: "16", height: "12"},
    {name: "e", width: "19", height: "14"},
]

  // [{name: "a", square: "120"},{name: "b", square: "168"},{name: "c", square: "165"}]

//   function calculateSquare(array) {
//     return array.map(item => {
//         return {
//             name: item.name,
//             square: item.width * item.height
//         }
//     })
//   }


//   function calculateSquare1(array) {
//     return array.map(({name, width, height} = item) => {
//         return {
//             name,
//             square: width * height
//         }
//     })
//   }
// console.log(calculateSquare1(ssa1))
// console.log(calculateSquare1(ssa1))


// const arr = [1,2,3, 5, 67, 7,7]

// const [index1, index2, index3, ...rest] = arr
// console.log(index1)
// console.log(rest)

// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     age: 5,
//     fuel: "gas",
//     numberofSeats: 4
// }

// const {brand, model, fuel, ...carRest} = car
// console.log(fuel)
// console.log(brand)
// console.log(carRest)


const users = [
    {
        name: "John",
        email: "Jogn@mail.com"
    },
    {
        name: "Nick",
        email: "Nick84@gmail.com"
    },
    {
        name: "Alex",
        email: "Alex123@gmail.com"
    },
    {
        name: "Bob",
        emal: "bb11@gmail.com"
    },
    {
        name: "Jan",
        emal: "Jan@gmail.com"
    }
]

function filterUser(users) {
    return users.filter(({name} = item) => name.includes('a') || name.includes('A'))
}
console.log(filterUser(users))


  function calculateSquare2(array) {
    let arr = [];
    array.forEach(({name, width, height} = item) => {
        arr.push( {
            name,
            square: width * height
        })
    })
    return arr
  }

  console.log(calculateSquare2(ssa1))

function calculateSquare3(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        arr.push({
            name: array[i].name,
            square: array[i].width * array[i].height
        })
    }
    return arr
  }

   console.log(calculateSquare3(ssa1))