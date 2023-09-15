/*
Bean counting 
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string 
containing only one character (for example, "b"). The first character has position 0, which causes the last one to be 
found at position string.length - 1. In other words, a two-character string has length 2, and its characters have 
positions 0 and 1. Write a function countBs that takes a string as its only argument and returns a number that indicates 
how many uppercase “B” characters there are in the string. Next, write a function called countChar that behaves like 
countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting 
only uppercase “B” characters). Rewrite countBs to make use of this new function
*/

function countBs(string) {
    let numberOfBs = 0;

    for (let letter of string) {
        if (letter === 'B') numberOfBs += 1;
    }

    return numberOfBs
}

// console.log(countBs('dance'));
// console.log(countBs('Bean Ball'));
// console.log(countBs('roll BulbB'));

function countChar(string, char) {
    let charNumber = 0;

    for (let letter of string) {
        if (letter === char) charNumber += 1;
    }

    return charNumber;
}

// console.log(countChar("dancer", 'a'));
// console.log(countChar("baller", 'l'));
// console.log(countChar("dragon", 'z'));
// console.log(countChar("dragon", 'ag'));

function newBeanCounter(string) {
    return countChar(string, 'B');
}

console.log(newBeanCounter('ball'));
console.log(newBeanCounter('Baller'));
console.log(newBeanCounter('Bulb balB'));