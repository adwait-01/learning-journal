const userName = "Adwait";
const greeting = `Hello! ${userName}`; // template literal.

// Properties of template literals:

// 1. We can embed JavaScript in them.
// 2. We can declare template literals over multiple lines. 

const one = "hello";
const two = "world";
const joined = `${one} ${two}`;
console.log(joined); // "hello world"

const greeting1 = "Howdy";
const name1 = "Adwait";
console.log(`${greeting1}, ${name1}`); // "Howdy, Adwait"

const song = "City of Stars";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score/highestScore) * 100}%.`;

console.log(output);

const newLine = `One day I finally knew 
what I had to do, and began`; // Multiline strings in template literals.
console.log(newLine);

// To achieve the same in normal strings:

const newLine2 = "One day I finally knew \n what I had to do, and began";

// Escaping characters:

const bigMouth = 'I\'ve got no right to take my place...'; // We "escape" the problem quotation mark (i.e. ' here).
console.log(bigMouth);
// We can use the same technique to insert other special characters. 

// The Number() function converts anything passed to it into a number if it can. 
// The String() function converts its argument to a string. 

// JavaScript strings are primitive and immutable. All string methods produce a new string without altering the original string. 

let text = "adwait";
let length = text.length;