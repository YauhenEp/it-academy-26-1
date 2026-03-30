function getValue(valueOne: number, valueTwo?: string): void {

}

getValue(3)
getValue(3, '3')

function getFullName(title: string = 'Mr', name: string, surname: string) {
    console.log(arguments)
    return `${title}. ${name} ${surname}`
}

getFullName('Mr', 'Adam', 'Smith')


function printAndReturn<t>(printValue: t): t {
    console.log('Print value is ', printValue)
    console.log('Print type is ', typeof printValue)
    return printValue;
}

const result = printAndReturn(3)
console.log('result - ', result);

printAndReturn('Smith')
printAndReturn({})


async function getValueAsync(valueOne: number, valueTwo?: string): Promise<void> {

}