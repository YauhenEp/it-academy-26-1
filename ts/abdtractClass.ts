abstract class Animal {
    run () {
        console.log('I am running')
    }
}


// const animal = new Animal()

class Cat extends Animal {

}

const cat = new Cat()

cat.run()