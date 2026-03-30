 function sum(a: number | string, b: number): number | string {
    if(typeof a === 'number') {
        return a + b;
    }
    return a + b;
 }

console.log(sum('2', 3))
console.log(sum(2, 3))

const arr: number[] = [1, 4, 6]
const arrStr: Array<string> = ['sd', 'sf', 'fg']


const tup: [string, number, boolean] = ['3', 5, false]

enum Status {
    Reject = 'Reject',
    Resolve = 'Resolve',
    Ready = 'Ready'
};

console.log(Status.Ready)
console.log(Status.Resolve)
console.log(Status.Reject)


function updateStatus(status: Status): string {
    return status;
}


console.log(updateStatus(Status.Reject))


let anyValue: string = 'Hello';
anyValue = 'world'

let anyAny: any = 'Hi';
anyAny = 3
anyAny = {}

function print(text: Status): void {
    console.log(text)
}

print(Status.Resolve)

const result: void = print(Status.Ready)


console.log('result --- ', result)


function print1(text: Status): void {
    console.log(text)
    return
}