// Object Destructuring
// Object destructuring allows you to extract properties from an object and assign them to variables in a concise way.
// It uses curly braces {} and the variable names must match the property names in the object.
// Array Destructuring allows you to unpack values from arrays into distinct variables.
// It uses square brackets [] and the variable names can be anything you choose.

// Object Destructuring
const user = {
  id: 1,
  name: "Jaigopal",
  city: "Melbourne",
};

const { name, city } = user;

console.log(name);
console.log(city);

// Array Destructuring

const colors = ["red", "blue", "green"];

const [first, second] = colors;

console.log(first);
console.log(second);
