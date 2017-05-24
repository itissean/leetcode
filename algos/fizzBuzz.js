// Tests
const n = 15;

/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  let i = 1;
  while (i <= n) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
    i++;
  }
};

fizzBuzz(n);
