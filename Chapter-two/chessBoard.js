/* Chessboard Write a program that creates a string that represents an 8×8 grid, using new line characters to separate 
lines. At each position of the grid there is either a space or a "#" character. The characters should form a 
chessboard. Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # # 
# # # # 
 # # # # 
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works 
for any size, outputting a grid of the given width and height.
*/

const chessBoard = (width = 8, height = 8) => {
    let string = '', position = 1;

    for (let column = 1; column <= height; column++) {
        for (let row = 1; row <= width; row++) {
            if (position % 2 == 0) string += '#';
            else string += ' ';
            position += 1;
        }
        position += 1;
        string += '\n';
    }

    return string;
}

console.log(chessBoard(100, 100));