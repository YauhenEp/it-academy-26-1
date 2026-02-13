const fse = require('fs-extra');


// fse.ensureDir('./dir', () => {
//     fse.ensureFile('./dir/file.txt', () => {
//         fse.ensureDir('./dir2', () => {
//             fse.ensureDir('./dir3', () => {
//                 fse.move('./dir/file.txt', './dir2/file.txt', () => {
//                     fse.copy('./dir2/file.txt', './dir3/file.txt', () => {
//                         fse.remove('./dir2/file.txt')   
//                         fse.remove('./dir2')
//                         fse.remove('./dir3')
//                         fse.remove('./dir')
//                      })
//                 })
//             })
//         });
//     }) 
// })


// fse.ensureDir('./dir')
//     .then(() => {
//         fse.ensureFile('./dir/file.txt')
//         return 'Success Youhuu'
//     })
//     .then((successStr) => {
//         console.log(`Previos operation result: ${successStr}`)
//         fse.ensureDir('./dir2')
//     })
//     .then(() => fse.ensureDir('./dir3'))
//     .then(() => fse.move('./dir/file.txt', './dir2/file.txt'))
//     .then(() => fse.copy('./dir2/file.txt', './dir3/file.txt'))
//     .then(() => fse.remove('./dir2/file.txt'))
//     .then(() => fse.remove('./dir2'))
//     .then(() => fse.remove('./dir3'))
//     .then(() => fse.remove('./dir'))
//     .catch(err => console.log(err))

async function main() {
    try {
        console.log('Hello from async function!')
        await fse.ensureDir('./dir')
        await fse.ensureFile('./dir/file.txt')
        console.log('Success Youhuu')
        await fse.ensureDir('./dir2')
        await fse.ensureDir('./dir3')
        await fse.move('./dir/file.txt', './dir2/file.txt')
        await fse.copy('./dir2/file.txt', './dir3/file.txt')
        await fse.remove('./dir2/file.txt')
        await fse.remove('./dir2')
        await fse.remove('./dir3')
        await fse.remove('./dir')
        console.log('Success FINAL')
    } catch (err) {
        console.log(err)
    }
}


main()

console.log('This will be logged before the async operations are completed.')
let ssa1 = [
    {name: "a", width: "10", height: "12"},
    {name: "b", width: "12", height: "14"},
    {name: "c", width: "15", height: "11"},
    {name: "d", width: "16", height: "12"},
    {name: "e", width: "19", height: "14"},
]
function calculateSquare(array) {
    return array.map(item => {
        return {
            name: item.name,
            square: item.width * item.height
        }
    })   
}

// calculateSquare(ssa1).then(result => console.log(result))

async function main1() {
    try {
        console.log('Hello from async function! Number 1')
        await fse.ensureDir('./dir4')
        await fse.ensureFile('./dir4/file.txt')
        console.log('Success Youhuu Number 1')
        await fse.ensureDir('./dir5')
        await fse.move('./dir4/file.txt', './dir5/file.txt')
        await fse.remove('./dir4')
        await fse.remove('./dir5')
        console.log('Success FINAL Number 1')
    } catch (err) {
        console.log(err)
    }
}
main1().then(() => console.log('All operations in main1 are completed.'))
console.log(calculateSquare(ssa1))