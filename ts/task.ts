let num: number = 4;

let arr: string[] = ['dfad', 'dsaf']
let arr1: Array<string> = ['dfad', 'dsaf']

let tupple: [number, boolean, string, string[]] = [4, true, 'asd', ['asd']]

enum Color {
    red = 'Red',
    green = 'Green',
    yellow = 'Yellow'
}

Color.red 

function getColor(color: Color): string {
    return color
}

getColor(Color.red)


let anyVAriable: any = true
anyVAriable = 4
anyVAriable = 'string'
anyVAriable = []


function getResult(num1: number, num2: number): void {
    num1 + num2
}


let iDoNotKnowWhoIAm: string | number  = 4
iDoNotKnowWhoIAm = 'string'

