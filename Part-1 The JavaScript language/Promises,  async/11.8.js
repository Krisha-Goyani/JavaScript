// await makes JavaScript wait until that promise settles and returns its result.
// works only inside async functions
// let value = await promise;

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}
f();


//   await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
  }

  function f() {
    // shows 10 after 1 second
    wait().then(result => console.log(result));
  }

  f();
