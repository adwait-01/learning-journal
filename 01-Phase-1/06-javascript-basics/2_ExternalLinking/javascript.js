console.log("Hello I am Adwait. Nice to meet you.");

// Variable declaration using let keyword: (similar to var keyword but better. var is not used now-a-days. Just know it exists.)

let username = "Adwait";
let surname = "Panda";
console.log(username);
console.log(surname);

// Re-assign variables:

let age = 11; // declaration
console.log(age); // outputs 11 to the console

age = 54; // re-assignment
 
console.log(age);

// Using const keyword to avoid re-assignment: It will throw an error if we try to re-assign.

const pi = 3.14;
// pi = 10; An error is thrown and it doesn't even reach the console.log

console.log(pi);

console.log((3 + 2) - 76 * (1+1));

console.log(1+2+3+4+5+6);

// Uppercase Constants: used as aliases for difficult-to-remember values that are known before execution.
// Capital-named constants are only used as aliases for “hard-coded” values. (which are known before execution)

// But some constants are calculated in run-time, during the execution, but do not change after their initial assignment.
// So they are not written in upper-case but written normally using just the const keyword. 
// They are constants but not hard-coded constants.

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


num = 5; // the variable "num" is created if it didn't exist - no problem happens because it was accepted in older version.

alert(num); // 5

// Use of "use strict":

"use strict";

num = 5; // error: num is not defined 