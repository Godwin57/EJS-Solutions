/*
Deep comparison 
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual 
properties. Write a function deepEqual that takes two values and returns true only if they are the same value or are 
objects with the same properties, where the values of the properties are equal when compared with a recursive call to 
deepEqual. To find out whether values should be compared directly (use the === operator for that) or have their 
properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep 
comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also 
produces "object". The Object.keys function will be useful when you need to go over the properties of objects to 
compare them.

Pseudo-code
    Write a function with two parameters, val1 and val2
    Since typeof null returns object, write a function that more correctly returns the type of a given value
    Using the findType function find the type of the two values 
        If they are not objects, then directly compare them
        Else, find the number of properties they contain
            If they're not the same, they possibly can't be equal
                Else find their different properties and then recursively compare them.
*/

const findType = val => {
    if (val === null) return 'null';
    return String(typeof val);
}

const findKey = obj => Object.keys(obj);

function deepEqual(val1, val2) {

    const val1Type = findType(val1),
        val2Type = findType(val2);

    if (val1Type !== 'object' && val2Type !== 'object') return val1 === val2;

    const obj1Keys = findKey(val1),
        obj2Keys = findKey(val2);

    if (obj1Keys.length !== obj2Keys.length) return false;

    for (let key of obj1Keys) {
        if (!obj2Keys.includes(key) || deepEqual(val1[key], val2[key]) === false) return false;
    }

    return true;
}

// Time to test.
let dan = { age: 21, gender: 'male' },
    fav = { age: 21, gender: 'female' },
    abra = { age: 18, gender: 'male' },
    faith = { age: 18, gender: 'female' },
    josh = { age: 21, gender: 'male' };

console.log(deepEqual(dan, faith));
console.log(deepEqual(dan, abra));
console.log(deepEqual(fav, faith));
console.log(deepEqual(dan, fav));
console.log(deepEqual(abra, faith));
console.log(deepEqual(dan, josh));