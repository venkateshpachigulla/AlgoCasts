// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//solution 4 - recursive with memoization
function memoization(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    }
  };
}

function slowFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoization(slowFib);

// solution3 - takes long time so better to add memoization
// time complexity - O(2^n)
function fib3(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// solution2 - using recursion
function fib2(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// solution 1
function fib1(n) {
  const result = [0, 1];
  for (let i = 0; i < n; i++) {
    result.push(result[i] + result[i + 1]);
  }

  return result[n];
}
console.log(fib(7));

module.exports = fib;
