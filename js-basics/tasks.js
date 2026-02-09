// palindrome "A man a plan a canal Panama"

// let str = "A man a plan a canal Panama"
// let lowerCaseStr = str.toLowerCase();
// console.log(lowerCaseStr)
// let strWithoutSpaces = lowerCaseStr.replaceAll(' ', '');
// console.log(strWithoutSpaces)
// let reversedStr = strWithoutSpaces.split('').reverse().join('');
// console.log(reversedStr)

// const checkPalindrom = str.toLowerCase().split(' ').reverse().map(word => word.split('').reverse().join('')).join('')
// console.log(checkPalindrom)
// const checkPalindrom1 = str.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
// console.log(checkPalindrom1)

// console.log(strWithoutSpaces === checkPalindrom)

// let palindromWithReduce = str.split('').reduce((currentStr, letter) => {
//     if(letter === ' ') {
//         return currentStr;
//     }
//     return letter.toLowerCase() + currentStr;
// }, '');
// console.log(palindromWithReduce)


// Создай функцию, которая считает количество гласных (a, e, i, o, u, y) в строке.
// "Programming is fun" ➜ 5
const sen = "Programming is fun" 
// const letters = 'aeiouy'
// let sum = 0
// let arr = []
// for(let i = 0; i < sen.length; i++) {
//     if(letters.includes(sen[i])) {
//         sum++
//         arr.push(sen[i])
//     }
// }
// console.log(sum, arr)

// for (let i = 0; i < str.length; i++) {
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'y') {
//         sum++
//     }
// }


// for (let i = 0; i < sen.length; i++) {
//     for(let j = 0; j < letters.length; j++) {
//         if(sen[i] === letters[j]) {
//             sum1++
//             break
//         }
//     }
// }
// \b -> boundary position of the symbol 
// \w -> letter a-z
// g -> all matches in the string
function addCapitalLettersWithRegex(sentense) {
    return sentense.replace(/\b\w/g, char => char.toUpperCase()); 
}




// hello world from javascript" ➜ "Hello World From Javascript"
const sentense = 'hello world from javascript';
const newSen = sentense.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
console.log(newSen)
console.log(addCapitalLettersWithRegex(sentense));

let a = 0;
let b = 0;

console.log(a++)
console.log(a)
console.log(++b)