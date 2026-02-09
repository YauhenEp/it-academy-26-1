let age = 15

if(age > 18 && age < 25) {
    console.log('You can go')
} else if(age >= 25) {
     console.log('Why are you here?')
} else {
    console.log('Stop')
}


const day = 5;

switch (day) {
    case 0: 
        console.log('Sunday')
        break;
    case 1: 
        console.log('Monday')
        break;
    case 2: 
        console.log('Tuesday')
        break;
    case 3: 
        console.log('Wednesday')
        break;
    default:
        console.log('Another day')
}

age  > 18 ? console.log('You can go') : console.log('Stop');
