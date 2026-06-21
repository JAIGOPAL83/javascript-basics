const employees = [
  {
    id: 1,
    name: "John",
    salary: 100000,
  },
  {
    id: 2,
    name: "Alex",
    salary: 120000,
  },
];

const employeeNames = employees.map((employee) => employee.name);
console.log(employeeNames);

const employees_with_low_salary = employees.filter(
  (employee) => employee.salary <= 100000,
);
console.log(employees_with_low_salary);

const employee_with_id_2 = employees.find((employee) => employee.id === 2);
console.log(employee_with_id_2);

// Destructuring
const { name, salary } = employees[0];
console.log(name);
console.log(salary);

async function add_city_to_employee(employee, city) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("added city to employee");
      resolve({ ...employee, city });
    }, 2000),
  );
}

console.log("Adding cities to employees...");
employees[0] = await add_city_to_employee(employees[0], "New York");
console.log(employees[0]);
employees[1] = await add_city_to_employee(employees[1], "Los Angeles");
console.log(employees[1]);
