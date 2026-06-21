// Promises
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to handle asynchronous operations in a more manageable way, avoiding callback hell.
// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.

const promise = new Promise((resolve, reject) => {
  const success = false; // Change to true to resolve the promise

  if (success) {
    resolve("Completed");
  } else {
    reject("Failed");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
