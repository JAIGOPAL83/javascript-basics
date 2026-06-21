// Objects
// Objects are collections of key-value pairs. They can represent real-world entities and their properties.
// You can create an object using object literal syntax or the Object constructor.
const employee = {
  id: 1,
  name: "John",
  salary: 100000,
};

console.log(employee.name);

employee.city = "Melbourne";

console.log(employee);

Object.keys(employee).forEach((key) => {
  console.log(key);
});
