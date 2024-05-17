function createError(): never {
  throw new Error('Any error');
}

createError();

// never is used when the function never return anything,
// gettinng stucked and executing forever
