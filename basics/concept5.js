// Spread Operator
// The spread operator allows you to expand an iterable (like an array or object) into individual elements. It is denoted by three dots (...).
// It can be used to create a new array or object by copying existing ones, and it can also be used to merge arrays or objects.

// 1. Copying an array
const user = {
  name: "John",
  city: "Melbourne",
};

const updatedUser = {
  ...user,
  city: "Sydney",
};

console.log(updatedUser);

// 2. Merging arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const all = [...nums1, ...nums2];

console.log(all);

// 3. Copying an object
const employee = {
  id: 1,
  name: "Alex",
};

const updated = {
  ...employee,
  salary: 100000,
};

console.log(updated);
