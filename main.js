/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: undefined


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A:"Tim" (the string)


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: "JD" (the string)


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: "Hello, how are you?" (the string)


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: Math is set to 40

math = high - "5";
// Q: What is `math` set to?
// A: 45


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer should not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var howOld = today - born;
var birthdayMsg = "Tim is " + howOld + " years old";
console.log (birthdayMsg);


// Store some information following in variables.
var yourName = "Jontae";
var instructorName = "Tim";

// Update the variables above so the expression reads correctly.
// Answers Below:


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
