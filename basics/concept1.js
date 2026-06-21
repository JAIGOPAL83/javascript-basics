// let, const and Scope
// In JavaScript, you can declare variables using let and const. The main difference between them is that variables declared with const cannot be reassigned, while variables declared with let can be reassigned.
// Both let and const are block-scoped, which means they are only accessible within the block they are defined in (e.g., inside a function, loop, or if statement). This helps prevent accidental variable overwriting and promotes better code organization.
// var is function-scoped, which means it is accessible throughout the entire function in which it is declared, regardless of block boundaries. This can lead to unintended consequences and bugs, which is why let and const are generally preferred in modern JavaScript development.

const firstName = "Jaigopal"; // cannot be reassigned
let salary = 100000; // can be reassigned

salary = 120000;

// firstName = "John"; // This will throw an error because firstName is a constant
console.log(firstName);
console.log(salary);
