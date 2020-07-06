/**
 * Do while repeats the block of code until the condition is true, but first executes the code and then checks the condition.
 */

let count = 0;
do {
    console.log('Current count =>', count);
    count++;
} while(count < 5);
console.log('Loop stopped!');