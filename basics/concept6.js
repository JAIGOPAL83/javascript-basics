// Array Methods
// 1. map -> creates a new array by applying a function to each element of the original array.
// 2. filter -> creates a new array with all elements that pass the test implemented by the provided function.
// 3. find -> returns the value of the first element in the array that satisfies the provided testing function.
// 4. forEach -> executes a provided function once for each array element.
// 5. reduce -> executes a reducer function on each element of the array, resulting in a single output value.
// 6. some -> tests whether at least one element in the array passes the test implemented by the provided function.
// 7. every -> tests whether all elements in the array pass the test implemented by the provided function.
// 8. includes -> determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 9. indexOf -> returns the first index at which a given element can be found in the array, or -1 if it is not present.
// 10. slice -> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

// 1. map -> creates a new array by applying a function to each element of the original array.
const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);

console.log(doubled);

// 2. filter -> creates a new array with all elements that pass the test implemented by the provided function.
const nums1 = [1, 2, 3, 4, 5];

const evens = nums1.filter((n) => n % 2 === 0);

console.log(evens);

// 3. find -> returns the value of the first element in the array that satisfies the provided testing function.
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alex" },
];

const user = users.find((u) => u.id === 2);

console.log(user);

const names = ["Tom", "Alex", "Bob"];

const result = names.map((name) => name.toUpperCase());

console.log(result);
