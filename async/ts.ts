import fse from 'fs-extra'

interface Item {
    name: string;
    width: number;
    height: number;
}

interface ReturnItem {
    name: string;
    square: number;
}

let ssa1: Item[] = [
    {name: "a", width: 10, height: 12},
    {name: "b", width: 12, height: 14},
    {name: "c", width: 15, height: 11},
    {name: "d", width: 16, height: 12},
    {name: "e", width: 19, height: 14},
]
function calculateSquare(array: Item[]): ReturnItem[] {
    return array.map((item: Item) => {
        return {
            name: item.name,
            square: item.width * item.height
        }
    })   
}

function hello(): string {
    return 'Hello from async function! Number 2'
}

async function hello1(): Promise<string> {
    return 'Hello from async function! Number 1'
}
// calculateSquare(ssa1).then(result => console.log(result))

async function main1(): Promise<void> {
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