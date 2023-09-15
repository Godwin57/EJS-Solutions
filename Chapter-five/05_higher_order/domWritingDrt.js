/*Dominant writing direction 
    Write a function that computes the dominant writing direction in a string of text. Remember that each script object 
    has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom). The 
    dominant direction is the direction of a majority of the characters that have a script associated with them. The 
    characterScript and countBy functions defined earlier in the chapter are probably useful here.

    Pseudo-code
        So the task is to find the dominant writing direction of the text which simply means, find the dominant script
        in the text and then find it's writing direction. This means finding:
            Firstly, the dominant script in the text
            And finally, finding it's writing direction.

        Write a function that accepts a text from the user
        Then find the main/ dominant script used in the text using the countBy function.
        Using the count property of the functions returned value, find the script that occured more
        Then find the dominant writing direction of the script

    So the program was not so difficult after all. Well, I wrote it in the program inside the 
    chapter folder in the code folder.
*/