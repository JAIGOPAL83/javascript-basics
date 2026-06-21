// Async/Await
// Async/await is a modern syntax for handling asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain. The async keyword is used to declare an asynchronous function, and the await keyword is used to pause the execution of the function until a Promise is resolved.
// When you use await, the function will wait for the Promise to resolve and return the result before moving on to the next line of code. This helps avoid callback hell and makes it easier to handle asynchronous operations in a more linear and readable way.

// Example of async/await:

// 1. A function that simulates a time-consuming task
function bakePizza() {
  return new Promise((resolve) => {
    console.log("🍕 Putting the pizza in the oven...");

    // Simulate a 2-second delay
    setTimeout(() => {
      resolve("✨ Pizza is ready! Eat up! ✨");
    }, 2000);
  });
}

// 2. The async function that waits for the task to finish
async function dinnerTime() {
  console.log("?? Ordering dinner...");

  // The execution pauses here until bakePizza() resolves
  const result = await bakePizza();

  // This line won't run until the 2 seconds are up
  console.log(result);

  console.log("?? Washing the dishes.");
}

// 3. Run the function
dinnerTime();
