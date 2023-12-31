/*FLATTENING
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that 
has all the elements of the original arrays.
*/

const flatten = array => array.reduce((a, b) => a.concat(b));
const arrOfArr = [[1, 2, 3], ['2', 'a', 'fg'], [5, 6, 7, 8]];
console.log(flatten(arrOfArr));