// Tests
const nums = [3, 30, 34, 5, 9];

/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  if (nums.length === 0) {
    return '';
  }
  const result = nums.sort((x, y) => (y + "" + x) - (x + "" + y)).join('');
  return result.charAt(0) === '0' ? '0' : result;
};

console.log(largestNumber(nums), 'Target: 9534330');
