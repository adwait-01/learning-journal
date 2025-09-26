let message = "hello";
message = 12345; // dynamically typed - there exist data types, but variables are not bound to any of them.

// Infinity, -Infinity, NaN are special numeric values that also belong to the data types "Number".

alert(Infinity);

alert("not a number"/2); // NaN

// NaN is sticky. Any further mathematical operation on NaN returns NaN.

alert(3*NaN); // NaN

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1.

// Doing maths is “safe” in JavaScript. At worst, we’ll get NaN as the result.

// the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, 
// because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

const BigInt = 1234567890123456789012345678901234567890n; // A BigInt value is created by appending n to the end of an integer. 

// use of backticks in strings: 

let name = "Adwait"

alert(`Hello, ${name}`); // embed a variable.

alert(`the result is ${1+2}`); // embed an expression.

// single quotes and double quotes do not have this embedding functionality. 

let isGreater = 4 > 1;
alert(isGreater); // true 

let age = null; 

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.

let agee;
alert(agee); // undefined type.

agee = undefined; // yes it's possible.
// But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable,
// while undefined is reserved as a default initial value for unassigned things.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  - Math is a built-in object.

typeof null // "object" - error from the very early days of JavaScript and is kept for compatibility.

typeof alert // "function". There is no special "function" type in JS. Functions belong to the object type. 

// But typeof treats them differently, returning "function". That also comes from the early days of JavaScript.
// Technically, such behavior isn’t correct, but can be convenient in practice.

// Summary
// There are 8 basic data types in JavaScript.

// Seven primitive data types:

// number for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers. They are used to create unique identifiers for objects.

// And one non-primitive data type:

// object for more complex data structures. It is used to store collections of data and more complex entities. 

// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.