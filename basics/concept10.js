// Modules and Import/Export
// JavaScript modules allow you to organize your code into separate files and reuse functionality across different parts of your application. You can export functions, objects, or values from one module and import them into another module using the export and import keywords.

import { add, subtract, multiply, divide } from "./math.js";

console.log(add(5, 6));
console.log(subtract(10, 4));
console.log(multiply(3, 7));
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}
