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
// Strings cannot be changed, only replaced. 

let text = "adwait";
let length = text.length;

let text1 = "I am here";
let char = text1.charAt(4);

let text2 = "HELLO WORLD";
let char1 = text2.charCodeAt(0); // returns the UTF-16 code (an integer between 0 and 65535) of the character at a specified index in a string.
// For characters outside the BMP(Basic Multilingual plane), it does not fully represent the two parts of the surrogate pair used to represent the character.

let text3 = "HELLO WORLD";
let code = text.codePointAt(0); // returns the code point i.e. the full UNICODE value unlikle charCodeAt().

// The at() method is a new addition to JavaScript.

// It allows the use of negative indexes while charAt() do not.

// Strings are not arrays. So property access ([]) can be a little unpredictable.
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.

let text4 = "HELLO WORLD";
text4[0] = "A";    // Gives no error, but does not work - unpredictability.

// Both the lines are same: The concat() method can be used instead of the plus operator.

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

// Use of slice():

let text5 = "Apple, Banana, Kiwi";
let part = text5.slice(-12, -6);

// substring() is similar to slice(), but the difference is that start and end values less than 0 are treated as 0 in substring().

// toUpperCase() and toLowerCase() are self-explanatory. 

// isWellFormed():
// A string is well formed if it does not contain lone surrogates.
// A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.

let text6 = "Hello World \uD800";
let result = text.isWellFormed();

// toWellFormed() returns a new string where all the 'lone surrogates' are replaced by the Unicode replacement character(U+FFFD)
let text7 = "Hello World \uD800";
let result7 = text.toWellFormed(); // returns 'Hello world �'

// trim(), trimStart(), trimEnd().

// padStart() and padEnd(): String methods used to pad a string with another string (multiple times) until it reaches a given length.

let text8 = "5";
let padded = text.padEnd(4,"0"); // 5000

// To pad a number, convert the number to a string first:
let number = 5;
number = number.toString();
let pad = number.padEnd(4, "0"); // 5000

// The repeat() method returns a new string with a number of copies of a string.
let text9 = "Hello world!";
let resultt = text.repeat(4); // Hello world!Hello world!Hello world!Hello world!

