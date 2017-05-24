// Tests
const number = [5, 9, 3, 9];

/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let i = digits.length - 1;
  for (i; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log('Input: ', number);
console.log('Output: ', plusOne(number));
