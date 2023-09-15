const arrayToList = array => {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }

    return list;
}

const listToArray = list => {
    let array = [];
    for (let obj = list; obj; obj = obj.rest) {
        array.push(obj.value);
    }
    return array;
}

const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 100, rest: null } } } }
console.log(listToArray(list));

/*
Take a list and produce an array whose elements are the values of the value properties of the array
Pseudo-code
Write a function that accepts the list as a parameter. The list is a nested object whose values are a value property and
a rest property holding a reference to the list.
Using a for loop, loop through the list and add all the values in the nested value properties of the list to the array
*/

// console.log(arrayToList([1, 2, 3]))