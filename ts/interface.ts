interface IAnimal {
    age: number,
    type: string,
    breed: string,
    move: () => string,
    voice: (times: number) => string
}

const cat: IAnimal = {
    age: 1,
    type: 'cat',
    breed: 'scotland',
    move: function() {return `${this.type} is moving`},
    voice: function(times: number): string {
        let result = ''
        for(let i = 0; i < times; i++) {
            result += 'meow '
        }
        return result
    }
}

interface IFamily {
    numberOfMember: number,
    nationality: string,
    numberOfchildren: number,
    isFull: boolean,
    pets: IAnimal[],
}

const family: IFamily = {
    numberOfMember: 4,
    nationality: 'Belarus',
    numberOfchildren: 2,
    isFull: true,
    pets: [cat] 
}

console.log(cat.voice(4))

type birds = {
    age: number,
    asd: string,
    breed: string,
}

type Pet = IAnimal | birds

const petAnimal: Pet = {
    age: 1,
    asd: 'cat',
    breed: 'scotland',
    voice: function(times: number): string {
        let result = ''
        for(let i = 0; i < times; i++) {
            result += 'meow '
        }
        return result
    }
}

const enptyObj: object = {
    name: 'enpty'
}