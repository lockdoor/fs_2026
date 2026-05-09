/**
 * JAVASCRIPT WORKSHOP: ARRAYS
 * 
 * This file covers:
 * 1. What, Why, and How of Arrays
 * 2. Building & Accessing (Indexing)
 * 3. Mixed Data Types
 * 4. Arrays vs. Objects
 * 5. Mutability with 'const'
 * 6. Looping through Arrays
 * 7. Modern Array Methods (map, filter, find, reduce)
 */

// ==========================================
// PART 1: WHAT, WHY, AND HOW
// ==========================================

/**
 * WHAT: An array is a special variable which can hold more than one value.
 * WHY: To store an ordered list of items.
 * HOW: Using square brackets [].
 */

const fruits = ["Apple", "Banana", "Orange"];
console.log("Basic Array:", fruits);


// ==========================================
// PART 2: BUILDING & ACCESSING
// ==========================================

/**
 * Indexing: Arrays are zero-indexed (starts at 0).
 */
console.log("First item:", fruits[0]); // Apple
console.log("Array Length:", fruits.length);

/**
 * Adding/Removing items:
 */
fruits.push("Mango");    // Add to the end
fruits.unshift("Grape"); // Add to the beginning
fruits.pop();            // Remove from the end
fruits.shift();          // Remove from the beginning

console.log("Modified Array:", fruits);


// ==========================================
// PART 3: MIXED DATA TYPES
// ==========================================

/**
 * Arrays can store any data types, even mixed!
 */
const mixed = [1, "Hello", true, { name: "Object" }, [1, 2]];
console.log("Mixed Data:", mixed[3].name); // Accessing object inside array


// ==========================================
// PART 4: ARRAYS VS OBJECTS
// ==========================================

/**
 * OBJECT: Used for NAMED properties (Key-Value). 
 *         Example: A user (name, age, email).
 * 
 * ARRAY: Used for ORDERED lists.
 *        Example: A list of users, a list of prices.
 */


// ==========================================
// PART 5: MUTABILITY WITH 'CONST'
// ==========================================

/**
 * PROVING ARRAYS ARE NOT CONSTANT:
 * Even if defined with 'const', you can change the CONTENT.
 * You just cannot REASSIGN the variable to a new array.
 */

const colors = ["Red", "Green"];
colors[0] = "Blue"; // This is ALLOWED
console.log("Mutated colors:", colors);

// colors = ["Yellow"]; // This would cause a TypeError!


// ==========================================
// PART 6: LOOPING THROUGH ARRAYS
// ==========================================

const numbers = [10, 20, 30, 40];

// 1. Traditional 'for' loop
for (let i = 0; i < numbers.length; i++) {
    // console.log("Traditional:", numbers[i]);
}

// 2. for...of loop (Clean and modern)
for (const num of numbers) {
    // console.log("for...of:", num);
}

// 3. forEach method (Functional style)
numbers.forEach((num, index) => {
    console.log(`Index ${index}: Value ${num}`);
});


// ==========================================
// PART 7: MODERN ARRAY METHODS
// ==========================================

const prices = [100, 200, 300, 400, 500];

/**
 * 1. map(): Creates a NEW array by transforming each element.
 */
const discountedPrices = prices.map(p => p * 0.9); // 10% discount
console.log("Discounted (map):", discountedPrices);

/**
 * 2. filter(): Creates a NEW array with elements that pass a test.
 */
const expensive = prices.filter(p => p > 250);
console.log("Expensive (filter):", expensive);

/**
 * 3. find(): Returns the FIRST element that passes a test.
 */
const specificPrice = prices.find(p => p === 300);
console.log("Found (find):", specificPrice);

/**
 * 4. reduce(): Reduces the array to a SINGLE value (e.g., sum).
 */
const total = prices.reduce((sum, p) => sum + p, 0);
console.log("Total (reduce):", total);


// ==========================================
// WORKSHOP CHALLENGE: SHOPPING CART PREP
// ==========================================

/**
 * CHALLENGE 1: Create an empty array named 'cart'.
 */

// Your code here:


/**
 * CHALLENGE 2: Add 3 products to the 'cart' array.
 * Each product should be an object with { name: string, price: number }.
 */

// Your code here:


/**
 * CHALLENGE 3: Calculate the total price of all items in the 'cart' 
 * using the .reduce() method.
 */

// Your code here:


/**
 * CHALLENGE 4: Use .filter() to create a new array containing 
 * only products that cost more than 100 Baht.
 */

// Your code here:
