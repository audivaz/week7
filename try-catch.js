try {
  foo();
} catch (err) {
  console.log(err.message);
} finally {
  console.log("This is always executed");
}

//! Great job on steps 1-5 Audi!

// 6

function fizz() {
  throw new Error("my error message");
}

//! Perfect fizz() function.

// 7

try {
  fizz();
} catch {
  console.log(Error.message);
}

console.log(Error.message);
//! Step 7 - You are missing the buzz() function here. The whole try/catch block should be enclosed within the buzz() function. You also need to pass (err) as a paramater on your catch block to execute properly. And lastly, Error.message
