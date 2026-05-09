/**
 * JAVASCRIPT WORKSHOP: FUNCTIONS & SCOPE
 * 
 * This file serves as a workshop to learn about:
 * 1. Scope (var, let, const)
 * 2. Parameters vs Arguments
 * 3. Return vs No Return
 * 4. Function Expressions & Arrow Functions
 */

// ==========================================
// PART 1: SCOPE (var, let, const)
// ==========================================

/**
 * 'var' - Function scoped (The old way)
 * It can be redeclared and updated. It is accessible outside of blocks {} 
 * but not outside of functions.
 */
if (true) {
    var globalScope = "I am accessible outside this block!";
}
console.log("var example:", globalScope);

/**
 * 'let' - Block scoped (Modern)
 * It cannot be redeclared in the same scope. It is only accessible within 
 * the block {} where it was defined.
 */
if (true) {
    let blockScope = "I am trapped in this block!";
}
// console.log(blockScope); // This would cause a ReferenceError!

/**
 * 'const' - Block scoped & Constant
 * Same as 'let' but its value cannot be reassigned.
 */
const PI = 3.14;
// PI = 3.15; // This would cause a TypeError!


// ==========================================
// PART 2: PARAMETERS VS ARGUMENTS
// ==========================================

/**
 * Parameters: The placeholders defined in the function signature.
 * Arguments: The actual values passed when the function is called.
 */

function greet(name, age) { // 'name' and 'age' are parameters
    console.log(`Hello ${name}, you are ${age} years old.`);
}

greet("Alice", 25); // "Alice" and 25 are arguments


// ==========================================
// PART 3: RETURN VS NO RETURN
// ==========================================

/**
 * NO RETURN: The function performs an action but returns 'undefined'.
 */
function sayHello() {
    console.log("Hello there!");
}
let result1 = sayHello();
console.log("sayHello returned:", result1); // Output: undefined

/**
 * WITH RETURN: The function sends a value back to the caller.
 */
function add(a, b) {
    return a + b;
}
let sum = add(10, 5);
console.log("The sum is:", sum); // Output: 15


// ==========================================
// PART 4: FUNCTION EXPRESSIONS & ARROW FUNCTIONS
// ==========================================

/**
 * 1. Function Declaration (Hoisted)
 */
function multiplyDecl(a, b) {
    return a * b;
}

/**
 * 2. Function Expression (Not hoisted)
 * A function is assigned to a variable.
 */
const multiplyExpr = function(a, b) {
    return a * b;
};

/**
 * 3. Arrow Function (Shorter syntax)
 */
const multiplyArrow = (a, b) => {
    return a * b;
};

// Even shorter for single-line returns:
const addArrow = (a, b) => a + b;

console.log("Arrow function result:", addArrow(20, 30));


// ==========================================
// WORKSHOP CHALLENGE
// ==========================================

/**
 * CHALLENGE 1: Create an arrow function named 'calculateArea' 
 * that takes 'width' and 'height' as parameters and RETURNS the area.
 */

// Your code here:
// const calculateArea = ...


/**
 * CHALLENGE 2: Create a function that greets a user.
 * If a name is provided, return "Hello, [name]!".
 * If no name is provided, return "Hello, Stranger!".
 */

// Your code here:
