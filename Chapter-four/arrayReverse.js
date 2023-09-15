/*
Reversing an array 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this 
exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray,takes an array as 
argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, 
does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use 
the standard reverse method. Thinking back to the notes about side effects and pure functions in the previous chapter, 
which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(array) {
    let newArr = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArr = newArr.concat(array[i]);
    }

    return newArr;
}

let array = [1, 2, 3, 4, 5, 6]

// console.log(reverseArray(array));

const reverseArrayInPlace = array => {
    for (let i = (array.length / 2) - 1; i >= 0; i--) {
        let prev = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = prev;
    }

    return array;
}

console.log(reverseArrayInPlace(array));