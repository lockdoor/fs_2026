/**
 * JAVASCRIPT WORKSHOP: OBJECTS
 * 
 * This file covers:
 * 1. What, Why, and How of Objects
 * 2. Data Storage in Objects
 * 3. Accessing Data (Dot vs Bracket)
 * 4. The 'this' Keyword
 * 5. Object vs. JSON
 * 6. Object Constructors
 * 7. Copying Objects (Shallow vs Deep)
 * 8. Useful Object Methods
 */

// ==========================================
// PART 1: WHAT, WHY, AND HOW
// ==========================================

/**
 * WHAT: An object is a collection of related data and/or functionality.
 * WHY: To group related variables and functions together (Encapsulation).
 * HOW: Using curly braces {} (Object Literal).
 */

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024
};

console.log("Basic Object:", car);


// ==========================================
// PART 2: WHAT CAN AN OBJECT STORE?
// ==========================================

/**
 * Objects can store any data type: strings, numbers, booleans, 
 * arrays, other objects, and functions (called methods).
 */

const user = {
    id: 1,
    username: "dev_zero",
    isAdmin: true,
    hobbies: ["Coding", "Gaming", "Cooking"], // Array
    address: { // Nested Object
        city: "Bangkok",
        country: "Thailand"
    },
    login: function () { // Method
        console.log("User logged in!");
    }
};

console.log("Nested Property:", user.address.city);
user.login();


// ==========================================
// PART 3: ACCESSING DATA (DOT VS BRACKET)
// ==========================================

/**
 * 1. Dot Notation: user.username (Commonly used)
 * 2. Bracket Notation: user["username"] (Useful for dynamic keys)
 */

const propertyName = "username";
console.log("Dot Notation:", user.username);
console.log("Bracket Notation:", user[propertyName]);


// ==========================================
// PART 4: THE 'THIS' KEYWORD
// ==========================================

/**
 * 'this' refers to the current object the code is written inside.
 * It is used to access other properties of the same object.
 */

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log("Full Name using 'this':", person.fullName());


// ==========================================
// PART 5: OBJECT VS JSON
// ==========================================

/**
 * JSON (JavaScript Object Notation) is a data format (string).
 * 1. Keys must be double-quoted strings.
 * 2. Cannot store functions/methods.
 */

const productObj = { name: "Laptop", price: 1500 };

// Convert Object to JSON (String)
const jsonString = JSON.stringify(productObj);
console.log("JSON String:", jsonString);

// Convert JSON (String) back to Object
const backToObj = JSON.parse(jsonString);
console.log("Parsed Object:", backToObj.name);


// ==========================================
// PART 6: OBJECT CONSTRUCTORS
// ==========================================

/**
 * A blueprint for creating multiple objects of the same type.
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

const p1 = new Product("Phone", 800);
const p2 = new Product("Tablet", 600);

console.log("Constructed Object:", p1);


// ==========================================
// PART 7: COPYING OBJECTS (SHALLOW VS DEEP)
// ==========================================

/**
 * Shallow Copy: Copies only the first level. Nested objects are still referenced.
 */
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original }; // Spread operator

shallowCopy.a = 99; // Doesn't change original
shallowCopy.b.c = 99; // DOES change original! (Because 'b' is a reference)

console.log("Original after shallow change:", original.b.c); // 99

// can't use this it copy only first level
// const deepCopy = Object.assign({}, original);

/**
 * Deep Copy: Copies everything, including nested objects.
 */
const deepCopy = JSON.parse(JSON.stringify(original)); // use this one to deep copy
// const deepCopy = structuredClone(original); // this is new method for deep copy

deepCopy.b.c = 1000;
console.log("Original after deep change:", original.b.c); // Still 99


// ==========================================
// PART 8: USEFUL OBJECT METHODS
// ==========================================

const student = { name: "Somchai", age: 20, grade: "A" };

console.log("Keys:", Object.keys(student));     // Array of keys
console.log("Values:", Object.values(student)); // Array of values
console.log("Entries:", Object.entries(student)); // Array of [key, value] pairs

// Object.freeze(student); // Prevents any changes to the object


// ==========================================
// WORKSHOP CHALLENGE
// ==========================================

/**
 * CHALLENGE 1: Create a "Product Blueprint" (Object Constructor).
 * The constructor should take 'name' and 'price' as parameters.
 * Each product should also have a method 'display' that prints:
 * "[Product Name] costs [Price] Baht"
 */

// Your code here:


/**
 * CHALLENGE 2: Use your constructor to create 3 different products.
 * Example: 'Apple', 'Banana', 'Orange' with different prices.
 */

// Your code here:


/**
 * CHALLENGE 3: Access the price of the second product you created 
 * using bracket notation and print it to the console.
 */

// Your code here:
