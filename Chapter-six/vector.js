/* 
A vector type
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it 
should save to properties of the same name. Give the Vec prototype two methods, plus and minus, that take another 
vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) 
x and y values. Add a getter property length to the prototype that computes the length of the vector—that is, the 
distance of the point (x, y) from the origin (0, 0).

Pseduo-code
    Deleted my pseudo-code
*/

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    plus(vector) {
        if (!vector.x && !vector.y) return "Give me a two dimensional vector"
        let newVec = {};
        newVec.x = this.x + vector.x;
        newVec.y = this.y + vector.y;
        return newVec;
    }

    minus(vector) {
        if (!vector.x && !vector.y) return "Give me a two dimensional vector"
        let newVec = {};
        newVec.x = this.x - vector.x;
        newVec.y = this.y - vector.y;
        return newVec;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));;
    }
}

let vec1 = new Vector(5, 5);
let testVec = { x: 2, y: 2 }
console.log(vec1.plus(testVec), "Plus");
console.log(vec1.minus(testVec), "Minus");
console.log(vec1.length, "Length");
